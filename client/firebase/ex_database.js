class Data {
    data = {
        clerk: [
            {
                id: 'fh57sk58dh34kf74jfk345',
                name: 'Test',
                login: 'test',
                password: 'test',
                position: 'Admin'
            }
        ],
        containers: [
            {
                id: 'qw1ew2rty5ewr6ef67fr',
                code: 'HDMU210851',
                action: [
                    {
                        type: 'Gate IN',
                        time: '2018-09-17T03:24:00'
                    },
                    {
                        type: 'Gate OUT',
                        time: '2018-09-18T06:04:00'
                    }
                ],
                img: [
                    'https://st.mascus.com/imagetilewm/product/3bf6739d/other-container-20fot-nya-sjoc,14627ef9.jpg'
                ],
                location: '',
                clerk: 'fh57sk58dh34kf74jfk345',
                text: 'Not broken',
            },
            {
                id: 'qw1ew2rty2ewr6ef67fr',
                code: 'HDNC431121',
                action: [
                    {
                        type: 'Gate IN',
                        time: '2018-09-17T03:24:00'
                    }
                ],
                img: [
                    'https://www.alconet-containers.com/wp-content/uploads//2017/04/alconet-1-17.jpg'
                ],
                location: '',
                clerk: 'fh57sk58dh34kf74jfk345',
                text: 'Not broken',
            },
            {
                id: 'qw1ew2rty5ewr6sf67fr',
                code: 'HDTR111221',
                action: [
                    {
                        type: 'Gate IN',
                        time: '2018-09-17T03:24:00'
                    },
                    {
                        type: 'Gate OUT',
                        time: '2018-09-18T06:04:00'
                    },
                    {
                        type: 'Load to Vessel',
                        time: '2018-09-18T08:04:00'
                    }
                ],
                img: [
                    'https://www.clevelandcontainers.co.uk/system/uploads/image_content/image/286/desktop_high_res/10ft_New-1-1a5720-1a34b7.jpg'
                ],
                location: '',
                clerk: 'fh57sk58dh34kf74jfk345',
                text: 'Not broken',
            }
        ]
    };

    getData() {
        return this.data;
    }

    setData(newItem) {
        this.data.push(newItem);
    }
}

export default Data;
