const resolvers = {
	Query: {
		cursos: () =>{
			return [{
				id: 1,
				titulo: 'Cualquier titulo',
				descripcion: 'Cualquier descripcion'
			}]
		}
  },
  Curso: {
    profesor: () => {
      return {
        id: 3,
        nombre: 'Pablo',
        nacionalidad: 'Argentina'
      }
    },
    comentarios: () => {
      return [{
        id: 1,
        nombre: 'Natasha',
        cuerpo: 'Esto es una maravilla'
      },
      {
        id: 2,
        nombre: 'Dylan',
        cuerpo: 'Esto es una cagada'
      }]
    }
  }
}

module.exports = resolvers
