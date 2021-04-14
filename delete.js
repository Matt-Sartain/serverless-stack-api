import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            // Attributes of the item to be created
            userId: "123", // Author ID
            noteId: event.pathParameters.id, // The id of the note from the path
        },
    };

    await dynamoDb.delete(params);

    return { status: true };
});