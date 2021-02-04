# shopify-themekit
Thème basic fournit par themekit.

[https://sebousan-test.myshopify.com](https://sebousan-test.myshopify.com) / duremu

## Modifications
Attention chaque personnalisation de thème génère une modification du fichier config/settings_data.json

### Templates

***index.liquid***
ajout de ```{{ content_for_index }}```, il va chercher les sections contenant des schemas avec settings

***page.liquid***
ajout de ```{% section 'components' %}```, il va chercher le fichier sections/components.liquid

### Sections

fichiers comprenant un schema pour la config de composants dynamique en home page :
* ***section-external-video.liquid***
* ***section-image.liquid***
* ***section-featured-product.liquid***

ajout du fichier comprenant un schema pour la config de composants dynamique en dehors de la home page :
* ***components.liquid***

### Snippets

#### Components
***component-external-video.liquid***
ajout du fichier rendu du composant external-video permettant l’affichage d’un embed, il est appelé par components.liquid et section-external-video.liquid

***component-image.liquid***
ajout du fichier rendu du composant image permettant l’affichage d’une image, il est appelé par components.liquid et section-image.liquid

***component-featured-product.liquid***
ajout du fichier rendu du composant featured-product permettant l’affichage d’un produit star, il est appelé par components.liquid et section-featured-product.liquid

#### Commons
* ***cover.liquid***
* ***external-video.liquid***
* ***image.liquid***
* ***product.liquid***
* ***video.liquid***
