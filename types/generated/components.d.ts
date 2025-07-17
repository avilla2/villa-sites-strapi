import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminRoleMappings extends Schema.Component {
  collectionName: 'components_admin_role_mappings';
  info: {
    description: '';
    displayName: 'Role Mappings';
    icon: 'puzzle';
  };
  attributes: {
    role: Attribute.Relation<'admin.role-mappings', 'oneToOne', 'admin::role'>;
    website: Attribute.Relation<
      'admin.role-mappings',
      'oneToOne',
      'api::website.website'
    >;
  };
}

export interface AssetComponentsImage extends Schema.Component {
  collectionName: 'components_asset_components_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    File: Attribute.Media<'images'> & Attribute.Required;
    Height: Attribute.Integer;
    Style: Attribute.Enumeration<['Regular', 'Parallax']> &
      Attribute.DefaultTo<'Regular'>;
    Width: Attribute.Integer & Attribute.DefaultTo<80>;
  };
}

export interface AssetComponentsPdf extends Schema.Component {
  collectionName: 'components_asset_components_pdfs';
  info: {
    description: '';
    displayName: 'PDF';
    icon: 'filePdf';
  };
  attributes: {
    File: Attribute.Media<'files'> & Attribute.Required;
  };
}

export interface AssetComponentsVideo extends Schema.Component {
  collectionName: 'components_asset_components_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    Autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    Controls: Attribute.Boolean & Attribute.DefaultTo<true>;
    File: Attribute.Media<'videos'> & Attribute.Required;
    Loop: Attribute.Boolean & Attribute.DefaultTo<false>;
    Muted: Attribute.Boolean & Attribute.DefaultTo<false>;
    Width: Attribute.Integer & Attribute.DefaultTo<80>;
  };
}

export interface ButtonComponentsButtonEntry extends Schema.Component {
  collectionName: 'components_button_components_button_entries';
  info: {
    description: '';
    displayName: 'Button Entry';
    icon: 'bold';
  };
  attributes: {
    ButtonColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Link: Attribute.String;
    Text: Attribute.String;
  };
}

