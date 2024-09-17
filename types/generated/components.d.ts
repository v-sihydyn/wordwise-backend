import type { Schema, Attribute } from '@strapi/strapi';

export interface DynamicMeaning extends Schema.Component {
  collectionName: 'components_dynamic_meanings';
  info: {
    displayName: 'Single text field';
    description: '';
  };
  attributes: {
    text: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dynamic.meaning': DynamicMeaning;
    }
  }
}
