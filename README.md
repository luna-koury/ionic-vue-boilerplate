# Ionic Vue Boilerplate

### Usos

- Vue **3** -> vue@next
- Vuex **4** -> vuex@next
- Vue Router **4** -> vue-router@next
- Pug -> pug-plain-loader
- Sass -> sass-loader
- Axios

## INSTALAÇÃO

1. `npm uninstall -g ionic`
2. `npm install -g @ionic/cli`
3. `npm install`

## RODANDO

- `ionic serve`
- `vue-cli-service serve`
- `npm run serve`

## DEPLOY ANDROID

> para ios em um mac com xcode substituir `android` por `ios`

- `ionic build`
- `ionic cap add android`
- `ionic cap copy`
- `ionic cap sync`
- `ionic cap open android`

### Live Reload

`ionic cap run android -l --external`

### Outros

- Rodar `ionic cap sync` toda vez que instalar um plugin do capacitor