export interface CardGroupComponentsCards extends Schema.Component {
  collectionName: 'components_home_page_components_cards';
  info: {
    description: '';
    displayName: 'Cards';
  };
  attributes: {
    ButtonColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonText: Attribute.String;
    CardColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    CardStyle: Attribute.Enumeration<['standard', 'overlay']> &
      Attribute.DefaultTo<'standard'>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.String;
    Text: Attribute.Blocks;
    TextColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsButtons extends Schema.Component {
  collectionName: 'components_content_page_components_buttons';
  info: {
    description: '';
    displayName: 'Buttons';
    icon: 'chartBubble';
  };
  attributes: {
    ButtonArrangement: Attribute.Enumeration<
      ['together', 'space between', 'spaced evenly']
    > &
      Attribute.DefaultTo<'together'>;
    ButtonStyle: Attribute.Enumeration<['contained', 'outlined', 'text']> &
      Attribute.DefaultTo<'outlined'>;
    Entry: Attribute.Component<'button-components.button-entry', true>;
    Style: Attribute.Component<'content-page-components.style'>;
  };
}

export interface ContentPageComponentsCardGroup extends Schema.Component {
  collectionName: 'components_content_page_components_card_groups';
  info: {
    description: '';
    displayName: 'CardGroup';
    icon: 'collapse';
  };
  attributes: {
    Cards: Attribute.Component<'card-group-components.cards', true>;
    fullWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsFaq extends Schema.Component {
  collectionName: 'components_content_page_components_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    Entry: Attribute.Component<'faq-components.faq-entry', true>;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsForm extends Schema.Component {
  collectionName: 'components_content_page_components_forms';
  info: {
    description: '';
    displayName: 'Form';
    icon: 'envelop';
  };
  attributes: {
    bodyTitle: Attribute.String;
    fields: Attribute.Component<'form-components.form-fields', true> &
      Attribute.Required;
    sendFrom: Attribute.Email &
      Attribute.DefaultTo<'notifications@villawebsolutions.com'>;
    sendTo: Attribute.Email & Attribute.Required;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsGrid extends Schema.Component {
  collectionName: 'components_content_page_components_grids';
  info: {
    description: '';
    displayName: 'Grid';
    icon: 'layout';
  };
  attributes: {
    Entry: Attribute.Component<'grid-components.grid-entry', true>;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsImage extends Schema.Component {
  collectionName: 'components_content_page_components_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'landscape';
  };
  attributes: {
    asset: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    caption: Attribute.RichText;
    captionLocation: Attribute.Enumeration<['top', 'left', 'bottom', 'right']> &
      Attribute.DefaultTo<'bottom'>;
    height: Attribute.Integer;
    imageStyle: Attribute.Enumeration<['Regular', 'Parallax', 'Paper']>;
    Style: Attribute.Component<'content-page-components.style'>;
    width: Attribute.Integer & Attribute.DefaultTo<80>;
  };
}

export interface ContentPageComponentsInstantQuote extends Schema.Component {
  collectionName: 'components_content_page_components_instant_quotes';
  info: {
    description: '';
    displayName: 'InstantQuote';
    icon: 'information';
  };
  attributes: {
    ButtonColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    ButtonStyle: Attribute.Enumeration<['contained', 'outlined', 'text']> &
      Attribute.DefaultTo<'outlined'>;
    ButtonText: Attribute.String;
    Entry: Attribute.Component<'instant-quote-components.job-types', true>;
    SendFrom: Attribute.Email;
    SendTo: Attribute.Email;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsList extends Schema.Component {
  collectionName: 'components_content_page_components_lists';
  info: {
    description: '';
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    Caption: Attribute.Blocks;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Items: Attribute.Component<'list-components.items', true>;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsParagraph extends Schema.Component {
  collectionName: 'components_content_page_components_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
    icon: 'filter';
  };
  attributes: {
    Body: Attribute.RichText;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface ContentPageComponentsStyle extends Schema.Component {
  collectionName: 'components_content_page_components_styles';
  info: {
    description: '';
    displayName: 'Style';
    icon: 'chartBubble';
  };
  attributes: {
    Animation: Attribute.Enumeration<['None', 'Fade', 'Slide']> &
      Attribute.DefaultTo<'None'>;
    BackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    paddingBottom: Attribute.Integer;
    paddingTop: Attribute.Integer;
    size: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 12;
          min: 3;
        },
        number
      > &
      Attribute.DefaultTo<12>;
    textAlign: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'center'>;
    TextColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ContentPageComponentsVideo extends Schema.Component {
  collectionName: 'components_content_page_components_videos';
  info: {
    description: '';
    displayName: 'Video';
    icon: 'slideshow';
  };
  attributes: {
    asset: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    autoplay: Attribute.Boolean;
    caption: Attribute.RichText;
    controls: Attribute.Boolean;
    loop: Attribute.Boolean;
    muted: Attribute.Boolean;
    Style: Attribute.Component<'content-page-components.style'>;
    width: Attribute.Integer & Attribute.DefaultTo<80>;
  };
}

export interface FaqComponentsFaqEntry extends Schema.Component {
  collectionName: 'components_faq_components_faq_entries';
  info: {
    displayName: 'FAQ Entry';
    icon: 'feather';
  };
  attributes: {
    Body: Attribute.RichText;
    Title: Attribute.String;
  };
}

export interface FooterComponentsFooterLinks extends Schema.Component {
  collectionName: 'components_footer_components_footer_links';
  info: {
    displayName: 'Footer Links';
    icon: 'link';
  };
  attributes: {
    link: Attribute.String;
    text: Attribute.String;
  };
}

export interface FooterComponentsIcons extends Schema.Component {
  collectionName: 'components_footer_components_icons';
  info: {
    description: '';
    displayName: 'Icons';
    icon: 'grid';
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
    Space: Attribute.Integer;
    Text: Attribute.RichText;
  };
}

export interface FooterIconsComponentsEntry extends Schema.Component {
  collectionName: 'components_footer_icons_components_entries';
  info: {
    description: '';
    displayName: 'Entry';
    icon: 'layer';
  };
  attributes: {
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Icon: Attribute.Enumeration<
      ['Facebook', 'Instagram', 'X', 'Youtube', 'TikTok']
    >;
    Link: Attribute.String;
  };
}

export interface FormComponentsFormData extends Schema.Component {
  collectionName: 'components_form_components_form_data';
  info: {
    displayName: 'FormData';
    icon: 'archive';
  };
  attributes: {
    BodyTitle: Attribute.String;
    SendFrom: Attribute.String &
      Attribute.DefaultTo<'notifications@villawebsolutions.com'>;
    SendTo: Attribute.String;
  };
}

export interface FormComponentsFormFields extends Schema.Component {
  collectionName: 'components_form_components_form_fields';
  info: {
    description: '';
    displayName: 'Form Fields';
    icon: 'bulletList';
  };
  attributes: {
    fullWidth: Attribute.Boolean;
    includeInSubjectLine: Attribute.Boolean;
    label: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['any', 'phone']> & Attribute.DefaultTo<'any'>;
    validation: Attribute.String;
  };
}

export interface GridComponentsGridEntry extends Schema.Component {
  collectionName: 'components_grid_components_grid_entries';
  info: {
    displayName: 'Grid Entry';
    icon: 'apps';
  };
  attributes: {
    Caption: Attribute.RichText;
    Picture: Attribute.Media<'images'>;
  };
}

export interface HomePageComponentsGallery extends Schema.Component {
  collectionName: 'components_home_page_components_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    Pictures: Attribute.Media<'images', true>;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface HomePageComponentsIntro extends Schema.Component {
  collectionName: 'components_home_page_components_intros';
  info: {
    description: '';
    displayName: 'Intro';
    icon: 'picture';
  };
  attributes: {
    Buttons: Attribute.Component<'button-components.button-entry', true>;
    File: Attribute.Media<'videos' | 'images', true> & Attribute.Required;
    FormData: Attribute.Component<'form-components.form-data'>;
    FormFields: Attribute.Component<'form-components.form-fields', true>;
    IntroText: Attribute.RichText;
    MobileFile: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Style: Attribute.Component<'content-page-components.style'>;
    TextPosition: Attribute.Enumeration<
      ['Bottom Left', 'Bottom Right', 'Centered']
    > &
      Attribute.DefaultTo<'Bottom Left'>;
  };
}

export interface HomePageComponentsMedia extends Schema.Component {
  collectionName: 'components_home_page_components_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'archive';
  };
  attributes: {
    asset: Attribute.Relation<
      'home-page-components.media',
      'oneToOne',
      'api::asset.asset'
    >;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface HomePageComponentsRichText extends Schema.Component {
  collectionName: 'components_home_page_components_rich_texts';
  info: {
    description: '';
    displayName: 'Rich Text';
    icon: 'quote';
  };
  attributes: {
    RichText: Attribute.Blocks;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
  };
}

export interface HomePageComponentsSlideshow extends Schema.Component {
  collectionName: 'components_home_page_components_slideshows';
  info: {
    description: '';
    displayName: 'slideshow';
    icon: 'landscape';
  };
  attributes: {
    slidesDesktop: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    slidesMobile: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Style: Attribute.Component<'content-page-components.style'>;
    Title: Attribute.String;
    uuid: Attribute.String & Attribute.Required;
  };
}

export interface InstantQuoteComponentsJobTypes extends Schema.Component {
  collectionName: 'components_instant_quote_components_job_types';
  info: {
    description: '';
    displayName: 'Job Types';
    icon: 'plus';
  };
  attributes: {
    JobType: Attribute.String & Attribute.Required;
    PriceMinimum: Attribute.Decimal & Attribute.Required;
    PricePer: Attribute.Decimal & Attribute.Required;
  };
}

export interface ListComponentsItems extends Schema.Component {
  collectionName: 'components_list_components_items';
  info: {
    displayName: 'Items';
    icon: 'star';
  };
  attributes: {
    Text: Attribute.Text;
  };
}

export interface NavbarComponentsImageLink extends Schema.Component {
  collectionName: 'components_navbar_components_image_links';
  info: {
    description: '';
    displayName: 'Image Link';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media<'images'> & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    showInMobile: Attribute.Boolean;
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
    IconLink: Attribute.String;
    MobileIcon: Attribute.Media<'images'>;
  };
}

export interface NavbarComponentsNavButton extends Schema.Component {
  collectionName: 'components_navbar_components_nav_buttons';
  info: {
    description: '';
    displayName: 'Nav Button';
    icon: 'cast';
  };
  attributes: {
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    Text: Attribute.String;
  };
}

export interface NavbarComponentsNavMenu extends Schema.Component {
  collectionName: 'components_navbar_components_nav_menus';
  info: {
    description: '';
    displayName: 'Nav Menu';
    icon: 'bulletList';
  };
  attributes: {
    menuItem: Attribute.Component<'navbar-menu-components.menu-item', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface NavbarComponentsTextLink extends Schema.Component {
  collectionName: 'components_navbar_components_text_links';
  info: {
    description: '';
    displayName: 'Text Link';
    icon: 'link';
  };
  attributes: {
    Link: Attribute.String & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
  };
}

export interface NavbarMenuComponentsMenuItem extends Schema.Component {
  collectionName: 'components_navbar_menu_components_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
    icon: 'plus';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface SiteSettingsComponentsColorPalette extends Schema.Component {
  collectionName: 'components_site_settings_components_color_palettes';
  info: {
    description: '';
    displayName: 'Color Palette';
    icon: 'chartBubble';
  };
  attributes: {
    info: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    primary: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    secondary: Attribute.String &
      Attribute.Required &
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
