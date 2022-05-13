import appConfig from './config'

const { dbUser, dbPassword, dbName } = appConfig;

export const mongoURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.w0cfp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

