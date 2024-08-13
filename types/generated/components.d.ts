import type { Schema, Attribute } from '@strapi/strapi';

export interface AssetComponentsImage extends Schema.Component {
  collectionName: 'components_asset_components_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    File: Attribute.Media<'images'> & Attribute.Required;
    Width: Attribute.Integer & Attribute.DefaultTo<80>;
    Style: Attribute.Enumeration<['Regular', 'Parallax']> &
      Attribute.DefaultTo<'Regular'>;
    Height: Attribute.Integer;
  };
}

export interface AssetComponentsPdf extends Schema.Component {
  collectionName: 'components_asset_components_pdfs';
  info: {
    displayName: 'PDF';
    icon: 'filePdf';
    description: '';
  };
  attributes: {
    File: Attribute.Media<'files'> & Attribute.Required;
  };
}

export interface AssetComponentsVideo extends Schema.Component {
  collectionName: 'components_asset_components_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
    description: '';
  };
  attributes: {
    File: Attribute.Media<'videos'> & Attribute.Required;
    Autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    Loop: Attribute.Boolean & Attribute.DefaultTo<false>;
    Width: Attribute.Integer & Attribute.DefaultTo<80>;
    Muted: Attribute.Boolean & Attribute.DefaultTo<false>;
    Controls: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ButtonComponentsButtonEntry extends Schema.Component {
  collectionName: 'components_button_components_button_entries';
  info: {
    displayName: 'Button Entry';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String;
    ButtonColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface CardGroupComponentsCards extends Schema.Component {
  collectionName: 'components_home_page_components_cards';
  info: {
    displayName: 'Cards';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Text: Attribute.Blocks;
    CardStyle: Attribute.Enumeration<['standard', 'overlay']> &
      Attribute.DefaultTo<'standard'>;
    ButtonText: Attribute.String;
    ButtonColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    CardColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Link: Attribute.String;
  };
}

export interface ContentPageComponentsButtons extends Schema.Component {
  collectionName: 'components_content_page_components_buttons';
  info: {
    displayName: 'Buttons';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Entry: Attribute.Component<'button-components.button-entry', true>;
    Style: Attribute.Component<'content-page-components.style'>;
    ButtonStyle: Attribute.Enumeration<['contained', 'outlined', 'text']> &
      Attribute.DefaultTo<'outlined'>;
    ButtonArrangement: Attribute.Enumeration<
      ['together', 'space between', 'spaced evenly']
    > &
      Attribute.DefaultTo<'together'>;
  };
}

export interface ContentPageComponentsCardGroup extends Schema.Component {
  collectionName: 'components_content_page_components_card_groups';
  info: {
    displayName: 'CardGroup';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Style: Attribute.Component<'content-page-components.style'>;
    Cards: Attribute.Component<'card-group-components.cards', true>;
  };
}

export interface ContentPageComponentsFaq extends Schema.Component {
  collectionName: 'components_content_page_components_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Entry: Attribute.Component<'faq-components.faq-entry', true>;
    Style: Attribute.Component<'content-page-components.style'>;
  };
}

export interface ContentPageComponentsForm extends Schema.Component {
  collectionName: 'components_content_page_components_forms';
  info: {
    displayName: 'Form';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    bodyTitle: Attribute.String;
    sendTo: Attribute.Email & Attribute.Required;
    Style: Attribute.Component<'content-page-components.style'>;
    sendFrom: Attribute.Email &
      Attribute.DefaultTo<'notifications@villawebsolutions.com'>;
    fields: Attribute.Component<'form-components.form-fields', true> &
      Attribute.Required;
  };
}

export interface ContentPageComponentsGrid extends Schema.Component {
  collectionName: 'components_content_page_components_grids';
  info: {
    displayName: 'Grid';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Entry: Attribute.Component<'grid-components.grid-entry', true>;
    Style: Attribute.Component<'content-page-components.style'>;
  };
}

export interface ContentPageComponentsImage extends Schema.Component {
  collectionName: 'components_content_page_components_images';
  info: {
    displayName: 'Image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    asset: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    width: Attribute.Integer & Attribute.DefaultTo<80>;
    height: Attribute.Integer;
    imageStyle: Attribute.Enumeration<['Regular', 'Parallax']>;
    caption: Attribute.RichText;
    Style: Attribute.Component<'content-page-components.style'>;
    captionLocation: Attribute.Enumeration<['top', 'left', 'bottom', 'right']> &
      Attribute.DefaultTo<'bottom'>;
  };
}

export interface ContentPageComponentsInstantQuote extends Schema.Component {
  collectionName: 'components_content_page_components_instant_quotes';
  info: {
    displayName: 'InstantQuote';
    icon: 'information';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Style: Attribute.Component<'content-page-components.style'>;
    ButtonStyle: Attribute.Enumeration<['contained', 'outlined', 'text']> &
      Attribute.DefaultTo<'outlined'>;
    ButtonColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Entry: Attribute.Component<'instant-quote-components.job-types', true>;
    SendTo: Attribute.Email;
    SendFrom: Attribute.Email;
    ButtonText: Attribute.String;
  };
}

export interface ContentPageComponentsParagraph extends Schema.Component {
  collectionName: 'components_content_page_components_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.RichText;
    Style: Attribute.Component<'content-page-components.style'>;
  };
}

export interface ContentPageComponentsStyle extends Schema.Component {
  collectionName: 'components_content_page_components_styles';
  info: {
    displayName: 'Style';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Animation: Attribute.Enumeration<['None', 'Fade', 'Slide']> &
      Attribute.DefaultTo<'None'>;
    BackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    TextColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    textAlign: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'center'>;
  };
}

export interface ContentPageComponentsVideo extends Schema.Component {
  collectionName: 'components_content_page_components_videos';
  info: {
    displayName: 'Video';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    asset: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    width: Attribute.Integer & Attribute.DefaultTo<80>;
    caption: Attribute.RichText;
    Style: Attribute.Component<'content-page-components.style'>;
    autoplay: Attribute.Boolean;
    loop: Attribute.Boolean;
    muted: Attribute.Boolean;
    controls: Attribute.Boolean;
  };
}

export interface FaqComponentsFaqEntry extends Schema.Component {
  collectionName: 'components_faq_components_faq_entries';
  info: {
    displayName: 'FAQ Entry';
    icon: 'feather';
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.RichText;
  };
}

export interface FooterComponentsIcons extends Schema.Component {
  collectionName: 'components_footer_components_icons';
  info: {
    displayName: 'Icons';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Entry: Attribute.Component<'footer-icons-components.entry', true>;
    Space: Attribute.Integer;
  };
}

export interface FooterComponentsImage extends Schema.Component {
  collectionName: 'components_footer_components_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media<'images'>;
    Space: Attribute.Integer;
  };
}

