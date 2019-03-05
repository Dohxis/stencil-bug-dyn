Stencil cannot load components dynamically when (stencil) library is included into (stencil) app.

# Steps to reproduce

```sh
cd components
npm install
npm run build
npm link
cd ..
cd app
npm install
npm link components
npm start
```

Now open instector you will see my-component is hydrated but my-component-dyn is not.
