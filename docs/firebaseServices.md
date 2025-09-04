# Firebase Services

## Application Architecture and Design Patterns (what is that)

First of all, the followed desigs should be introduced:

### Layered architecture

Application's architecture is inspired from the **"Clearn Architecutre"**, here is a break down of layers representations of this next.js application

- Presentation Layer: UI components
- Application Layer (Orchestration Layer): Services Directory
- Domain Layer (Core): Models directory
- Persistence Layer: Repositories Directory

Each layer can call functions from layers beneath it but vise versa is not possible, except the application/orchestration layer can call repositories functions which is the presistance layer, that is a layer above the application layer.

<image src="./clean-architecture.png"  alt="clean architecture diagram"/>

<br>

### Single Repository pattern

It is an object-oriented design pattern that provides a generalized interface for database operations. Based on provided parameters and imported TypeScript types, the specific document type is determined dynamically, allowing consistent and type-safe handling of CRUD operations across different collections.

## Comparision with the old design (why is it important)

### Old Design

This design saved tones of code lines as previousley that was the flow

- A specific function is hardcoded to specific CRUD operation for a specific document.
- if a document contains files such as images and videos, manually each object should be uploaded to the storage, and then use the returned url to store it in the firebase db document

eventually redundant code is harder to debug, provides bad DX (developer experience), and error-prone.

Code Example:

```ts
// actions.ts (a hard coded function for each action)
export async function createItemAction(data: any) {
  try {
    const { result: newId, error: idError } = generateId("on-set-with-onetake");
    if (idError || !newId) {
      return { error: "Failed to generate document ID" };
    }

    let fileLink = null;

    if (data.image) {
      const arrayBuffer = await data.image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { error: errorFile, url } = await uploadFileAdmin(
        `on-set-with-onetake/${newId}/image`,
        buffer,
        data.image.type || "application/octet-stream"
      );

      if (errorFile) {
        return { error: `Failed to upload image: ${errorFile}` };
      }

      fileLink = url;
    }

    const { success, error } = await createWithSpecificId(
      "on-set-with-onetake",
      newId,
      {
        ...data,
        image: fileLink,
        publishedAt: data.publishedAt ? data.publishedAt : Timestamp.now(),
      }
    );

    if (!success || error) {
      return { error: `Failed to create Firestore document: ${String(error)}` };
    }

    revalidatePath("/admin/on-set-with-onetake");

    // Return serialized item
    return {
      success: "Item created successfully!",
      id: newId,
      result: serializeFirestore<any>({ ...data, image: fileLink }),
    };
  } catch (err) {
    console.error("CREATE_ITEM_WITH_IMAGE_ERROR:", err);
    return { error: "Unexpected error creating item." };
  }
}

// page.ts
const { success, error } = await createItemAction(values);
```

### Current Design

Just pass your model's data to dbService and the previously mentioned flow will be done automatically with only one function!

## How to use it

There are two available options: client sdk and firebase admin for server side usage, it is your decision to decide which to use.

```ts
// models/Testimonial.d.ts
export interface Testimonial {
  name: string;
  text: string;
  image: File | string;
}

// page.tsx (just one function for all documents)
const data = await createAdminDbItem<Testimonial>("testimonial", {
  name: "John Doe",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: new File([], "image.jpg"), // mock image
});
```

> Important: following the layered architecture as mentioned before, UI component will only be able to call services functions not repositories.

Notes:

- Objects Like videos and images should have this type: `File | string` as its lifetime it will have the `File` type in the frontend form and it will be after that a `string` when it is converted to url before uploading it to firestore db.
- use Admin services in server side components and sdk services in client side ones, if you want to deal with persistance layer according to user's role, there is no option except using firebase client sdk.
