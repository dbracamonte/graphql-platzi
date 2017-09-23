const { makeExecutableSchema } = require('graphql-tools') 

const typeDefs = `
	# Esto es un curso en el sistema
	type Curso {
		id: ID!
		titulo: String!
		descripcion: String!
		proferso: Profesor
		rating: Float
		comentarios: [Comentario]
	}

	# Profesores que distan Cursos
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
	typeDefs
})

module.exports = schema
