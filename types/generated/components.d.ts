import type { Schema, Attribute } from '@strapi/strapi';

export interface DynamicMeaning extends Schema.Component {
  collectionName: 'components_dynamic_meanings';
  info: {
    displayName: 'Meaning';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dynamic.meaning': DynamicMeaning;
    }
  }
}
