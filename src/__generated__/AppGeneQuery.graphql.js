/**
 * @flow
 * @relayHash 9e8a1c644a5330b1f462cf607297e7e7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppGeneQueryResponse = {|
  +gene: ?{|
    +name: ?string;
    +artworks_connection: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +title: ?string;
        |};
      |}>;
    |};
  |};
|};
*/


/*
query AppGeneQuery {
  gene(id: "geometric") {
    name
    artworks_connection(first: 10) {
      edges {
        node {
          title
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppGeneQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "geometric",
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
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "title",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworks_connection{\"first\":10}"
          }
        ],
        "storageKey": "gene{\"id\":\"geometric\"}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppGeneQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppGeneQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "id",
            "value": "geometric",
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
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10,
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
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "title",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artworks_connection{\"first\":10}"
          }
        ],
        "storageKey": "gene{\"id\":\"geometric\"}"
      }
    ]
  },
  "text": "query AppGeneQuery {\n  gene(id: \"geometric\") {\n    name\n    artworks_connection(first: 10) {\n      edges {\n        node {\n          title\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
