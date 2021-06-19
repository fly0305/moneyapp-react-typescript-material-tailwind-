import { AuthOptions } from '@aws-amplify/auth/lib-esm/types';

const authConfig: AuthOptions = {
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_WEB_CLIENT_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    identityPoolRegion: process.env.REACT_APP_REGION,
    region: process.env.REACT_APP_REGION,
    oauth: {
        redirectSignIn: `${process.env.REACT_APP_DOMAIN}`,
        redirectSignOut: `${process.env.REACT_APP_DOMAIN}`,
        responseType: 'code',
        domain: `${process.env.REACT_APP_COGNITO_DOMAIN}`,
        scope: ['phone', 'email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
    },
};

export default authConfig;