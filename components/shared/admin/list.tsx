import React from "react";
import Description from "../typography/description";

interface ListProps<T> {
  data: T[];
  card: (item: T) => React.ReactNode;
}

function List<T>({ data, card }: ListProps<T>) {
  return (
    <div className="mt-5 flex flex-col gap-2">
      {data.length === 0 ? (
        <Description size="sm">
          There are no items yet, click the button above to create one
        </Description>
      ) : (
        data.map((item, index) => <div key={index}>{card(item)}</div>)
      )}
    </div>
  );
}

export default List;
