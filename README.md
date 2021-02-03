# shopify-themekit
Thème basic fournit par themekit.

## Modifications

### Templates

#### index.liquid
ajout de {{ content_for_index }}, il utilise le schema du fichier config/settings_data.json

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
