window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Jasmine",
    "totalScenarios": 2,
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 4097,
    "startedAt": "2026-08-20T01:54:52.210Z",
    "finishedAt": "2026-08-20T01:54:56.307Z",
    "testRunner": "Jasmine"
  },
  "scenarios": [
    {
      "name": "offers a web testing tutorial",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 1245,
      "startedAt": "2026-08-20T01:54:52.210Z",
      "source": {
        "path": "unknown",
        "line": 0
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.54"
        },
        {
          "type": "platform",
          "name": "linux"
        },
        {
          "type": "feature",
          "name": "serenity-js website"
        },
        {
          "type": "module",
          "name": "serenity-js-jasmine-webdriverio-template"
        }
      ],
      "activities": [
        {
          "name": "Alice navigates to \"https://serenity-js.org\"",
          "outcome": "SUCCESS",
          "duration": 1160,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-20T01:54:52.225Z",
          "location": {
            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 36,
            "column": 22
          }
        },
        {
          "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
          "outcome": "SUCCESS",
          "duration": 25,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-20T01:54:53.396Z",
          "location": {
            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 37,
            "column": 20
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2154",
          "timestamp": "2026-08-20T01:54:52.210Z",
          "duration": 1245,
          "activities": [
            {
              "name": "Alice navigates to \"https://serenity-js.org\"",
              "outcome": "SUCCESS",
              "duration": 1160,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:52.225Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 36,
                "column": 22
              }
            },
            {
              "name": "Alice ensures that the text of page element located by id ('cta-start-automating') does equal \"Start automating 🚀\"",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.396Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 37,
                "column": 20
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithWebdriverIO"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    },
    {
      "name": "offers examples to help you practice test automation",
      "category": "serenity-js website",
      "outcome": "SUCCESS",
      "duration": 2849,
      "startedAt": "2026-08-20T01:54:53.458Z",
      "source": {
        "path": "unknown",
        "line": 0
      },
      "tags": [
        {
          "type": "browser",
          "name": "chrome 152.0.7977.54"
        },
        {
          "type": "platform",
          "name": "linux"
        },
        {
          "type": "feature",
          "name": "serenity-js website"
        },
        {
          "type": "module",
          "name": "serenity-js-jasmine-webdriverio-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt ensures all GitHub systems are operational",
          "outcome": "SUCCESS",
          "duration": 165,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 133,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.463Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 66,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2154/serenity-js-jasmine-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-7035e0c730.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 01:54:32 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.047527\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: caa6bd8576154b0487fb04da47aef122\natl-request-id: caa6bd85-7615-4b04-87fb-04da47aef122\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"ec1da52b02aeaf9c8562e26eaa059d44\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 bde2479fd325644e3a866a702d0c1d52.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nx-amz-cf-id: 8d0tvflEcr58YVnQbyvfpx4rmBCmpQF5vvOYGTAxqhwG1sIFn8zTwg==\nage: 21",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T00:54:18.198Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.606Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 66,
                "column": 26
              }
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.617Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 66,
                "column": 26
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T01:54:53.463Z",
          "location": {
            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 66,
            "column": 26
          }
        },
        {
          "name": "Wendy starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 2129,
          "children": [
            {
              "name": "Wendy creates an empty todo list",
              "outcome": "SUCCESS",
              "duration": 1669,
              "children": [
                {
                  "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                  "outcome": "SUCCESS",
                  "duration": 1020,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:53.665Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:54.696Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 71,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                  "outcome": "SUCCESS",
                  "duration": 569,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:54.718Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy empties local storage if needed",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [
                    {
                      "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.298Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.298Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 20,
                    "column": 22
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.665Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 34,
                "column": 22
              }
            },
            {
              "name": "Wendy records an item called 'Buy dog food'",
              "outcome": "SUCCESS",
              "duration": 140,
              "children": [
                {
                  "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.345Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 55,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.385Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  }
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.450Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:55.344Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called 'Feed the dog'",
              "outcome": "SUCCESS",
              "duration": 129,
              "children": [
                {
                  "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.494Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.529Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  }
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.583Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:55.494Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            },
            {
              "name": "Wendy records an item called \"Book a vet's appointment\"",
              "outcome": "SUCCESS",
              "duration": 150,
              "children": [
                {
                  "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.634Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 40,
                    "column": 38
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.681Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 41,
                    "column": 34
                  }
                },
                {
                  "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.737Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:55.633Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 35,
                "column": 47
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T01:54:53.664Z",
          "location": {
            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 71,
            "column": 22
          }
        },
        {
          "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
          "outcome": "SUCCESS",
          "duration": 424,
          "children": [
            {
              "name": "Wendy marks an item called 'Buy dog food' as completed",
              "outcome": "SUCCESS",
              "duration": 224,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 214,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                      "outcome": "SUCCESS",
                      "duration": 166,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 156,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T01:54:55.841Z",
                          "location": {
                            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.841Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.804Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:55.804Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            },
            {
              "name": "Wendy marks an item called 'Feed the dog' as completed",
              "outcome": "SUCCESS",
              "duration": 179,
              "children": [
                {
                  "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                  "outcome": "SUCCESS",
                  "duration": 168,
                  "children": [
                    {
                      "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                      "outcome": "SUCCESS",
                      "duration": 127,
                      "children": [
                        {
                          "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 116,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T01:54:56.070Z",
                          "location": {
                            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 24,
                            "column": 19
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:56.070Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                        "line": 13,
                        "column": 31
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:56.039Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:56.039Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                "line": 47,
                "column": 55
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T01:54:55.804Z",
          "location": {
            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 76,
            "column": 22
          }
        },
        {
          "name": "Wendy ensures that number of items left does equal 1",
          "outcome": "SUCCESS",
          "duration": 35,
          "children": [],
          "type": "Task",
          "startedAt": "2026-08-20T01:54:56.238Z",
          "location": {
            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
            "line": 80,
            "column": 20
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2154",
          "timestamp": "2026-08-20T01:54:52.210Z",
          "duration": 2849,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 165,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 133,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:53.463Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 66,
                    "column": 26
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2154/serenity-js-jasmine-webdriverio-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-7035e0c730.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 01:54:32 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.047527\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: caa6bd8576154b0487fb04da47aef122\natl-request-id: caa6bd85-7615-4b04-87fb-04da47aef122\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"ec1da52b02aeaf9c8562e26eaa059d44\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 bde2479fd325644e3a866a702d0c1d52.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nx-amz-cf-id: 8d0tvflEcr58YVnQbyvfpx4rmBCmpQF5vvOYGTAxqhwG1sIFn8zTwg==\nage: 21",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T00:54:18.198Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:53.606Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 66,
                    "column": 26
                  }
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:53.617Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                    "line": 66,
                    "column": 26
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.463Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 66,
                "column": 26
              }
            },
            {
              "name": "Wendy starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 2129,
              "children": [
                {
                  "name": "Wendy creates an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 1669,
                  "children": [
                    {
                      "name": "Wendy navigates to \"https://todo-app.serenity-js.org/\"",
                      "outcome": "SUCCESS",
                      "duration": 1020,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:53.665Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      }
                    },
                    {
                      "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:54.696Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                        "line": 71,
                        "column": 22
                      }
                    },
                    {
                      "name": "Wendy waits until \"What needs to be done?\" input box does become visible",
                      "outcome": "SUCCESS",
                      "duration": 569,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:54.718Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 34,
                        "column": 22
                      }
                    },
                    {
                      "name": "Wendy empties local storage if needed",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [
                        {
                          "name": "Wendy checks whether <<persisted items>>.length does have value greater than 0",
                          "outcome": "SUCCESS",
                          "duration": 16,
                          "children": [],
                          "type": "Task",
                          "startedAt": "2026-08-20T01:54:55.298Z",
                          "location": {
                            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                            "line": 20,
                            "column": 22
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.298Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 20,
                        "column": 22
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:53.665Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 34,
                    "column": 22
                  }
                },
                {
                  "name": "Wendy records an item called 'Buy dog food'",
                  "outcome": "SUCCESS",
                  "duration": 140,
                  "children": [
                    {
                      "name": "Wendy enters \"Buy dog food\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.345Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      }
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 55,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.385Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      }
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Buy dog food\"",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.450Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.344Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called 'Feed the dog'",
                  "outcome": "SUCCESS",
                  "duration": 129,
                  "children": [
                    {
                      "name": "Wendy enters \"Feed the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.494Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      }
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 43,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.529Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      }
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Feed the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.583Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.494Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                },
                {
                  "name": "Wendy records an item called \"Book a vet's appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 150,
                  "children": [
                    {
                      "name": "Wendy enters \"Book a vet's appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 37,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.634Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 40,
                        "column": 38
                      }
                    },
                    {
                      "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.681Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 41,
                        "column": 34
                      }
                    },
                    {
                      "name": "Wendy waits until the text of displayed items does contain \"Book a vet's appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.737Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 35,
                        "column": 47
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.633Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 35,
                    "column": 47
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:53.664Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 71,
                "column": 22
              }
            },
            {
              "name": "Wendy marks the following items as completed: [ 'Buy dog food', 'Feed the dog' ]",
              "outcome": "SUCCESS",
              "duration": 424,
              "children": [
                {
                  "name": "Wendy marks an item called 'Buy dog food' as completed",
                  "outcome": "SUCCESS",
                  "duration": 224,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Buy dog food' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 214,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Buy dog food'",
                          "outcome": "SUCCESS",
                          "duration": 166,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Buy dog food'",
                              "outcome": "SUCCESS",
                              "duration": 156,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T01:54:55.841Z",
                              "location": {
                                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T01:54:55.841Z",
                          "location": {
                            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:55.804Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:55.804Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                },
                {
                  "name": "Wendy marks an item called 'Feed the dog' as completed",
                  "outcome": "SUCCESS",
                  "duration": 179,
                  "children": [
                    {
                      "name": "Wendy checks whether CSS classes of an item called 'Feed the dog' does not contain \"completed\"",
                      "outcome": "SUCCESS",
                      "duration": 168,
                      "children": [
                        {
                          "name": "Wendy toggles the completion status of an item called 'Feed the dog'",
                          "outcome": "SUCCESS",
                          "duration": 127,
                          "children": [
                            {
                              "name": "Wendy clicks on toggle button of an item called 'Feed the dog'",
                              "outcome": "SUCCESS",
                              "duration": 116,
                              "children": [],
                              "type": "Task",
                              "startedAt": "2026-08-20T01:54:56.070Z",
                              "location": {
                                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                                "line": 24,
                                "column": 19
                              }
                            }
                          ],
                          "type": "Task",
                          "startedAt": "2026-08-20T01:54:56.070Z",
                          "location": {
                            "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoListItem.ts",
                            "line": 13,
                            "column": 31
                          }
                        }
                      ],
                      "type": "Task",
                      "startedAt": "2026-08-20T01:54:56.039Z",
                      "location": {
                        "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                        "line": 47,
                        "column": 55
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T01:54:56.039Z",
                  "location": {
                    "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/serenity/todo-list-app/TodoList.ts",
                    "line": 47,
                    "column": 55
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:55.804Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 76,
                "column": 22
              }
            },
            {
              "name": "Wendy ensures that number of items left does equal 1",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Task",
              "startedAt": "2026-08-20T01:54:56.238Z",
              "location": {
                "path": "/__w/serenity-js-jasmine-webdriverio-template/serenity-js-jasmine-webdriverio-template/test/specs/serenity-js_website.spec.ts",
                "line": 80,
                "column": 20
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithWebdriverIO"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Wendy",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithWebdriverIO"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-18T11:32:44.293Z",
      "duration": 2695,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2153",
      "slowest": 1740,
      "fastest": 952,
      "average": 1346,
      "commit": "f0860b2bb4b21d31c72f514ef227b31e97657452",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template/actions/runs/32132102509",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    },
    {
      "timestamp": "2026-08-20T01:54:52.210Z",
      "duration": 4097,
      "outcomes": {
        "passed": 2,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2154",
      "slowest": 2849,
      "fastest": 1245,
      "average": 2047,
      "commit": "0d46dd87acc08355145589c00c216dc45aacb923",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template/actions/runs/32322634139",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "browser",
      "name": "chrome 152.0.7977.54",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "linux",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "serenity-js website",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-jasmine-webdriverio-template",
      "scenarioCount": 2,
      "passed": 2,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.8",
    "testRunner": {
      "name": "Jasmine",
      "version": "6.3.0"
    },
    "browsers": [
      {
        "name": "chrome",
        "version": "152.0.7977.54"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2154",
      "branch": "main",
      "commit": "0d46dd87acc08355145589c00c216dc45aacb923",
      "commitMessage": "fix(deps): updated dependencies",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template/actions/runs/32322634139",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template",
      "triggeredBy": "jan-molak"
    },
    "projectName": "serenity-js-jasmine-webdriverio-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "specs",
    "outcomes": {
      "passed": 2,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 2,
    "children": [
      {
        "type": "directory",
        "name": "..",
        "outcomes": {
          "passed": 2,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 2,
        "children": [
          {
            "type": "directory",
            "name": "..",
            "outcomes": {
              "passed": 2,
              "failed": 0,
              "pending": 0,
              "skipped": 0,
              "compromised": 0,
              "error": 0
            },
            "scenarioCount": 2,
            "children": [
              {
                "type": "file",
                "name": "unknown",
                "outcomes": {
                  "passed": 2,
                  "failed": 0,
                  "pending": 0,
                  "skipped": 0,
                  "compromised": 0,
                  "error": 0
                },
                "scenarioCount": 2,
                "scenarios": [
                  {
                    "name": "offers a web testing tutorial",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS"
                    ]
                  },
                  {
                    "name": "offers examples to help you practice test automation",
                    "outcome": "SUCCESS",
                    "executionHistory": [
                      "SUCCESS"
                    ]
                  }
                ],
                "score": {
                  "confidence": 100,
                  "passRate": 100,
                  "completeness": 100,
                  "consistency": 100
                }
              }
            ],
            "score": {
              "confidence": 100,
              "passRate": 100,
              "completeness": 100,
              "consistency": 100
            },
            "displayName": "Serenity/JS Jasmine WebdriverIO Template",
            "readme": "<p><a href=\"https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template/actions/workflows/main.yml\" target=\"_blank\" rel=\"noopener\"><img src=\"https://github.com/serenity-js/serenity-js-jasmine-webdriverio-template/actions/workflows/main.yml/badge.svg\" alt=\"Build Status\"></a>\n<a href=\"https://serenity-js.org/releases/\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/npm/v/%40serenity-js%2Fcore?style=flat&logoColor=%23FBD30B&label=Serenity%2FJS&color=%23FBD30B\" alt=\"NPM Version\"></a></p>\n<p><a href=\"https://www.linkedin.com/company/serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin\" alt=\"Follow Serenity/JS on LinkedIn\"></a>\n<a href=\"https://www.youtube.com/@serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube\" alt=\"Watch Serenity/JS on YouTube\"></a>\n<a href=\"https://matrix.to/#/#serenity-js:gitter.im\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix\" alt=\"Join Serenity/JS Community Chat\"></a>\n<a href=\"https://github.com/sponsors/serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github\" alt=\"Support Serenity/JS on GitHub\"></a></p>\n<p>This <a href=\"https://help.github.com/en/articles/creating-a-repository-from-a-template\" target=\"_blank\" rel=\"noopener\"><strong>template repository</strong></a> helps you automate testing\nof web applications using <a href=\"https://serenity-js.org\" target=\"_blank\" rel=\"noopener\"><strong>Serenity/JS</strong></a>, <a href=\"https://jasmine.github.io/\" target=\"_blank\" rel=\"noopener\"><strong>Jasmine</strong></a>, and <a href=\"https://webdriver.io/\" target=\"_blank\" rel=\"noopener\"><strong>WebdriverIO</strong></a>,\nand comes pre-configured with <strong>TypeScript</strong>, linting, reporting, and example test scenarios.</p>\n<p>Use this template to accelerate your test automation setup and generate <a href=\"https://serenity-js.org/handbook/reporting/html-reporter/\" target=\"_blank\" rel=\"noopener\">Serenity/JS HTML reports</a> with trend history, flaky test detection, and an interactive dashboard.</p>\n<p>View live reports generated by this template:</p>\n<ul>\n<li><a href=\"https://serenity-js.github.io/serenity-js-jasmine-webdriverio-template/\" target=\"_blank\" rel=\"noopener\">Serenity/JS HTML Report</a></li>\n</ul>\n<h2>Features</h2>\n<ul>\n<li>Pre-configured <strong>Serenity/JS</strong> + <strong>Jasmine</strong> + <strong>WebdriverIO</strong> + <strong>TypeScript</strong> setup</li>\n<li>Example test scenarios demonstrating web application testing</li>\n<li><strong>Screenplay Pattern</strong> implementation showcasing reusable tasks and interactions</li>\n<li>Integrated reporting with <strong>Serenity/JS HTML Reports</strong> — trend history, error clustering, and consistency analysis</li>\n<li>ESLint configuration for code quality and consistency</li>\n<li>CI-ready scripts and development environment support</li>\n<li>Ready-to-use GitHub Codespaces environment using the official <a href=\"https://serenity-js.org/handbook/integration/docker/\" target=\"_blank\" rel=\"noopener\">Serenity/JS Docker image</a></li>\n</ul>\n<h2>Quick Start</h2>\n<h3>Explore instantly in GitHub Codespaces</h3>\n<p>Launch this project in an online development environment:</p>\n<p><a href=\"https://github.com/codespaces/new?ref=main&repo=serenity-js/serenity-js-jasmine-webdriverio-template\" target=\"_blank\" rel=\"noopener\"><img src=\"https://github.com/codespaces/badge.svg\" alt=\"Open in GitHub Codespaces\"></a></p>\n<h3>Run locally</h3>\n<h4>1. Prerequisites</h4>\n<p>Follow the <a href=\"https://serenity-js.org/handbook/about/installation/\" target=\"_blank\" rel=\"noopener\">Serenity/JS installation guide</a> to set up your development environment with the following prerequisites:</p>\n<ul>\n<li><a href=\"https://nodejs.org/\" target=\"_blank\" rel=\"noopener\">Node.js</a> (LTS version recommended)</li>\n</ul>\n<h4>2. Create your project</h4>\n<p><a href=\"https://help.github.com/en/articles/creating-a-repository-from-a-template\" target=\"_blank\" rel=\"noopener\">Create a new GitHub repository</a> from this template and\n<a href=\"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository\" target=\"_blank\" rel=\"noopener\">clone it</a> to your machine:</p>\n<pre><code class=\"language-shell\">git clone &lt;your-repo-url&gt;\ncd &lt;your-project&gt;\n</code></pre>\n<h4>3. Install dependencies</h4>\n<p>Install the project dependencies:</p>\n<pre><code class=\"language-shell\">npm ci\n</code></pre>\n<h5>Corporate networks</h5>\n<p>If your environment requires proxy configuration or an internal registry like Artifactory or Nexus, add an <a href=\"https://docs.npmjs.com/cli/v6/configuring-npm/npmrc\" target=\"_blank\" rel=\"noopener\"><code>.npmrc</code></a> file\nwith the appropriate configuration in your home directory:</p>\n<pre><code>proxy=http://user:password@host.mycompany.com:8080/\nhttps-proxy=http://user:password@host.mycompany.com:8080/\nstrict-ssl=false\nregistry=https://artifactory.mycompany.com/artifactory/\n</code></pre>\n<h4>4. Run tests</h4>\n<p>Run the example tests:</p>\n<pre><code>npm test\n</code></pre>\n<h4>5. View reports</h4>\n<p>The HTML report is generated automatically during the test run at <code>./reports/serenity-js/index.html</code>.</p>\n<p>To serve the report locally and open it in your browser:</p>\n<pre><code>npm run test:report\n</code></pre>\n<h2>Execution</h2>\n<p>The project provides several <a href=\"https://docs.npmjs.com/cli/v6/using-npm/scripts\" target=\"_blank\" rel=\"noopener\">NPM scripts</a> defined in <a href=\"package.json\"><code>package.json</code></a>:</p>\n<pre><code>npm run lint            # runs code linter\nnpm run lint:fix        # attempts to automatically fix linting issues\nnpm test                # executes the example test suite\n                        # and generates the report under ./reports/serenity-js\nnpm run test:report     # serves the test report at http://localhost:8080\n                        # and opens it in the browser\n</code></pre>\n<h3>Test execution modes</h3>\n<pre><code class=\"language-shell\"># Run all tests\nnpm test\n\n# Run specific test file\nnpm test -- --spec test/specs/serenity-js_website.spec.ts\n\n# Run in headed mode (disable headless)\n# Update wdio.conf.ts to set headless: false in browser capabilities\n</code></pre>\n<h2>Project Structure</h2>\n<p>The template follows a clear structure to help you organize your tests:</p>\n<pre><code>test/\n├── serenity/\n│   ├── github-api/                        # Example GitHub API-related tasks\n│   └── todo-list-app/                     # Example todo list app-related tasks\n└── specs/\n    └── serenity-js_website.spec.ts        # Jasmine test specifications\n\nwdio.conf.ts                               # WebdriverIO configuration\nreports/serenity-js/                        # Generated Serenity/JS HTML reports\n</code></pre>\n<p><strong>Key files:</strong></p>\n<ul>\n<li><code>test/specs/*.spec.ts</code> - Jasmine test specifications</li>\n<li><code>test/serenity/</code> - Tasks, questions, and page objects following the <a href=\"https://serenity-js.org/handbook/design/screenplay-pattern/\" target=\"_blank\" rel=\"noopener\">Screenplay Pattern</a></li>\n</ul>\n<h2>Next steps</h2>\n<ul>\n<li>Replace the example tests with your own</li>\n<li>Add new tasks, interactions, and assertions using Serenity/JS</li>\n<li>Extend the test suite or integrate it into CI/CD pipelines</li>\n<li>Use the sample reports to understand expected testing and reporting workflows</li>\n</ul>\n<h2>Troubleshooting</h2>\n<h3>Port 8080 already in use</h3>\n<p>If the report server fails to start because port 8080 is in use, you can specify a different port:</p>\n<pre><code class=\"language-shell\">npx @serenity-js/html-reporter serve --dir ./reports/serenity-js --port 3000 --open\n</code></pre>\n<h2>Documentation</h2>\n<ul>\n<li><a href=\"https://serenity-js.org/handbook/test-runners/webdriverio/\" target=\"_blank\" rel=\"noopener\">Using Serenity/JS with WebdriverIO</a></li>\n<li><a href=\"https://serenity-js.org/handbook/reporting/html-reporter/\" target=\"_blank\" rel=\"noopener\">Serenity/JS HTML Reporter</a></li>\n<li><a href=\"https://serenity-js.org/api/\" target=\"_blank\" rel=\"noopener\">API Reference</a></li>\n<li><a href=\"https://serenity-js.org/handbook/design/screenplay-pattern/\" target=\"_blank\" rel=\"noopener\">Screenplay Pattern Guide</a></li>\n<li><a href=\"https://serenity-js.org/handbook/project-templates/\" target=\"_blank\" rel=\"noopener\">Serenity/JS Project Templates</a></li>\n<li><a href=\"https://github.com/serenity-js/serenity-js/tree/main/examples\" target=\"_blank\" rel=\"noopener\">More examples and reference implementations</a></li>\n<li><a href=\"https://serenity-js.org/handbook/tutorials/your-first-web-scenario/\" target=\"_blank\" rel=\"noopener\">Tutorial: First Web Scenario</a></li>\n</ul>\n<h2>Contributing</h2>\n<p>Contributions of all kinds are welcome! Get started with the <a href=\"https://serenity-js.org/community/contributing/\" target=\"_blank\" rel=\"noopener\">Contributing Guide</a>.</p>\n<h2>Community</h2>\n<p><a href=\"https://www.linkedin.com/company/serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/LinkedIn-Serenity%2FJS%20-0077B5?logo=linkedin\" alt=\"Follow Serenity/JS on LinkedIn\"></a>\n<a href=\"https://www.youtube.com/@serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube\" alt=\"Watch Serenity/JS on YouTube\"></a>\n<a href=\"https://matrix.to/#/#serenity-js:gitter.im\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix\" alt=\"Join Serenity/JS Community Chat\"></a></p>\n<p>Join a thriving community of developers using Serenity/JS to deliver high-quality software!</p>\n<h3>Stay informed</h3>\n<ul>\n<li>📰 <a href=\"https://www.linkedin.com/company/serenity-js\" target=\"_blank\" rel=\"noopener\">Get the latest updates on LinkedIn</a> - Product announcements, tutorials, and best practices</li>\n<li>📺 <a href=\"https://www.youtube.com/@serenity-js\" target=\"_blank\" rel=\"noopener\">Watch tutorials on YouTube</a> - Video guides and conference talks</li>\n</ul>\n<h3>Get help and share knowledge</h3>\n<ul>\n<li>💬 <a href=\"https://matrix.to/#/#serenity-js:gitter.im\" target=\"_blank\" rel=\"noopener\">Join the Community Chat</a> - Real-time help and discussions</li>\n<li>💡 <a href=\"https://github.com/orgs/serenity-js/discussions\" target=\"_blank\" rel=\"noopener\">Browse the Discussions Forum</a> - Q&amp;A and feature discussions<ul>\n<li>Check out <a href=\"https://github.com/orgs/serenity-js/discussions/categories/how-to\" target=\"_blank\" rel=\"noopener\">How to...?</a> for answers to common questions</li>\n</ul>\n</li>\n</ul>\n<h3>Share the love!</h3>\n<p>Love Serenity/JS? Help others discover the framework:</p>\n<p>⭐ <strong>Star the <a href=\"https://github.com/serenity-js/serenity-js\" target=\"_blank\" rel=\"noopener\">Serenity/JS repository</a></strong> on GitHub</p>\n<p><a href=\"https://github.com/serenity-js/serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge\" alt=\"GitHub stars\"></a></p>\n<p>Starring the repository helps increase visibility and shows your support for the project!</p>\n<h2>License</h2>\n<p>The Serenity/JS code base is licensed under the <a href=\"https://opensource.org/license/apache-2-0\" target=\"_blank\" rel=\"noopener\">Apache-2.0</a> license,\nwhile its documentation and the <a href=\"https://serenity-js.org/handbook/\" target=\"_blank\" rel=\"noopener\">Serenity/JS Handbook</a> are licensed under the <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\" target=\"_blank\" rel=\"noopener\">Creative Commons BY-NC-SA 4.0 International</a>.</p>\n<p>See the <a href=\"https://serenity-js.org/legal/license/\" target=\"_blank\" rel=\"noopener\">Serenity/JS License</a>.</p>\n<h2>Support</h2>\n<h3>💝 Sponsor Serenity/JS</h3>\n<p>Support the ongoing development of Serenity/JS and the open-source community:</p>\n<p><a href=\"https://github.com/sponsors/serenity-js\" target=\"_blank\" rel=\"noopener\"><img src=\"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white\" alt=\"GitHub Sponsors\"></a></p>\n<p><strong>Sponsor benefits:</strong></p>\n<ul>\n<li>🎓 Access to <a href=\"https://github.com/serenity-js/playbooks\" target=\"_blank\" rel=\"noopener\">Serenity/JS Playbooks</a> - Advanced patterns and best practices</li>\n<li>🏆 Priority support in the <a href=\"https://github.com/orgs/serenity-js/discussions\" target=\"_blank\" rel=\"noopener\">Community Discussions Forum</a></li>\n<li>💚 Support open-source development and help keep Serenity/JS free for everyone</li>\n</ul>\n<h3>🏢 Professional Services</h3>\n<p>Need dedicated support, training, or consulting for your team?</p>\n<p><strong><a href=\"https://www.linkedin.com/in/janmolak/\" target=\"_blank\" rel=\"noopener\">Contact Jan Molak</a></strong> for:</p>\n<ul>\n<li>🎯 <strong>Consulting &amp; Training</strong> - Custom workshops and team training sessions</li>\n<li>🤝 <strong>Corporate Support</strong> - Dedicated technical support and SLA-backed assistance</li>\n<li>🏗️ <strong>Architecture Reviews</strong> - Expert guidance on test automation strategy and implementation</li>\n<li>📊 <strong>Corporate Sponsorship</strong> - Tailored partnership opportunities for organizations</li>\n</ul>\n"
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "specs"
};
