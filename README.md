# Nextjs The Connector Template

This template will save you tons of configuration and debugging time in terms of initial configuration and during the whole project's life cycle, here is a list of the preconfigured items:

- Firebase Persistence
  - db
  - storage
- Firebase Auth
- Localization
- E2E test environment
- Reusable UI components
- Routes structure for admin dashboard and general users pages.

## To Do

- Run the setup script using this command `node setupScript.js` to remove the unnecessary configuration, this script will remove the old GitHub origin to be able to attach it to your new repo.
- Now feel free to delete `setupscript.js` and start hacking!
- Run this command to update shadcn components `npx shadcn@latest diff`
- Run git commands to attach to the remote repo
  - `git init`
  - `git remote add origin <origin_url>`
- Run this command to updated npm packages to the latest changes regardless specified version number in packages.json `npx npm-check-updates -u && npm install`

## Documentation References

- [Firebase Services](/docs/firebaseServices.md)
- [Form Abstraction Component](/docs/formAbstraction.md)
- [GitHub Workflow](/docs/formAbstraction.md)
- [Used Extensions](/docs/used-extensions.md)
