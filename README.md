# random-takagi-blog

redirect to random articles in takagi.blog

## Develop

```bash
$ yarn start
```

```bash
$ wrangler d1 create random-blog-db
$ wrangler d1 execute random-blog-db --file schema.sql
$ wrangler d1 execute random-blog-db --file data.sql
```

## Deploy

```bash
$ yarn deploy
```

## License

MIT
