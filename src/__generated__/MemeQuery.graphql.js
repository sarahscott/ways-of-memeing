/**
 * @flow
 * @relayHash 34ff249ecf4293548250743c63ed58cb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MemeQueryResponse = {|
  +gene: ?{|
    +name: ?string;
    +artworks: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +image: ?{|
            +cropped: ?{|
              +url: ?string;
            |};
          |};
        |};
      |}>;
    |};
  |};
|};
*/


/*
query MemeQuery(
  $geneID: String!
) {
  gene(id: $geneID) {
    name
    artworks: artworks_connection(first: 50) {
      edges {
        node {
          image {
            cropped(width: 500, height: 500) {
              url
            }
          }
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "geneID",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MemeQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "geneID",
            "type": "String!"
          }
        ],
        "concreteType": "Gene",
        "name": "gene",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "artworks",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 50,
                "type": "Int"
              }
            ],
            "concreteType": "ArtworkConnection",
            "name": "artworks_connection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ArtworkEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "height",
                                "value": 500,
                                "type": "Int!"
                              },
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 500,
                                "type": "Int!"
                              }
                            ],
                            "concreteType": "CroppedImageUrl",
                            "name": "cropped",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "url",
                                "storageKey": null
                              }
                            ],
                            "storageKey": "cropped{\"height\":500,\"width\":500}"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworks_connection{\"first\":50}"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "MemeQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "geneID",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "MemeQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "geneID",
            "type": "String!"
          }
        ],
        "concreteType": "Gene",
        "name": "gene",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "artworks",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 50,
                "type": "Int"
              }
            ],
            "concreteType": "ArtworkConnection",
            "name": "artworks_connection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ArtworkEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "height",
                                "value": 500,
                                "type": "Int!"
                              },
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 500,
                                "type": "Int!"
                              }
                            ],
                            "concreteType": "CroppedImageUrl",
                            "name": "cropped",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "url",
                                "storageKey": null
                              }
                            ],
                            "storageKey": "cropped{\"height\":500,\"width\":500}"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworks_connection{\"first\":50}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query MemeQuery(\n  $geneID: String!\n) {\n  gene(id: $geneID) {\n    name\n    artworks: artworks_connection(first: 50) {\n      edges {\n        node {\n          image {\n            cropped(width: 500, height: 500) {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
