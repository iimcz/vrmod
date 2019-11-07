# vrmod

This file contains documentation for installation and testing of VRMOD.
For usage instructions, please refer to [user documentation](/USERDOC.md)

## Instalation
### Requirements
- nodejs, version 10 or higher.
- working installation of [EMOD](https://github.com/iimcz/emod)

### Configuration
Edit file *vrmod/src/app/app.site-config.ts* and set:
- **baseUrl** - url of **EMOD** backend server
- **emodUrl** - url of **EMOD** installation

E.g.:
```typescript
export const baseUrl = 'http://1.2.3.4:9988/api/v1/';
export const emodUrl = 'http://1.2.3.4:5200';
```

Prepare environment:
```bash
$ cd vrmod
$ npm install
```

And start development server:

```bash
$ npm run start
```
Now the site should be available at `http://localhost:4200`.

For production code, use:
```bash
$ cd vrmod
$ npm run build
```

The built version will be stored in *vrmod/dist/vrmod*.

