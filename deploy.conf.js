module.exports = {
    assetsPath: '/patentus/',

    front: {
        enabled: true,
        host: '0b367cad-2015-4482-abbd-5cf12e746179.pub.cloud.scaleway.com',
        username: 'root',
        privateKey: '../../.ssh/id_rsa',
        dest: '/var/www/html/patentus'
    },

    wp: {
        enabled: false,
        host: '',
        username: '',
        password: '',
        dest: ''
    }

};
