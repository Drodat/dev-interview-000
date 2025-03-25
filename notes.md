## Solve Process

**1 - Update organization page**

The first step was to look at the project, install the dependencies, and run it. I had trouble running the project. The version of React was a Release Candidate (I asked Claude), so I modified the `package.json`. In the organizations page, the data was provided by a mock JSON and let me know the structure of the organization data.

To request the data, I modified the `getOrganizations` function:

* `getDocs()`: fetches all of the documents in the collection.
* Once having the documents in an array, I get the data using the `map` method. But I realized that the organization data didn't have the number of users. So, I used the function `getCountFromServer()` inside the `map` to get the correct number of users.
* Another thing I realized was that the `lastActive` property was not a standard timestamp; it was a Firestore timestamp. To get the correct format, I created the function `firestoreTimestampADate()` that converts the Firestore timestamp to a string with the format `YYYY/MM/DD`.

**2 - Individual organization page**

For the second part of the exercise, I used a similar function as `getOrganizations()` to get each user's data in the organization, but passing the `organizationId` as a parameter. In this part, I tried to use the organization ID from the `params`, but I had trouble using the `params`, so I decided to use `useParams` to get the parameters directly from the URL.