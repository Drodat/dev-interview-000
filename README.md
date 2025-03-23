## Getting Started

This is a [Next.js](https://nextjs.org) v15 project. You may need to update your version of node js.

To run it, install the pre-installed packages and run the development server:

```bash
yarn install 
yarn dev
# or
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project is connected to a firebase database with a single collection of organizations, each with their own collection of users.

Firebase is already configured and there are 2 helper functions in the `src/lib/firebase/stats.ts` file that are used to show the total number of organizations and users on the main dashboard. The pages are pre-designed and are pre-populated with dummy data. 

The purpose of this assessment is to build out a functional 'organizations' tab using the data existing in the firestore database. 

Your tasks are listed below:

1. Update the `app/organizations/page.tsx` to list the names of each organization in the database.

    a. The correct information from the database (# of users, status, and date created) should be displayed

2. When clicking an organization, you should get redirected to the individual organization page. (`app/organizations/[id]/page.tsx`)

    a. The [id] of the URL should be the correct organization document ID from firestore .

    b. This page should show all the users that are associated with 'users' subcollection

    c. The correct information from the database (email, role, and date created) should be displayed

3. When clicking a user, you should get redirected to an individual user page. (`app/user/[userId]/page.tsx`)

    a. The [userId] of the URL should be the correct user document ID from firestore.

    b. This page should show the correct user information (name, email, and organization)

    c. The edit button should be functional (if edited, button should change to 'save' and clicking save should update firestore)

    d. The back button should go back to the correct organization page (currently goes back to main organization tab)

## Further Notes

This project should take between 1-2 hours to implement:

 - If you can not complete a step, you will not be penalized 
 - You can use any external resources (docs / open source projects / chatGPT or other AI) 
 - Please take notes on your thought process for each task. Include what resources you used, if any.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Firebase and Firestore, take a look at the following resources:

- [Firebase Documentation](https://firebase.google.com/docs) - general firebase documentation.
- [Firestore Documentation](https://firebase.google.com/docs/firestore) - firestore documentation (see 'Add Data' for solution to 3c).


