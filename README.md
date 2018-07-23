# xXx\_\_\_dead\_\_\_xXx

![wot](./yea.jpg)

_Wot?_

### Development

1.  Clone the repo.
2.  Install dependencies

```bash
yarn install
```

3.  Start the development server

```bash
yarn start
```

Okay, it's going to get a little weird here.

4.  Create a new Dat site in your Beaker Browser library.
5.  Add your Dat url to config.js
6.  Replace the contents of `dat.json` with your new `dat.json`
7.  Run a build in a separate window

```bash
yarn run build
```

8.  Add the _contents_ from your `/build` folder to your new site's library. The output should look something like this:

![example](./example.png)

9.  You should be able to navigate to your localhost address now, and still pull posts/data from your dat site.