export interface FooterComponentsText extends Schema.Component {
  collectionName: 'components_footer_components_texts';
  info: {
    displayName: 'Text';
    icon: 'layer';
  };
  attributes: {
    Text: Attribute.RichText;
    Space: Attribute.Integer;
  };
}

export interface FooterIconsComponentsEntry extends Schema.Component {
  collectionName: 'components_footer_icons_components_entries';
  info: {
    displayName: 'Entry';
    icon: 'layer';
    description: '';
  };
  attributes: {
    Link: Attribute.String;
    Icon: Attribute.Enumeration<
      ['Facebook', 'Instagram', 'X', 'Youtube', 'TikTok']
    >;
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface FormComponentsFormData extends Schema.Component {
  collectionName: 'components_form_components_form_data';
  info: {
    displayName: 'FormData';
    icon: 'archive';
  };
  attributes: {
    SendFrom: Attribute.String &
      Attribute.DefaultTo<'notifications@villawebsolutions.com'>;
    SendTo: Attribute.String;
    BodyTitle: Attribute.String;
  };
}

export interface FormComponentsFormFields extends Schema.Component {
  collectionName: 'components_form_components_form_fields';
  info: {
    displayName: 'Form Fields';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    validation: Attribute.String;
    label: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['any', 'phone']> & Attribute.DefaultTo<'any'>;
    includeInSubjectLine: Attribute.Boolean;
    fullWidth: Attribute.Boolean;
  };
}

export interface GridComponentsGridEntry extends Schema.Component {
  collectionName: 'components_grid_components_grid_entries';
  info: {
    displayName: 'Grid Entry';
    icon: 'apps';
  };
  attributes: {
    Picture: Attribute.Media<'images'>;
    Caption: Attribute.RichText;
  };
}

export interface HomePageComponentsGallery extends Schema.Component {
  collectionName: 'components_home_page_components_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Pictures: Attribute.Media<'images', true>;
    Title: Attribute.String;
    Style: Attribute.Component<'content-page-components.style'>;
  };
}

export interface HomePageComponentsIntro extends Schema.Component {
  collectionName: 'components_home_page_components_intros';
  info: {
    displayName: 'Intro';
    icon: 'picture';
    description: '';
  };
  attributes: {
    File: Attribute.Media<'videos' | 'images', true> & Attribute.Required;
    IntroText: Attribute.RichText;
    TextPosition: Attribute.Enumeration<
      ['Bottom Left', 'Bottom Right', 'Centered']
    > &
      Attribute.DefaultTo<'Bottom Left'>;
    Style: Attribute.Component<'content-page-components.style'>;
    MobileFile: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Buttons: Attribute.Component<'button-components.button-entry', true>;
    FormFields: Attribute.Component<'form-components.form-fields', true>;
    FormData: Attribute.Component<'form-components.form-data'>;
  };
}

export interface HomePageComponentsMedia extends Schema.Component {
  collectionName: 'components_home_page_components_media';
  info: {
    displayName: 'Media';
    icon: 'archive';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    asset: Attribute.Relation<
      'home-page-components.media',
      'oneToOne',
      'api::asset.asset'
    >;
    Style: Attribute.Component<'content-page-components.style'>;
  };
}

export interface InstantQuoteComponentsJobTypes extends Schema.Component {
  collectionName: 'components_instant_quote_components_job_types';
  info: {
    displayName: 'Job Types';
    icon: 'plus';
    description: '';
  };
  attributes: {
    JobType: Attribute.String & Attribute.Required;
    PricePer: Attribute.Decimal & Attribute.Required;
    PriceMinimum: Attribute.Decimal & Attribute.Required;
  };
}

export interface NavbarComponentsImageLink extends Schema.Component {
  collectionName: 'components_navbar_components_image_links';
  info: {
    displayName: 'Image Link';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    Width: Attribute.Decimal;
  };
}

export interface NavbarComponentsMobileConfig extends Schema.Component {
  collectionName: 'components_navbar_components_mobile_configs';
  info: {
    displayName: 'Mobile Config';
    icon: 'connector';
  };
  attributes: {
    DrawerLink: Attribute.String;
    DrawerText: Attribute.String;
    MobileIcon: Attribute.Media<'images'>;
    IconLink: Attribute.String;
  };
}

export interface NavbarComponentsNavButton extends Schema.Component {
  collectionName: 'components_navbar_components_nav_buttons';
  info: {
    displayName: 'Nav Button';
    icon: 'cast';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String & Attribute.Required;
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface NavbarComponentsTextLink extends Schema.Component {
  collectionName: 'components_navbar_components_text_links';
  info: {
    displayName: 'Text Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface SiteSettingsComponentsColorPalette extends Schema.Component {
  collectionName: 'components_site_settings_components_color_palettes';
  info: {
    displayName: 'Color Palette';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    primary: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    secondary: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    info: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    success: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    warning: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'asset-components.image': AssetComponentsImage;
      'asset-components.pdf': AssetComponentsPdf;
      'asset-components.video': AssetComponentsVideo;
      'button-components.button-entry': ButtonComponentsButtonEntry;
      'card-group-components.cards': CardGroupComponentsCards;
      'content-page-components.buttons': ContentPageComponentsButtons;
      'content-page-components.card-group': ContentPageComponentsCardGroup;
      'content-page-components.faq': ContentPageComponentsFaq;
      'content-page-components.form': ContentPageComponentsForm;
      'content-page-components.grid': ContentPageComponentsGrid;
      'content-page-components.image': ContentPageComponentsImage;
      'content-page-components.instant-quote': ContentPageComponentsInstantQuote;
      'content-page-components.paragraph': ContentPageComponentsParagraph;
      'content-page-components.style': ContentPageComponentsStyle;
      'content-page-components.video': ContentPageComponentsVideo;
      'faq-components.faq-entry': FaqComponentsFaqEntry;
      'footer-components.icons': FooterComponentsIcons;
      'footer-components.image': FooterComponentsImage;
      'footer-components.text': FooterComponentsText;
      'footer-icons-components.entry': FooterIconsComponentsEntry;
      'form-components.form-data': FormComponentsFormData;
      'form-components.form-fields': FormComponentsFormFields;
      'grid-components.grid-entry': GridComponentsGridEntry;
      'home-page-components.gallery': HomePageComponentsGallery;
      'home-page-components.intro': HomePageComponentsIntro;
      'home-page-components.media': HomePageComponentsMedia;
      'instant-quote-components.job-types': InstantQuoteComponentsJobTypes;
      'navbar-components.image-link': NavbarComponentsImageLink;
      'navbar-components.mobile-config': NavbarComponentsMobileConfig;
      'navbar-components.nav-button': NavbarComponentsNavButton;
      'navbar-components.text-link': NavbarComponentsTextLink;
      'site-settings-components.color-palette': SiteSettingsComponentsColorPalette;
    }
  }
}
