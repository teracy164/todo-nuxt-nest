# TODO リストアプリ

# ローカル環境構築

```shell
npm run init:dev
# 先にDBコンテナを作成しておく
docker-compose --file=docker-compose.dev.yml up -d db
```

### ローカル環境起動

```shell
npm run dev
```

`localhost`にアクセス

# 本番環境構築

```shell
npm run init:prod
# 先にDBコンテナを作成しておく
docker-compose --file=docker-compose.prod.yml up -d db
```

### 本番環境起動

```shell
npm run build
npm run start
```

`localhost`にアクセス
