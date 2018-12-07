(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        11: function(e, t, a) {
            e.exports = a(19);
        },
        16: function(e, t, a) {},
        19: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                l = a.n(n),
                o = a(9),
                r = a.n(o),
                c = (a(16), a(1)),
                i = a(2),
                s = a(5),
                u = a(3),
                d = a(4),
                m = (a(7),
                (function(e) {
                    function t() {
                        return (
                            Object(c.a)(this, t),
                            Object(s.a)(
                                this,
                                Object(u.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(i.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return l.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        l.a.createElement(
                                            'header',
                                            null,
                                            l.a.createElement(
                                                'h1',
                                                null,
                                                'Final System Check'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component)),
                p = a(10),
                h = a(6),
                f = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            Object(c.a)(this, t),
                            ((a = Object(s.a)(
                                this,
                                Object(u.a)(t).call(this, e)
                            )).runScript = function(e, t) {
                                var n = Object(h.a)(Object(h.a)(a));
                                t &&
                                    fetch(e + t)
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            console.log('allData', e.allData),
                                                console.log('result', e.result),
                                                console.log('code', e.code),
                                                console.log('error', e.error);
                                            var a = '';
                                            if ('error' === e.result)
                                                a = e.error;
                                            else if ('CpuInfo' === t)
                                                for (
                                                    var l = RegExp(
                                                            'model name.*',
                                                            'g'
                                                        ),
                                                        o = l.exec(e.allData);
                                                    null !== o;

                                                )
                                                    (a += o[0] + '\n'),
                                                        console.log(
                                                            'Found '.concat(
                                                                o[0],
                                                                '.'
                                                            )
                                                        ),
                                                        (o = l.exec(e.allData));
                                            else a = e.allData;
                                            n.setState({ allData: a });
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (a.handleChange = function(e) {
                                var t = e.target.value,
                                    n = e.target.getAttribute('data-endpoint');
                                console.log('HANDLE CHANGE', t),
                                    a.setState(
                                        Object(p.a)({}, a.state, {
                                            selectedValue: t,
                                            endPointIndex: n
                                        })
                                    );
                            }),
                            (a.handleSubmit = function(e) {
                                a.setState({ allData: '' }),
                                    console.log(
                                        'A name was submitted: ',
                                        a.state
                                    ),
                                    console.log(
                                        'path: ',
                                        a.dataEndPoints[a.state.endPointIndex]
                                    ),
                                    console.log(
                                        'script: ',
                                        a.state.selectedValue
                                    ),
                                    a.runScript(
                                        a.dataEndPoints[a.state.endPointIndex],
                                        a.state.selectedValue
                                    ),
                                    e.preventDefault();
                            }),
                            (a.dataEndPoints = [
                                '/script-pusher/run-script?script=',
                                '/script-pusher/run-system-tool?script='
                            ]),
                            (a.state = {
                                allData: 'unknown',
                                selectedValue: '',
                                endPointIndex: 0
                            }),
                            a
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(i.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = l.a.createElement(
                                        'div',
                                        { className: 'container' },
                                        l.a.createElement(
                                            'form',
                                            { onSubmit: this.handleSubmit },
                                            l.a.createElement(
                                                'fieldset',
                                                null,
                                                l.a.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'elf-form-field'
                                                    },
                                                    l.a.createElement(
                                                        'legend',
                                                        null,
                                                        'Local Services'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'CpuInfo',
                                                        id: 'elf-radio-cpu',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-cpu'
                                                        },
                                                        'CpuInfo'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'VersionCheck',
                                                        id: 'elf-radio-version',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-version'
                                                        },
                                                        'Version Info'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '1',
                                                        value: 'Uptime',
                                                        id: 'elf-radio-uptime',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-cpu'
                                                        },
                                                        'Uptime'
                                                    )
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'form-group' },
                                                    l.a.createElement(
                                                        'button',
                                                        {
                                                            type: 'submit',
                                                            className:
                                                                'btn btn-primary'
                                                        },
                                                        'Run System Script'
                                                    )
                                                )
                                            )
                                        )
                                    );
                                    return l.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        l.a.createElement(
                                            'main',
                                            null,
                                            l.a.createElement(
                                                'section',
                                                null,
                                                e
                                            ),
                                            l.a.createElement(
                                                'section',
                                                null,
                                                l.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.allData
                                                )
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component),
                E = (function(e) {
                    function t() {
                        return (
                            Object(c.a)(this, t),
                            Object(s.a)(
                                this,
                                Object(u.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(i.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return l.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        l.a.createElement(m, null),
                                        l.a.createElement(
                                            'main',
                                            null,
                                            l.a.createElement(f, null)
                                        ),
                                        l.a.createElement(
                                            'footer',
                                            null,
                                            l.a.createElement(
                                                'p',
                                                null,
                                                '\xa9 by Bret Linne'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component);
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            r.a.render(
                l.a.createElement(E, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        7: function(e, t, a) {}
    },
    [[11, 2, 1]]
]);
//# sourceMappingURL=main.26d01c52.chunk.js.map
