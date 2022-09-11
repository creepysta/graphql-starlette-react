from starlette.applications import Starlette
from starlette.routing import Route, WebSocketRoute
from strawberry.asgi import GraphQL

from api.graphql import Mutation, Query, schema
from api.routes import homepage

graphql_app = GraphQL(schema)

routes = [
    Route("/graphql", graphql_app),
    Route("/", homepage),
]

app = Starlette(debug=True, routes=routes)
