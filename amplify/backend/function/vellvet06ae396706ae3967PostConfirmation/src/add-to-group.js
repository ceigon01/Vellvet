const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient();

/*
const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});
*/

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    /*
    const groupParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
    };
    const addUserParams = {
      GroupName: process.env.GROUP,
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    // Check if the group exists; if it doesn't, create it.
    try {
      await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    }
    // Then, add the user to the group.
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    */
    const existingUser = await ddb
      .get({
        TableName: process.env.API_VELLVET_USERTABLE_NAME,
        Key: { id: event.request.userAttributes.sub },
      })
      .promise();
    if (!existingUser?.Item) {
      console.log('Seeding new user')
      const now = new Date();
      await ddb
        .put({
          TableName: process.env.API_VELLVET_USERTABLE_NAME,
          Item: {
            id: event.request.userAttributes.sub,
            email: event.request.userAttributes.email,
            createdAt: now.toISOString(),
            updatedAt: now.toISOString(),
            __typename: 'User',
            _lastChangedAt: now.getTime(),
            _version: 1
          },
        })
        .promise();
      console.log("Created a new User Record");
    } else {
      console.log('User already exists');
    }
  } catch (err) {
    console.log("Error seeding user", err);
  }
  return event;
};
