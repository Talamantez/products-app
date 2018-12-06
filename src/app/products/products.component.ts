import {
  Component,
  OnInit,
 } from '@angular/core';
 import {
   AccessibilityConfig,
   Action,
   AdvancedLayout,
   ButtonEvent,
   ButtonsConfig,
   ButtonsStrategy,
   ButtonType,
   Description,
   DescriptionStrategy,
   DotsConfig,
   GalleryService,
   GridLayout,
   Image,
   ImageModalEvent,
   LineLayout,
   PlainGalleryConfig,
   PlainGalleryStrategy,
   PreviewConfig
 } from '@ks89/angular-modal-gallery';
 import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Product } from '../Product';
import * as data from './data.json';

const groups = data["groups"];

console.dir(groups[0].images)

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  imageIndex = 1;
  galleryId = 1;

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
  };
  plainGalleryRowSpaceAround: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
  };
  plainGalleryRowATags: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
    // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
    // I added this here, to be more explicit.
    advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
  };

  plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
  };

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
  };
  products: Product[] = [
      {
        id:     groups[0].id,
        name:   groups[0].name,
        price:  groups[0].priceRange.selling.high,
        hero:   groups[0].hero.href,
        images: [
            new Image(0, {
              img: groups[0].hero.href,
            }),
            new Image(1, {
              img: groups[0].images[0].href,
            }),
            new Image(2, {
              img: groups[0].images[1].href,
            })
        ]
      },
      {
        id:     groups[1].id,
        name:   groups[1].name,
        price:  groups[1].priceRange.selling.high,
        hero:   groups[1].hero.href,
        images: [
            new Image(0, {
              img: groups[1].hero.href,
            }),
            new Image(1, {
              img: groups[1].images[0].href,
            }),
            new Image(2, {
              img: groups[1].images[1].href,
            })
        ]
      },
      {
        id:     groups[2].id,
        name:   groups[2].name,
        price:  groups[2].priceRange.selling.high,
        hero:   groups[2].hero.href,
        images: [
            new Image(0, {
              img: groups[2].hero.href,
            }),
            new Image(1, {
              img: groups[2].images[0].href,
            }),
            new Image(2, {
              img: groups[2].images[1].href,
            })
        ]
      },
      {
        id:     groups[3].id,
        name:   groups[3].name,
        price:  groups[3].priceRange.selling.high,
        hero:   groups[3].hero.href,
        images: [
            new Image(0, {
              img: groups[3].hero.href,
            }),
            new Image(1, {
              img: groups[3].images[0].href,
            }),
            new Image(2, {
              img: groups[3].images[1].href,
            })
        ]
      },
      {
        id:     groups[4].id,
        name:   groups[4].name,
        price:  groups[4].priceRange.selling.high,
        hero:   groups[4].hero.href,
        images: [
            new Image(0, {
              img: groups[4].hero.href,
            }),
            new Image(1, {
              img: groups[4].images[0].href,
            }),
            new Image(2, {
              img: groups[4].images[1].href,
            })
        ]
      },
      {
        id:     groups[5].id,
        name:   groups[5].name,
        price:  groups[5].priceRange.selling.high,
        hero:   groups[5].hero.href,
        images: [
            new Image(0, {
              img: groups[5].hero.href,
            }),
            new Image(1, {
              img: groups[5].images[0].href,
            }),
            new Image(2, {
              img: groups[5].images[1].href,
            })
        ]
      },
      {
        id:     groups[6].id,
        name:   groups[6].name,
        price:  groups[6].priceRange.selling.high,
        hero:   groups[6].hero.href,
        images: [
            new Image(0, {
              img: groups[6].hero.href,
            }),
            new Image(1, {
              img: groups[6].images[0].href,
            }),
            new Image(2, {
              img: groups[6].images[1].href,
            })
        ]
      },
      {
        id:     groups[7].id,
        name:   groups[7].name,
        price:  groups[7].priceRange.selling.high,
        hero:   groups[7].hero.href,
        images: [
            new Image(0, {
              img: groups[7].hero.href,
            }),
            new Image(1, {
              img: groups[7].images[0].href,
            }),
            new Image(2, {
              img: groups[7].images[1].href,
            })
        ]
      },
      {
        id:     groups[8].id,
        name:   groups[8].name,
        price:  groups[8].priceRange.selling.high,
        hero:   groups[8].hero.href,
        images: [
            new Image(0, {
              img: groups[8].hero.href,
            }),
            new Image(1, {
              img: groups[8].images[0].href,
            }),
            new Image(2, {
              img: groups[8].images[1].href,
            })
        ]
      },
      ,
      {
        id:     groups[9].id,
        name:   groups[9].name,
        price:  groups[9].priceRange.selling.high,
        hero:   groups[9].hero.href,
        images: [
            new Image(0, {
              img: groups[9].hero.href,
            }),
            new Image(1, {
              img: groups[9].images[0].href,
            }),
            new Image(2, {
              img: groups[9].images[1].href,
            })
        ]
      }
  ];

  dotsConfig: DotsConfig = {
    visible: false
  };

  customDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customDescriptionStyle: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => ',
    style: {
      bgColor: 'rgba(255,0,0,.5)',
      textColor: 'blue',
      marginTop: '3px',
      marginBottom: '0px',
      marginLeft: '5px',
      marginRight: '5px',
      position: 'absolute',
      top: '0px',
      height: '25px'
      // be careful to use width, in particular with % values
    }
  };

  customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image'
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  customFullDescriptionHidden: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image'
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  // customButtonsSize: ButtonSize = {
  //   width: 10,
  //   height: 10,
  //   unit: 'px'
  // };

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  // default buttons but extUrl will open the link in a new tab instead of the current one
  // this requires to specify all buttons manually (also if they are not really custom)
  customButtonsConfigExtUrlNewTab: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'ext-url-image',
        type: ButtonType.EXTURL,
        extUrlInNewTab: true // <--- this is the important thing to understand this example
      },
      {
        className: 'download-image',
        type: ButtonType.DOWNLOAD
      },
      {
        className: 'close-image',
        type: ButtonType.CLOSE
      }
    ]
  };

  customButtonsFontAwesomeConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fas fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-times white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-external-link-alt white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  previewConfigOneImage: PreviewConfig = {
    visible: true,
    number: 1
  };

  previewConfigNoArrows: PreviewConfig = {
    visible: true,
    arrows: false
  };

  previewConfigNoClickable: PreviewConfig = {
    visible: true,
    clickable: false
  };

  // TODO still not implemented
  previewConfigAlwaysCenter: PreviewConfig = {
    visible: true
  };

  previewConfigCustomSize: PreviewConfig = {
    visible: true,
    size: { width: '30px', height: '30px' }
  };

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews'
  };
  constructor(private galleryService: GalleryService, private sanitizer: DomSanitizer) {}

  // openImageModalRow(image: Image) {
  //   console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
  //   const index: number = this.getCurrentIndexCustomLayout(image, this.images);
  //   this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  // }
  //
  // openImageModalColumn(image: Image) {
  //   console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
  //   const index: number = this.getCurrentIndexCustomLayout(image, this.images);
  //   this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(index, true) });
  // }

  // onButtonBeforeHook(event: ButtonEvent) {
  //   console.log('onButtonBeforeHook ', event);
  //
  //   if (!event || !event.button) {
  //     return;
  //   }
  //
  //   // Invoked after a click on a button, but before that the related
  //   // action is applied.
  //   // For instance: this method will be invoked after a click
  //   // of 'close' button, but before that the modal gallery
  //   // will be really closed.
  //
  //   if (event.button.type === ButtonType.DELETE) {
  //     // remove the current image and reassign all other to the array of images
  //
  //     console.log('delete in app with images count ' + this.images.length);
  //
  //     this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
  //   }
  // }

  onButtonAfterHook(event: ButtonEvent) {
    console.log('onButtonAfterHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after both a click on a button and its related action.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.
  }

  // onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
  //   console.log('onCustomButtonBeforeHook with galleryId=' + galleryId + ' and event: ', event);
  //   if (!event || !event.button) {
  //     return;
  //   }
  //   // Invoked after a click on a button, but before that the related
  //   // action is applied.
  //
  //   if (event.button.type === ButtonType.CUSTOM) {
  //     console.log('adding a new random image at the end');
  //     this.addRandomImage();
  //
  //     setTimeout(() => {
  //       this.galleryService.openGallery(galleryId, this.images.length - 1);
  //     }, 0);
  //   }
  // }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    console.log('onCustomButtonAfterHook with galleryId=' + galleryId + ' and event: ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after both a click on a button and its related action.
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('onVisibleIndex action: ' + Action[event.action]);
    console.log('onVisibleIndex result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onIsFirstImage onfirst action: ' + Action[event.action]);
    console.log('onIsFirstImage onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onIsLastImage onlast action: ' + Action[event.action]);
    console.log('onIsLastImage onlast result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    // reset custom plain gallery config
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(-1, true) });
  }

  onShowAutoCloseExample(event: ImageModalEvent, galleryId: number) {
    console.log(`onShowAutoCloseExample with id=${galleryId} action: ` + Action[event.action]);
    console.log('onShowAutoCloseExample result:' + event.result);
    console.log('Starting timeout of 3 second to close modal gallery automatically');
    setTimeout(() => {
      console.log('setTimeout end - closing gallery with id=' + galleryId);
      this.galleryService.closeGallery(galleryId);
    }, 3000);
  }

  // addRandomImage() {
  //   const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
  //   const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
  //   this.images = [...this.images, newImage];
  // }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }

  trackById(index: number, item: Image) {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}

