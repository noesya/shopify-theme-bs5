# shopify-themekit
Thème basic fournit par themekit.
[https://sebousan-test.myshopify.com](https://sebousan-test.myshopify.com) / duremu

## Modifications
Attention chaque personnalisation de thème génère une modification du nœud 'current' dans le fichier config/settings_data.json

### Templates

#### index.liquid
ajout de {{ content_for_index }}, il se base sur le presets 'content_for_index' du fichier config/settings_data.json

#### page.liquid
ajout de {% section 'components' %}, il va chercher le fichier sections/components.liquid

### Sections

#### section-video.liquid
ajout du fichier comprenant un schema pour la config de composants dynamique en home page

#### components.liquid
ajout du fichier comprenant un schema pour la config de composants dynamique en dehors de la home page

### Snippets

#### component-video.liquid
ajout du fichier rendu du composant vidéo permettant l’affichage d’un embed, il est appelé par components.liquid et section-video.liquid
