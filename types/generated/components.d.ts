import type { Schema, Struct } from '@strapi/strapi';

export interface AdminRoleMappings extends Struct.ComponentSchema {
  collectionName: 'components_admin_role_mappings';
  info: {
    description: '';
    displayName: 'Role Mappings';
    icon: 'puzzle';
  };
  attributes: {
    role: Schema.Attribute.Relation<'oneToOne', 'admin::role'>;
    website: Schema.Attribute.Relation<'oneToOne', 'api::website.website'>;
  };
}

export interface AssetComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_asset_components_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    File: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Height: Schema.Attribute.Integer;
    Style: Schema.Attribute.Enumeration<['Regular', 'Parallax']> &
      Schema.Attribute.DefaultTo<'Regular'>;
    Width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<80>;
  };
}

export interface AssetComponentsPdf extends Struct.ComponentSchema {
  collectionName: 'components_asset_components_pdfs';
  info: {
    description: '';
    displayName: 'PDF';
    icon: 'filePdf';
  };
  attributes: {
    File: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
  };
}

export interface AssetComponentsVideo extends Struct.ComponentSchema {
  collectionName: 'components_asset_components_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    Autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Controls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    File: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    Loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Muted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<80>;
  };
}

export interface ButtonComponentsButtonEntry extends Struct.ComponentSchema {
  collectionName: 'components_button_components_button_entries';
  info: {
    description: '';
    displayName: 'Button Entry';
    icon: 'bold';
  };
  attributes: {
    ButtonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface CardGroupComponentsCards extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_cards';
  info: {
    description: '';
    displayName: 'Cards';
  };
  attributes: {
    ButtonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonText: Schema.Attribute.String;
    CardColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    CardStyle: Schema.Attribute.Enumeration<['standard', 'overlay']> &
      Schema.Attribute.DefaultTo<'standard'>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.Blocks;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsButtons extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_buttons';
  info: {
    description: '';
    displayName: 'Buttons';
    icon: 'chartBubble';
  };
  attributes: {
    ButtonArrangement: Schema.Attribute.Enumeration<
      ['together', 'space between', 'spaced evenly']
    > &
      Schema.Attribute.DefaultTo<'together'>;
    ButtonStyle: Schema.Attribute.Enumeration<
      ['contained', 'outlined', 'text']
    > &
      Schema.Attribute.DefaultTo<'outlined'>;
    Entry: Schema.Attribute.Component<'button-components.button-entry', true>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
  };
}

export interface ContentPageComponentsCardGroup extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_card_groups';
  info: {
    description: '';
    displayName: 'CardGroup';
    icon: 'collapse';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'card-group-components.cards', true>;
    fullWidth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    Entry: Schema.Attribute.Component<'faq-components.faq-entry', true>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsForm extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_forms';
  info: {
    description: '';
    displayName: 'Form';
    icon: 'envelop';
  };
  attributes: {
    bodyTitle: Schema.Attribute.String;
    formFields: Schema.Attribute.Component<
      'form-components.form-fields',
      true
    > &
      Schema.Attribute.Required;
    sendFrom: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'notifications@villawebsolutions.com'>;
    sendTo: Schema.Attribute.Email & Schema.Attribute.Required;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsGrid extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_grids';
  info: {
    description: '';
    displayName: 'Grid';
    icon: 'layout';
  };
  attributes: {
    Entry: Schema.Attribute.Component<'grid-components.grid-entry', true>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'landscape';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    caption: Schema.Attribute.RichText;
    captionLocation: Schema.Attribute.Enumeration<
      ['top', 'left', 'bottom', 'right']
    > &
      Schema.Attribute.DefaultTo<'bottom'>;
    height: Schema.Attribute.Integer;
    imageStyle: Schema.Attribute.Enumeration<['Regular', 'Parallax', 'Paper']>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<80>;
  };
}

export interface ContentPageComponentsInstantQuote
  extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_instant_quotes';
  info: {
    description: '';
    displayName: 'InstantQuote';
    icon: 'information';
  };
  attributes: {
    ButtonColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonStyle: Schema.Attribute.Enumeration<
      ['contained', 'outlined', 'text']
    > &
      Schema.Attribute.DefaultTo<'outlined'>;
    ButtonText: Schema.Attribute.String;
    Entry: Schema.Attribute.Component<
      'instant-quote-components.job-types',
      true
    >;
    SendFrom: Schema.Attribute.Email;
    SendTo: Schema.Attribute.Email;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsList extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_lists';
  info: {
    description: '';
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    Caption: Schema.Attribute.Blocks;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Items: Schema.Attribute.Component<'list-components.items', true>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'filter';
  };
  attributes: {
    Body: Schema.Attribute.RichText;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface ContentPageComponentsStyle extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_styles';
  info: {
    description: '';
    displayName: 'Style';
    icon: 'chartBubble';
  };
  attributes: {
    Animation: Schema.Attribute.Enumeration<['None', 'Fade', 'Slide']> &
      Schema.Attribute.DefaultTo<'None'>;
    BackgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    paddingBottom: Schema.Attribute.Integer;
    paddingTop: Schema.Attribute.Integer;
    size: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 3;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    textAlign: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    TextColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ContentPageComponentsVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_page_components_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'slideshow';
  };
  attributes: {
    asset: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    autoplay: Schema.Attribute.Boolean;
    caption: Schema.Attribute.RichText;
    controls: Schema.Attribute.Boolean;
    loop: Schema.Attribute.Boolean;
    muted: Schema.Attribute.Boolean;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    width: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<80>;
  };
}

export interface FaqComponentsFaqEntry extends Struct.ComponentSchema {
  collectionName: 'components_faq_components_faq_entries';
  info: {
    displayName: 'FAQ Entry';
    icon: 'feather';
  };
  attributes: {
    Body: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface FooterComponentsFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_components_footer_links';
  info: {
    displayName: 'Footer Links';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FooterComponentsIcons extends Struct.ComponentSchema {
  collectionName: 'components_footer_components_icons';
  info: {
    description: '';
    displayName: 'Icons';
    icon: 'grid';
  };
  attributes: {
    Entry: Schema.Attribute.Component<'footer-icons-components.entry', true>;
    Space: Schema.Attribute.Integer;
  };
}

export interface FooterComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_footer_components_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Space: Schema.Attribute.Integer;
  };
}

export interface FooterComponentsText extends Struct.ComponentSchema {
  collectionName: 'components_footer_components_texts';
  info: {
    displayName: 'Text';
    icon: 'layer';
  };
  attributes: {
    Space: Schema.Attribute.Integer;
    Text: Schema.Attribute.RichText;
  };
}

export interface FooterIconsComponentsEntry extends Struct.ComponentSchema {
  collectionName: 'components_footer_icons_components_entries';
  info: {
    description: '';
    displayName: 'Entry';
    icon: 'layer';
  };
  attributes: {
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Icon: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'X', 'Youtube', 'TikTok']
    >;
    Link: Schema.Attribute.String;
  };
}

export interface FormComponentsFormData extends Struct.ComponentSchema {
  collectionName: 'components_form_components_form_data';
  info: {
    displayName: 'FormData';
    icon: 'archive';
  };
  attributes: {
    BodyTitle: Schema.Attribute.String;
    SendFrom: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'notifications@villawebsolutions.com'>;
    SendTo: Schema.Attribute.String;
  };
}

export interface FormComponentsFormFields extends Struct.ComponentSchema {
  collectionName: 'components_form_components_form_fields';
  info: {
    description: '';
    displayName: 'Form Fields';
    icon: 'bulletList';
  };
  attributes: {
    fullWidth: Schema.Attribute.Boolean;
    includeInSubjectLine: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['any', 'phone']> &
      Schema.Attribute.DefaultTo<'any'>;
    validation: Schema.Attribute.String;
  };
}

export interface GridComponentsGridEntry extends Struct.ComponentSchema {
  collectionName: 'components_grid_components_grid_entries';
  info: {
    displayName: 'Grid Entry';
    icon: 'apps';
  };
  attributes: {
    Caption: Schema.Attribute.RichText;
    Picture: Schema.Attribute.Media<'images'>;
  };
}

export interface HomePageComponentsCta extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_ctas';
  info: {
    displayName: 'CTA';
    icon: 'exit';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'button-components.button-entry', true>;
    content: Schema.Attribute.Blocks;
    justify: Schema.Attribute.Enumeration<
      ['center', 'space-between', 'start']
    > &
      Schema.Attribute.DefaultTo<'space-between'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['standard', 'bordered', 'card', 'rounded']
    > &
      Schema.Attribute.DefaultTo<'standard'>;
  };
}

export interface HomePageComponentsGallery extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    Pictures: Schema.Attribute.Media<'images', true>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsIntro extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_intros';
  info: {
    description: '';
    displayName: 'Intro';
    icon: 'picture';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'button-components.button-entry', true>;
    File: Schema.Attribute.Media<'videos' | 'images', true> &
      Schema.Attribute.Required;
    FormData: Schema.Attribute.Component<'form-components.form-data', false>;
    FormFields: Schema.Attribute.Component<'form-components.form-fields', true>;
    IntroText: Schema.Attribute.RichText;
    MobileFile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    TextPosition: Schema.Attribute.Enumeration<
      ['Bottom Left', 'Bottom Right', 'Centered']
    > &
      Schema.Attribute.DefaultTo<'Bottom Left'>;
  };
}

export interface HomePageComponentsMedia extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'archive';
  };
  attributes: {
    asset: Schema.Attribute.Relation<'oneToOne', 'api::asset.asset'>;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsRichText extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_rich_texts';
  info: {
    description: '';
    displayName: 'Rich Text';
    icon: 'quote';
  };
  attributes: {
    RichText: Schema.Attribute.Blocks;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
  };
}

export interface HomePageComponentsSlideshow extends Struct.ComponentSchema {
  collectionName: 'components_home_page_components_slideshows';
  info: {
    description: '';
    displayName: 'slideshow';
    icon: 'landscape';
  };
  attributes: {
    slidesDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    slidesMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Style: Schema.Attribute.Component<'content-page-components.style', false>;
    Title: Schema.Attribute.String;
    uuid: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InstantQuoteComponentsJobTypes extends Struct.ComponentSchema {
  collectionName: 'components_instant_quote_components_job_types';
  info: {
    description: '';
    displayName: 'Job Types';
    icon: 'plus';
  };
  attributes: {
    JobType: Schema.Attribute.String & Schema.Attribute.Required;
    PriceMinimum: Schema.Attribute.Decimal & Schema.Attribute.Required;
    PricePer: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface ListComponentsItems extends Struct.ComponentSchema {
  collectionName: 'components_list_components_items';
  info: {
    displayName: 'Items';
    icon: 'star';
  };
  attributes: {
    Text: Schema.Attribute.Text;
  };
}

export interface NavbarComponentsImageLink extends Struct.ComponentSchema {
  collectionName: 'components_navbar_components_image_links';
  info: {
    description: '';
    displayName: 'Image Link';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    showInMobile: Schema.Attribute.Boolean;
    Width: Schema.Attribute.Decimal;
  };
}

export interface NavbarComponentsMobileConfig extends Struct.ComponentSchema {
  collectionName: 'components_navbar_components_mobile_configs';
  info: {
    displayName: 'Mobile Config';
    icon: 'connector';
  };
  attributes: {
    DrawerLink: Schema.Attribute.String;
    DrawerText: Schema.Attribute.String;
    IconLink: Schema.Attribute.String;
    MobileIcon: Schema.Attribute.Media<'images'>;
  };
}

export interface NavbarComponentsNavButton extends Struct.ComponentSchema {
  collectionName: 'components_navbar_components_nav_buttons';
  info: {
    description: '';
    displayName: 'Nav Button';
    icon: 'cast';
  };
  attributes: {
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    Text: Schema.Attribute.String;
  };
}

export interface NavbarComponentsNavMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_components_nav_menus';
  info: {
    description: '';
    displayName: 'Nav Menu';
    icon: 'bulletList';
  };
  attributes: {
    menuItem: Schema.Attribute.Component<
      'navbar-menu-components.menu-item',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarComponentsTextLink extends Struct.ComponentSchema {
  collectionName: 'components_navbar_components_text_links';
  info: {
    description: '';
    displayName: 'Text Link';
    icon: 'link';
  };
  attributes: {
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarMenuComponentsMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menu_components_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
    icon: 'plus';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SiteSettingsComponentsColorPalette
  extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_components_color_palettes';
  info: {
    description: '';
    displayName: 'Color Palette';
    icon: 'chartBubble';
  };
  attributes: {
    info: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    primary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    secondary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    success: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    warning: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'admin.role-mappings': AdminRoleMappings;
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
      'content-page-components.list': ContentPageComponentsList;
      'content-page-components.paragraph': ContentPageComponentsParagraph;
      'content-page-components.style': ContentPageComponentsStyle;
      'content-page-components.video': ContentPageComponentsVideo;
      'faq-components.faq-entry': FaqComponentsFaqEntry;
      'footer-components.footer-links': FooterComponentsFooterLinks;
      'footer-components.icons': FooterComponentsIcons;
      'footer-components.image': FooterComponentsImage;
      'footer-components.text': FooterComponentsText;
      'footer-icons-components.entry': FooterIconsComponentsEntry;
      'form-components.form-data': FormComponentsFormData;
      'form-components.form-fields': FormComponentsFormFields;
      'grid-components.grid-entry': GridComponentsGridEntry;
      'home-page-components.cta': HomePageComponentsCta;
      'home-page-components.gallery': HomePageComponentsGallery;
      'home-page-components.intro': HomePageComponentsIntro;
      'home-page-components.media': HomePageComponentsMedia;
      'home-page-components.rich-text': HomePageComponentsRichText;
      'home-page-components.slideshow': HomePageComponentsSlideshow;
      'instant-quote-components.job-types': InstantQuoteComponentsJobTypes;
      'list-components.items': ListComponentsItems;
      'navbar-components.image-link': NavbarComponentsImageLink;
      'navbar-components.mobile-config': NavbarComponentsMobileConfig;
      'navbar-components.nav-button': NavbarComponentsNavButton;
      'navbar-components.nav-menu': NavbarComponentsNavMenu;
      'navbar-components.text-link': NavbarComponentsTextLink;
      'navbar-menu-components.menu-item': NavbarMenuComponentsMenuItem;
      'site-settings-components.color-palette': SiteSettingsComponentsColorPalette;
    }
  }
}
