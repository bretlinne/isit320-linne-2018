(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        10: function(e, t, n) {
            e.exports = n(20);
        },
        16: function(e, t, n) {},
        20: function(e, t, n) {
            'use strict';
            n.r(t);
            var a = n(0),
                o = n.n(a),
                c = n(9),
                r = n.n(c),
                s = (n(16), n(2)),
                l = n(3),
                i = n(5),
                u = n(4),
                d = n(6),
                h = n(1),
                p = (n(8),
                n(19),
                (function(e) {
                    function t() {
                        return (
                            Object(s.a)(this, t),
                            Object(i.a)(
                                this,
                                Object(u.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(l.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement(
                                            'header',
                                            null,
                                            o.a.createElement(
                                                'h1',
                                                null,
                                                'Linne AWS Provision Final'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(a.Component)),
                m = (function(e) {
                    function t() {
                        var e;
                        return (
                            Object(s.a)(this, t),
                            ((e = Object(i.a)(
                                this,
                                Object(u.a)(t).call(this)
                            )).clearDataFields = function() {
                                Object(h.a)(Object(h.a)(e)).setState({
                                    status: 'waiting for server',
                                    Route: '',
                                    HostAddress: '',
                                    AllocationId: '',
                                    InstanceId: '',
                                    KeyName: '',
                                    Architecture: '',
                                    OS: '',
                                    GenericTrueFalseFlag: '',
                                    RemovedEc2Ip: '',
                                    InstanceStatus: '',
                                    Region: ''
                                });
                            }),
                            (e.queryServer = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                fetch('/foo')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        return (
                                            console.log(
                                                'runFoo called: ',
                                                e.result
                                            ),
                                            t.setState({
                                                status:
                                                    'Foo Route Called ' +
                                                    e.result
                                            }),
                                            e
                                        );
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (e.createEducate = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields(),
                                    fetch('/create-educate')
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            return (
                                                console.log(
                                                    'createEducate Function called: ',
                                                    e.result
                                                ),
                                                t.setState({
                                                    responseTop: e.result,
                                                    Route: 'Route: ' + e.route,
                                                    HostAddress:
                                                        'HostAddress: ' +
                                                        e.hostName,
                                                    AllocationId:
                                                        'AllocationId: ' +
                                                        e.instanceData
                                                            .AllocationId,
                                                    InstanceId:
                                                        'InstanceId: ' +
                                                        e.instanceData
                                                            .InstanceId,
                                                    KeyName:
                                                        'KeyName: ' +
                                                        e.instanceData.KeyName,
                                                    Architecture:
                                                        'Architecture: ' +
                                                        e.instanceData
                                                            .Architecture,
                                                    OS:
                                                        'OS: ' +
                                                        e.instanceData.OS
                                                }),
                                                e
                                            );
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (e.createWithAwsStandardAccount = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields(),
                                    fetch('/create-standard')
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            return (
                                                console.log(
                                                    'createWithAwsStandardAccount Function called: ',
                                                    e.result
                                                ),
                                                t.setState({
                                                    responseTop: e.result,
                                                    Route: 'Route: ' + e.route,
                                                    HostAddress:
                                                        'HostAddress: ' +
                                                        e.hostName,
                                                    AllocationId:
                                                        'AllocationId: ' +
                                                        e.instanceData
                                                            .AllocationId,
                                                    InstanceId:
                                                        'InstanceId: ' +
                                                        e.instanceData
                                                            .InstanceId,
                                                    KeyName:
                                                        'KeyName: ' +
                                                        e.instanceData.KeyName,
                                                    Architecture:
                                                        'Architecture: ' +
                                                        e.instanceData
                                                            .Architecture,
                                                    OS:
                                                        'OS: ' +
                                                        e.instanceData.OS
                                                }),
                                                e
                                            );
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (e.associateElasticIp = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields();
                                fetch(
                                    '/associate-elastic-ip?instanceId='
                                        .concat(
                                            'i-07109de9a6bb1ec7a',
                                            '&allocationId='
                                        )
                                        .concat('standard', '&region=')
                                        .concat('west')
                                )
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        return (
                                            console.log(
                                                'associateElasticIp Function called: ',
                                                e.result,
                                                JSON.stringify(e.query)
                                            ),
                                            t.setState({
                                                responseTop: e.result,
                                                Route: 'Route: ' + e.route,
                                                HostAddress:
                                                    'HostName: ' + e.hostName,
                                                KeyName: 'KeyName: ' + e.idFile,
                                                AllocationId:
                                                    'AllocationId: ' +
                                                    e.allocationId,
                                                InstanceId:
                                                    'InstanceId: ' +
                                                    e.instanceId,
                                                Region: 'Region: ' + e.region
                                            }),
                                            e
                                        );
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (e.copyGetStarted = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields(),
                                    fetch('/script-pusher/copy-get-started')
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            return (
                                                console.log(
                                                    'copyGetStarted Function called: ',
                                                    e.result
                                                ),
                                                t.setState({
                                                    responseTop: e.result,
                                                    Route: 'Route: ' + e.route,
                                                    GenericTrueFalseFlag:
                                                        'GetStarted Copied Over: ' +
                                                        e.scriptCopied
                                                }),
                                                e
                                            );
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (e.runGetStarted = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields(),
                                    fetch('/ssh-runner/run-get-started')
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            return (
                                                console.log(
                                                    'runGetStarted Function called: ',
                                                    e.result
                                                ),
                                                t.setState({
                                                    responseTop: e.result,
                                                    Route: 'Route: ' + e.route,
                                                    GenericTrueFalseFlag:
                                                        'GetStarted Executed: ' +
                                                        e.scriptRunning
                                                }),
                                                e
                                            );
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (e.runLubuntuSetup = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields(),
                                    fetch('/ssh-runner/run-lubuntu-setup')
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            return (
                                                console.log(
                                                    'removeKnownHost Function called: ',
                                                    e.result
                                                ),
                                                t.setState({
                                                    responseTop: e.result,
                                                    Route: 'Route: ' + e.route,
                                                    GenericTrueFalseFlag:
                                                        'LubuntuSetup Executed: ' +
                                                        e.scriptRunning
                                                }),
                                                e
                                            );
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (e.removeKnownHost = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields();
                                fetch(
                                    '/script-pusher/remove-known-host?ec2Ip='.concat(
                                        '255.255.255.255'
                                    )
                                )
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        return (
                                            console.log(
                                                'removeKnownHost Function called: ',
                                                e.result,
                                                JSON.stringify(e.query)
                                            ),
                                            t.setState({
                                                responseTop: e.result,
                                                Route: 'Route: ' + e.route,
                                                RemovedEc2Ip:
                                                    'Removed Ec2Ip: ' + e.ec2Ip
                                            }),
                                            e
                                        );
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (e.getInstanceStatus = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields();
                                fetch(
                                    '/get-instance-status?instanceId='.concat(
                                        'i-07109de9a6bb1ec7a'
                                    )
                                )
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        return (
                                            console.log(
                                                'getInstanceStatus Function called: ',
                                                e.result,
                                                JSON.stringify(e.query)
                                            ),
                                            t.setState({
                                                responseTop: e.result,
                                                Route: 'Route: ' + e.route,
                                                InstanceStatus:
                                                    'Instance Status: ' +
                                                    e.instanceStatus,
                                                InstanceId:
                                                    'Instance ID: ' +
                                                    e.instanceId
                                            }),
                                            e
                                        );
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            (e.rebootInstance = function() {
                                var t = Object(h.a)(Object(h.a)(e));
                                e.clearDataFields(),
                                    fetch('/reboot-instance')
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            return (
                                                console.log(
                                                    'rebootInstance Function called: ',
                                                    e.result
                                                ),
                                                t.setState({
                                                    responseTop: e.result,
                                                    Route: 'Route: ' + e.route,
                                                    GenericTrueFalseFlag:
                                                        'Rebooting: ' + e.reboot
                                                }),
                                                e
                                            );
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (e.state = {
                                status: 'waiting for server',
                                responseTop: 'unknown',
                                Route: '',
                                HostAddress: '',
                                AllocationId: '',
                                InstanceId: '',
                                KeyName: '',
                                Architecture: '',
                                OS: '',
                                GenericTrueFalseFlag: '',
                                RemovedEc2Ip: '',
                                InstanceStatus: '',
                                Region: ''
                            }),
                            e
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(l.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement(p, null),
                                        o.a.createElement(
                                            'main',
                                            null,
                                            o.a.createElement(
                                                'section',
                                                null,
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .queryServer
                                                    },
                                                    'Bar'
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    'state: ',
                                                    this.state.status
                                                )
                                            ),
                                            o.a.createElement('hr', null),
                                            o.a.createElement(
                                                'section',
                                                null,
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .createEducate
                                                    },
                                                    'Create with AWS Educate Account'
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .createWithAwsStandardAccount
                                                    },
                                                    'Create with AWS Standard Account'
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .associateElasticIp
                                                    },
                                                    'Associate Elastic Ip'
                                                )
                                            ),
                                            o.a.createElement('hr', null),
                                            o.a.createElement(
                                                'section',
                                                null,
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    'state: ',
                                                    this.state.responseTop
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.Route
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.HostAddress
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.AllocationId
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.InstanceId
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.KeyName
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.Architecture
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.OS
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state
                                                        .GenericTrueFalseFlag
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.RemovedEc2Ip
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.InstanceStatus
                                                ),
                                                o.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.Region
                                                )
                                            ),
                                            o.a.createElement('hr', null),
                                            o.a.createElement(
                                                'section',
                                                null,
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .copyGetStarted
                                                    },
                                                    'Copy the GetStarted Script'
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .runGetStarted
                                                    },
                                                    'Run the GetStarted Script'
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .runLubuntuSetup
                                                    },
                                                    'Run the LubuntuSetup Script'
                                                )
                                            ),
                                            o.a.createElement('hr', null),
                                            o.a.createElement(
                                                'section',
                                                null,
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .removeKnownHost
                                                    },
                                                    'Remove from KnownHost'
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .getInstanceStatus
                                                    },
                                                    'Get Instance Status'
                                                ),
                                                o.a.createElement(
                                                    'button',
                                                    {
                                                        onClick: this
                                                            .rebootInstance
                                                    },
                                                    'Reboot Instance'
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(a.Component);
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            r.a.render(
                o.a.createElement(m, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        8: function(e, t, n) {}
    },
    [[10, 2, 1]]
]);
//# sourceMappingURL=main.8cac65bc.chunk.js.map