// products: Product[] = [
//     {
//       id:     data.groups[0].id,
//       id:     data.groups[0].id,
//       name:   data.groups[0].name,
//       price:  data.groups[0].priceRange.selling.high,
//       hero:   data.groups[0].hero.href,
//       image1: data.groups[0].hero.href,
//       image2: data.groups[0].images[0] ? data.groups[0].images[0].href :null,
//       image3: data.groups[0].images[1] ? data.groups[0].images[1].href :null,
//       image4: data.groups[0].images[2] ? data.groups[0].images[2].href :null,
//     },
//     {
//       id:     data.groups[1].id,
//       name:   data.groups[1].name,
//       price:  data.groups[1].priceRange.selling.high,
//       hero:   data.groups[1].hero.href,
//       image1: data.groups[1].hero.href,
//       image2: data.groups[1].images[0] ? data.groups[1].images[0].href :null,
//       image3: data.groups[1].images[1] ? data.groups[1].images[1].href :null,
//       image4: data.groups[1].images[2] ? data.groups[1].images[2].href :null
//     },
//     {
//       id:     data.groups[2].id,
//       name:   data.groups[2].name,
//       price:  data.groups[2].priceRange.selling.high,
//       hero:   data.groups[2].hero.href,
//       image1: data.groups[2].hero.href,
//       image2: data.groups[2].images[0] ? data.groups[2].images[0].href :null,
//       image3: data.groups[2].images[1] ? data.groups[2].images[1].href :null,
//       image4: data.groups[2].images[2] ? data.groups[2].images[2].href : null
//     },
//     {
//       id:     data.groups[3].id,
//       name:   data.groups[3].name,
//       price:  data.groups[3].priceRange.selling.high,
//       hero:   data.groups[3].hero.href,
//       image1: data.groups[3].hero.href,
//       image2: data.groups[3].images[0] ? data.groups[3].images[0].href :null,
//       image3: data.groups[3].images[1] ? data.groups[3].images[1].href :null,
//       image4: data.groups[3].images[2] ? data.groups[3].images[2].href : null
//     },
//     {
//       id:     data.groups[4].id,
//       name:   data.groups[4].name,
//       price:  data.groups[4].priceRange.selling.high,
//       hero:   data.groups[4].hero.href,
//       image1: data.groups[4].hero.href,
//       image2: data.groups[4].images[0] ? data.groups[4].images[0].href :null,
//       image3: data.groups[4].images[1] ? data.groups[4].images[1].href :null,
//       image4: data.groups[4].images[2] ? data.groups[4].images[2].href :null
//     },
//     {
//       id:     data.groups[5].id,
//       name:   data.groups[5].name,
//       price:  data.groups[5].priceRange.selling.high,
//       hero:   data.groups[5].hero.href,
//       image1: data.groups[5].hero.href,
//       image2: data.groups[5].images[0] ? data.groups[5].images[0].href :null,
//       image3: data.groups[5].images[1] ? data.groups[5].images[1].href :null,
//       image4: data.groups[5].images[2] ? data.groups[5].images[2].href :null
//     },
//     {
//       id:     data.groups[6].id,
//       name:   data.groups[6].name,
//       price:  data.groups[6].priceRange.selling.high,
//       hero:   data.groups[6].hero.href,
//       image1: data.groups[6].hero.href,
//       image2: data.groups[6].images[0] ? data.groups[6].images[0].href :null,
//       image3: data.groups[6].images[1] ? data.groups[6].images[1].href :null,
//       image4: data.groups[6].images[2] ? data.groups[6].images[2].href :null
//     },
//     {
//       id:     data.groups[7].id,
//       name:   data.groups[7].name,
//       price:  data.groups[7].priceRange.selling.high,
//       hero:   data.groups[7].hero.href,
//       image1: data.groups[7].hero.href,
//       image2: data.groups[7].images[0] ? data.groups[7].images[0].href :null,
//       image3: data.groups[7].images[1] ? data.groups[7].images[1].href :null,
//       image4: data.groups[7].images[2] ? data.groups[7].images[2].href :null
//     },
//     {
//       id:     data.groups[8].id,
//       name:   data.groups[8].name,
//       price:  data.groups[8].priceRange.selling.high,
//       hero:   data.groups[8].hero.href,
//       image1: data.groups[8].hero.href,
//       image2: data.groups[8].images[0] ? data.groups[8].images[0].href :null,
//       image3: data.groups[8].images[1] ? data.groups[8].images[1].href :null,
//       image4: data.groups[8].images[2] ? data.groups[8].images[2].href :null
//     },
//     {
//       id:     data.groups[9].id,
//       name:   data.groups[9].name,
//       price:  data.groups[9].priceRange.selling.high,
//       hero:   data.groups[9].hero.href,
//       image1: data.groups[9].hero.href,
//       image2: data.groups[9].images[0] ? data.groups[9].images[0].href :null,
//       image3: data.groups[9].images[1] ? data.groups[9].images[1].href :null,
//       image4: data.groups[9].images[2] ? data.groups[9].images[2].href :null
//     }
// ];
