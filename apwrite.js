import { Client, Databases, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66fc572b002ca616f710'); // Your project ID

// Export the Appwrite client and the database instance
const databases = new Databases(client);
const databaseId = 'notesapp'; // Replace with your database ID
const collectionId = '66fc58c80029e4689047'; // Replace with your collection ID

export { databases, databaseId, collectionId, ID };
