class Data {
    private data = [
        {
            id: '',
            time: '',
            action: '',
            code: '',
            place: '',
            img: [],
            clerk: '',
            text: '',
        },
        {

        }
    ];

    getData() {
        return this.data;
    }

    setData(newItem) {
        this.data.push(newItem);
    }
}

export default Data;
