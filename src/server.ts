import { AddressInfo } from 'node:net';
import app from './app';

const PORT = process.env.PORT || 3003;

const server = app.listen(PORT, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.info(`Server is running on port: ${address.port}`);
  } else {
    console.error('Failed running the server.');
  }
});
