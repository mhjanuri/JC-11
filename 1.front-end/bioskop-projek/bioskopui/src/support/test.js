onDeleteClick = (val) => {
    Swal.fire({
        title: "Are you sure to delete? <br/>" + val.title,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            Axios.delete(`${url}movies/${val.id}`, this.state.dataMovies)
                .then((res) => {
                    Axios.get(`${url}movies`)
                        .then((res) => {
                            this.setState({ dataMovies: res.data, modaledit: false })
                        })
                }).catch((err) => {
                    console.log(err)
                })
        }
    })
}
