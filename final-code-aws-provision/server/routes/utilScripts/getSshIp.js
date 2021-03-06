const getSshIp = () => {
    return new Promise(function(resolve, reject) {
        elfUtils
            .readFile(process.env.HOME + '/.ssh/config')
            .then(content => {
                //var pattern = new RegExp('Host ec2-bc[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)');
                var pattern = new RegExp('Host ec2-bc\n\t(.*)\n\t(.*)\n\t(.*)\n\t(.*)');
                const result = {};
                const match = content.result.match(pattern);
                //console.log('BEFORE FOR LOOP');

                for (let i = 1; i < 5; i++) {
                    if (match[i].startsWith('HostName')) {
                        var hostPattern = new RegExp('HostName\\s(.*)');
                        result.hostName = match[i].match(hostPattern)[1];
                    }
                    if (match[i].startsWith('IdentityFile')) {
                        const idPattern = new RegExp('IdentityFile\\s(.*)');
                        const path = match[i].match(idPattern)[1];
                        result.identityFile = path.substring(
                            path.lastIndexOf('/') + 1,
                            path.length
                        );
                    }
                }
                //console.log('AFTER FOR LOOP', result);

                resolve(result);
            })
            .catch(reject);
    });
};

export getSshIp;