const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools') 
const resolvers = require('./resolvers')
const casual = require('casual')

const typeDefs = `
	#Esto es un curso en el sistema
	type Curso {
		id: ID!
		titulo: String!
		#Esta es la descripción del curso
		descripcion: String!
		profesor: Profesor
		rating: Float
		comentarios: [Comentario]
	}

	#Profesores que distan Cursos
	type Profesor {
		id: ID!
		nombre: String!
		nacionalidad: String!
		genero: Genero
		cursos: [Curso]
	}

	enum Genero {
		MASCULINO
		FEMENINO
	}

	type Comentario {
		id: ID!
		nombre: String!
		cuerpo: String!
	}

	type Query {
		cursos: [Curso]
		profesores: [Profesor]
		curso(id: Int): Curso
		profesor(id: Int): Profesor
	}
`

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})

addMockFunctionsToSchema({
	schema,
	mocks: {
		Curso: () => {
			return {
				id: casual.uuid,
				titulo: casual.title,
				descripcion: casual.description
			}
		},
		Profesor: () => {
      return {
        id: casual.uuid,
        nombre: casual.name,
				nacionalidad: casual.country
			}
		},
		Comentario: () => {
      return {
        id: casual.uuid,
        nombre: casual.name,
				cuerpo: casual.sentence
			}
		}
	}
})

module.exports = schema
