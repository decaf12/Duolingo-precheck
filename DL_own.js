'use strict';
(self.webpackChunk = self.webpackChunk || [
]).push([[7507],
{
  35077: (e, t, n) =>{
    n.d(t, {
      Z: () =>a
    }),
    n(27378);
    const a = (e, t, n) =>e
  },
  17991: (e, t, n) =>{
    n.d(t, {
      Z: () =>d
    });
    var a = n(27378);
    const s = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      _circle: '_3suMX',
      locked: 's3gi1 _3suMX',
      unlocked: '_2dJxv _3suMX',
      complete: '_17s2H _3suMX',
      _img: '_1_R1q',
      'img-locked': '_1TPVG _1_R1q',
      'img-unlocked': '_2wR9r _1_R1q',
      'img-complete': '_3T6o2 _1_R1q',
      'index-wrap': 'qU_Uq',
      _index: '_1mTgR',
      'index-locked': '_3dDzT _1mTgR',
      'index-unlocked': '_2ZTRk _1mTgR',
      'index-complete': '_2JyFG _1mTgR'
    };
    var i = n(30033),
    r = n(67173),
    l = n(68903),
    o = n(18313);
    const c = ({
      n: e
    }) =>a.createElement('svg', {
      height: '100%',
      viewBox: '0 0 12 24',
      width: '100%',
      xmlns: 'http://www.w3.org/2000/svg'
    }, a.createElement('text', {
      dy: '25%',
      fill: 'currentColor',
      textAnchor: 'middle',
      x: '50%',
      y: '50%'
    }, e)),
    d = e=>{
      const {
        checkpointStatus: t,
        sectionIndex: n
      }
      = e,
      d = (() =>{
        switch (t) {
          case o.jF.Locked:
            return 'locked';
          case o.jF.UnlockedForCheckpoint:
          case o.jF.UnlockedForCheckpointTest:
            return 'unlocked';
          case o.jF.Complete:
            return 'complete';
          default:
            throw (0, l.RJ) (t),
            Error(`Unexpected status: ${ t }`)
        }
      }) ();
      return a.createElement('div', Object.assign({
        className: s[d]
      }, (0, i._q) (r.V.CheckpointBadge)), a.createElement('img', {
        className: s[`img-${ d }`],
        src: `https://d35aaqx5ub95lt.cloudfront.net/images/checkpoint-castle-${ d }.svg`
      }), a.createElement('div', {
        className: s['index-wrap']
      }, a.createElement('div', {
        className: s[`index-${ d }`]
      }, a.createElement(c, {
        n: n + 1
      }))))
    }
  },
  50033: (e, t, n) =>{
    n.d(t, {
      Z: () =>o
    });
    var a = n(27378),
    s = n(87539);
    var i = n(13840),
    r = n(35160),
    l = n(2945);
    const o = () =>a.createElement(s.Z, {
      className: '_2WDSF',
      modalName: r.tl.AllowMicrophone
    }, (() =>a.createElement(a.Fragment, null, a.createElement('h4', null, (0, i._i) (15137)), a.createElement('p', {
      className: '_1LyD0'
    }, (0, i._i) (6378, {
      help_url: (0, l.z9) ('207568713')
    })))))
  },
  19640: (e, t, n) =>{
    n.d(t, {
      Z: () =>o
    });
    var a = n(60042),
    s = n.n(a),
    i = n(27378),
    r = n(80254),
    l = n(57344);
    const o = ({
      className: e,
      crownSize: t = 38,
      crowns: n,
      fillVariant: a = 'dark',
      hasFinalLevel: o = !1,
      outlineStyle: c = 'none',
      totalCrowns: d
    }) =>i.createElement('div', {
      className: s() ('_34eBb', e)
    }, r.DZ(d, (e=>{
      const s = o && e + 1 === d,
      r = n >= e + 1;
      return i.createElement(l.Z, {
        crownNumber: r && !s ? e + 1 : void 0,
        crownVariant: s ? r ? 'final' : 'empty-final' : r ? 'gold' : 'empty',
        fillVariant: a,
        key: e,
        outlineVariant: r ? c : 'none',
        size: t
      })
    })))
  },
  53312: (e, t, n) =>{
    n.d(t, {
      Z: () =>l
    });
    var a = n(60042),
    s = n.n(a),
    i = n(27378),
    r = n(57344);
    const l = i.forwardRef((({
      className: e,
      outlineVariant: t = 'bold-light',
      total: n
    }, a) =>i.createElement('div', {
      className: s() ('_2uWfH', e)
    }, i.createElement(r.Z, {
      className: '_3S8sM',
      crownVariant: 'gold',
      outlineVariant: t,
      ref: a
    }), i.createElement('span', {
      className: '_3haTQ'
    }, n))))
  },
  83668: (e, t, n) =>{
    n.d(t, {
      Z: () =>x
    });
    var a = n(60042),
    s = n.n(a),
    i = n(27378),
    r = n(69635),
    l = n(83063),
    o = n(47725),
    c = n(9249),
    d = n(42659),
    u = n(60610),
    p = n(13840),
    m = n(74245),
    g = n(35160),
    h = n(71371),
    v = n(51551),
    _ = n(17251),
    f = n(20028);
    const x = ({
      className: e,
      onClick: t,
      onDismiss: n,
      onIsLoading: a,
      origin: x,
      skill: b
    }) =>{
      var E,
      S;
      const k = (0, u.tX) (),
      y = (0, u.Fx) (d.Mb),
      w = (0, u.Fx) (d.np),
      C = (0, u.Fx) (d.__),
      N = (0, v.cy) (C),
      T = (0, r.TH) (),
      [
        R,
        I
      ] = i.useState(!1),
      L = e=>{
        I(e),
        null == a || a(e)
      };
      i.useEffect((() =>{
        var e,
        t,
        n,
        a;
        e = void 0,
        t = void 0,
        a = function * () {
          N || (L(!0), yield k(c.ke()), L(!1))
        },
        new ((n = void 0) || (n = Promise)) ((function (s, i) {
          function r(e) {
            try {
              o(a.next(e))
            } catch (e) {
              i(e)
            }
          }
          function l(e) {
            try {
              o(a.throw(e))
            } catch (e) {
              i(e)
            }
          }
          function o(e) {
            var t;
            e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
              e(t)
            }))).then(r, l)
          }
          o((a = a.apply(e, t || [
          ])).next())
        }))
      }), [
      ]);
      const F = `/skill/${ (0, m.D3) (b.learningLanguage) }/${ b.urlName }/${ b.finishedLessons + 1 }`;
      return i.createElement(o.Z, {
        'aria-disabled': R,
        autoFocus: !0,
        className: s() ((0, l.y) ({
          variant: 'solid'
        }), e),
        href: F,
        locationState: T.pathname === F ? {
          sessionRetry: (null !== (S = null === (E = T.state) || void 0 === E ? void 0 : E.sessionRetry) && void 0 !== S ? S : 0) + 1
        }
         : void 0,
        onClick: e=>{
          if ((0, f.pN) (w) && (0, _.L0) (b)) null == e || e.preventDefault(),
          n(),
          k({
            options: {
              name: g.tl.TrialWall
            },
            type: 'TOGGLE_MODAL'
          });
           else if (w.hasPlus || (0, f.d1) (w) || (0, p.J9) (y.ipCountry)) n(),
          null == t || t(),
          h.Z.start('lesson_start');
           else {
            if (!N) throw Error('Couldn\'t calculate lingots price for final level attempt because no shop item was found.');
            null == e || e.preventDefault(),
            null == t || t(),
            k({
              isUhmManaged: !1,
              keepFullscreenModal: !0,
              options: {
                lessonIndex: b.finishedLessons,
                lingotsPrice: null == N ? void 0 : N.price,
                name: 'FINAL_LEVEL_WITH_LINGOTS',
                origin: x,
                skillUrl: F
              },
              type: 'TOGGLE_DRAWER'
            })
          }
        }
      }, (0, p._i) (20772))
    }
  },
  39955: (e, t, n) =>{
    n.d(t, {
      Z: () =>F
    });
    var a = n(27378),
    s = n(31542),
    i = n(69635),
    r = n(80254),
    l = n(25200),
    o = n(29531),
    c = n(44629),
    d = n(60042),
    u = n.n(d),
    p = n(52761),
    m = n(42659);
    const g = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      popover: '_1ihC0',
      'popover-inner': '_2_c8s',
      'popover-stem': '_3JVfl',
      'popover-table': '_2rZQ5',
      _cell: '_2Gskp',
      row: '_37i3K',
      'header-cell': '_1rooe _2Gskp',
      'data-cell': '_3xnDt _2Gskp',
      'data-cell-with-transliteration-chrome': '_1sxZw',
      'data-cell-hidden': 'VfmZ1 _3xnDt _2Gskp',
      gender: '_1qtHB',
      faded: '_12fxT',
      more: '_2cC6q _9mYhl _2jNpf'
    };
    var h = n(88528),
    v = n(30033),
    _ = n(67173),
    f = n(60610),
    x = n(13840),
    b = n(34704),
    E = n(74597);
    const S = {
      f: (0, x._i) (21399),
      m: (0, x._i) (3084),
      nt: (0, x._i) (19645)
    },
    k = a.forwardRef((({
      data: e,
      modifiers: t,
      onRequestClose: n,
      popperProps: s,
      showGender: i,
      stemContainerRef: r
    }, o) =>{
      var c;
      const [d,
      k] = a.useState(!1),
      y = (0, f.Fx) (m.Rv),
      w = (0, f.Fx) (m.iH),
      C = (0, f.Fx) ((e=>e.browserSettings.transliterationsSettings)),
      N = i && (null == t ? void 0 : t.gender) && S[t.gender] && 'n' === t.POS && !(null === (c = e.headers) || void 0 === c ? void 0 : c.length) ? S[t.gender] : null,
      T = e.rows[0].reduce(((e, t) =>{
        var n;
        return e + (null !== (n = t.colspan) && void 0 !== n ? n : 1)
      }), 0),
      R = a.createElement('table', {
        className: g['popover-table']
      }, a.createElement('thead', null, a.createElement('tr', {
        className: g.row
      }, e.headers && e.separable ? a.createElement('th', {
        className: g['header-cell'],
        colSpan: e.headers.length
      }, e.headers.join('')) : e.headers ? e.headers.map(((e, t) =>a.createElement('th', {
        className: g['header-cell'],
        key: t
      }, e))) : null)), a.createElement('tbody', null, e.rows.map(((e, t) =>a.createElement('tr', {
        className: g.row,
        key: t
      }, e.map(((e, n) =>{
        const s = e.hint ? (i = e.hint, /\(/.exec(i) ? i.replace(/\(/g, '%%%(').replace(/\)/g, ')%%%').split('%%%').map((e=>e.startsWith('(') ? [
          ...e
        ].map(((e, t) =>a.createElement('span', {
          className: g.faded,
          key: t
        }, e))) : [
          ...e
        ])).flat(1) : i) : null;
        var i;
        const r = e.hintTransliteration && s && (0, b.dN) (w, y, C, !0),
        o = !d && t >= 3;
        return a.createElement('td', {
          className: u() (g['data-cell' + (o ? '-hidden' : '')], r && !o && E.Z.chrome ? g['data-cell-with-transliteration-chrome'] : null),
          colSpan: e.colspan,
          key: n
        }, e.hintTransliteration && r && !o && s ? a.createElement(l.Z, {
          highlightStyle: 'normal',
          text: [
            ...s
          ],
          transliteration: e.hintTransliteration
        }) : s)
      }))))), N ? a.createElement('tr', {
        className: g.row
      }, a.createElement('td', {
        className: u() (g['data-cell'], g.gender),
        colSpan: T
      }, (0, x._i) (9004), ' ', a.createElement('strong', null, N))) : null, !d && e.rows.length > 3 ? a.createElement('tr', {
        className: g.row
      }, a.createElement('td', {
        className: g['data-cell'],
        colSpan: T,
        onMouseEnter: () =>k(!0)
      }, a.createElement('span', {
        className: g.more
      }))) : null));
      return a.createElement(p.Z, Object.assign({
        className: g.popover,
        innerClassName: g['popover-inner'],
        onRequestClose: n,
        popperProps: s,
        ref: o,
        stemClassName: g['popover-stem'],
        stemContainerRef: r,
        zIndex: parseInt(h.Z['z-index-popover'], 10)
      }, (0, v._q) (_.V.HintPopover)), R)
    })),
    y = a.forwardRef(((e, t) =>a.createElement(p.Z, Object.assign({
      className: '_27RdR',
      innerClassName: 'Rt9dr'
    }, (0, v._q) (_.V.IntroPopover), {
      ref: t,
      stemClassName: '_3i_Xp',
      zIndex: parseInt(h.Z['z-index-popover'], 10)
    }, e), (0, x._i) (7276))));
    var w = n(83936);
    const C = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'non-space-run': '_13doy',
      'non-space-run-highlighted-normal': '_1hdGS _13doy',
      'non-space-run-highlighted-dictionary': '_1aMpd _13doy',
      'non-space-run-highlighted-new-word': '_1bkpY _13doy',
      'non-space-run-highlighted-none': '_3Lg1h _13doy'
    };
    var N = n(13942),
    T = n(87477),
    R = n(785),
    I = n(30326);
    const L = ({
      highlightStyle: e,
      hoverIntroToken: t,
      language: n,
      level: i,
      onPopoverClose: l,
      onPopoverOpen: d,
      onTryPlayTts: u,
      playTtsOnHover: p,
      showGender: g,
      tabIndex: x,
      token: b
    }) =>{
      const E = (0, f.tX) (),
      S = (0, f.Fx) (m.Fp),
      w = a.useRef(r.EL('session/HintSentence')).current,
      T = a.useRef(),
      L = parseFloat(h.Z['margin-popover']) + parseFloat(h.Z['margin-popover-text']),
      F = (0, o.f) ({
        modifiers: [
          {
            enabled: !1,
            name: 'flip'
          },
          {
            name: 'offset',
            options: {
              offset: [
                0,
                L
              ]
            }
          }
        ]
      }),
      z = () =>{
        window.clearTimeout(T.current),
        T.current = void 0,
        S === w && (E({
          id: void 0,
          type: 'SET_POPOVER'
        }), l())
      },
      D = () =>{
        z()
      },
      j = () =>{
        T.current || (T.current = window.setTimeout((() =>{
          const t = window.performance.now();
          (0, R.j) ('show_hint', {
            is_new_word: 'new-word' === e,
            level_index: i
          }),
          E({
            token: b,
            type: 'SHOW_HINT'
          }),
          E({
            id: w,
            type: 'SET_POPOVER'
          }),
          d();
          let a = b.tts;
          a || (a = (0, I.l) (n, b.value)),
          p && a && (null == u || u(), (0, N.a1) (a, {
            requestedAt: t,
            text: b.value
          }, {
            overlay: !0
          }))
        }), 250))
      };
      return a.useEffect((() =>{
        'this' === t && E({
          id: w,
          type: 'SET_POPOVER'
        })
      }), [
        t,
        w
      ]),
      a.createElement(c.Z, Object.assign({
      }, (0, v._q) (_.V.HintToken), {
        className: C[`non-space-run-highlighted-${ null != e ? e : 'none' }`],
        customOffset: L,
        isOpen: S === w,
        onClose: () =>{
          'none' === t && z()
        },
        onOpen: () =>{
          j()
        },
        onToggle: S === w ? z : j,
        popoverState: F.props.state,
        ref: F.setElementRef,
        tabIndex: x
      }), b.value, S === w ? (0, s.createPortal) ('this' === t ? a.createElement(y, {
        onRequestClose: D,
        popperProps: F.props,
        ref: F.setPopoverRef,
        stemContainerRef: F.setArrowRef
      }) : a.createElement(k, {
        data: b.hintTable,
        modifiers: b.modifiers,
        onRequestClose: D,
        popperProps: F.props,
        ref: F.setPopoverRef,
        showGender: g,
        stemContainerRef: F.setArrowRef
      }), document.getElementById('overlays')) : null)
    },
    F = ({
      disableTTS: e = !1,
      headingTag: t,
      highlightStyle: n,
      highlights: s = [
      ],
      inTabOrder: r = !0,
      isForward: o,
      language: c,
      onTryPlayTts: d,
      showHoverIntro: u,
      tokens: p,
      transliteration: g
    }) =>{
      var h;
      const x = (0, i.TH) (),
      E = (0, f.Fx) (m.lA),
      S = (0, f.Fx) ((e=>(0, w.RB) (e, {
        location: x
      }))),
      k = !(null === (h = E.sessionParams) || void 0 === h ? void 0 : h.isFinalLevel),
      y = (0, f.Fx) (m.Rv),
      N = (0, f.Fx) ((e=>e.browserSettings.transliterationsSettings)),
      [
        R,
        I
      ] = a.useState(!1),
      F = a.useMemo((() =>u && !R && E.status !== T.cS.Sliding ? p.findIndex((e=>e.hintTable)) : - 1), [
        R,
        E.status,
        u,
        p
      ]),
      z = null != t ? t : 'span',
      D = (t, i) =>k && (e=>void 0 !== e.hintTable && e.hintTable.rows.length > 0) (t) ? a.createElement(L, {
        highlightStyle: s.includes(i) ? n : void 0,
        hoverIntroToken: i === F ? 'this' : F > - 1 ? 'other' : 'none',
        key: i,
        language: c,
        level: null == S ? void 0 : S.finishedLevels,
        onPopoverClose: () =>(e=>{
          F === e && I(!0)
        }) (i),
        onPopoverOpen: () =>(e=>{
          F > - 1 && F !== e && I(!0)
        }) (i),
        onTryPlayTts: d,
        playTtsOnHover: !e && o,
        showGender: o,
        tabIndex: r ? 0 : - 1,
        token: t
      }) : a.createElement('span', Object.assign({
      }, (0, v._q) (_.V.HintToken), {
        className: t.value.trim().length ? C['non-space-run'] : void 0,
        key: i
      }), t.value);
      return a.createElement(z, null, g && (0, b.dN) (c, y, N) ? a.createElement(l.Z, {
        highlightStyle: n,
        highlights: s,
        text: p.map(D),
        transliteration: g
      }) : p.map(D))
    }
  },
  89267: (e, t, n) =>{
    n.r(t),
    n.d(t, {
    default:
      () =>c
    });
    var a = n(27378),
    s = n(83936),
    i = n(68903),
    r = n(60610),
    l = n(88868),
    o = n(785);
    const c = ({
      children: e,
      history: t
    }) =>{
      const n = (0, r.Fx) (s.A5),
      [
        c
      ] = a.useState((() =>{
        switch (n) {
          case 'ineligible':
          case 'eligible':
          case 'eligibleFreeTrial':
          case void 0:
            return !1;
          case 'alreadyHasPlus':
            return !0;
          default:
            return (0, i.RJ) (n),
            !1
        }
      }));
      return a.useEffect((() =>{
        c || ((0, o.mh) (window.location.href, l.B6, 'soft'), t.replace(l.B6))
      }), [
      ]),
      c ? a.createElement(a.Fragment, null, e) : null
    }
  },
  27268: (e, t, n) =>{
    n.r(t),
    n.d(t, {
    default:
      () =>ir
    });
    var a = n(60042),
    s = n.n(a),
    i = n(27378),
    r = n(13325),
    l = n(86441),
    o = n(58382),
    c = n(50033),
    d = n(50065),
    u = n(80254),
    p = n(83063),
    m = n(87539),
    g = n(42659);
    var h = n(63649),
    v = n(74923),
    _ = n(13840),
    f = n(74245),
    x = n(35160),
    b = n(51158),
    E = n(785),
    S = n(11811);
    const k = {
      [
        h.Vi.ChallengeReports.BAD_AUDIO
      ]: 2097,
      [
        h.Vi.ChallengeReports.BAD_HINTS
      ]: 11680,
      [
        h.Vi.ChallengeReports.BAD_IMAGE
      ]: 9827,
      [
        h.Vi.ChallengeReports.BAD_OPTION
      ]: 14416,
      [
        h.Vi.ChallengeReports.BAD_PROMPT
      ]: 3070,
      [
        h.Vi.ChallengeReports.CHARACTER_DISPLAY
      ]: 23355,
      [
        h.Vi.ChallengeReports.MISSING_AUDIO
      ]: 16022,
      [
        h.Vi.ChallengeReports.MISSING_HINTS
      ]: 3171,
      [
        h.Vi.ChallengeReports.MISSING_IMAGE
      ]: 6243,
      [
        h.Vi.ChallengeReports.NOT_ACCEPTED
      ]: 14239,
      [
        h.Vi.ChallengeReports.OFFENSIVE_OPTION
      ]: 1812,
      [
        h.Vi.ChallengeReports.OTHER_ISSUE
      ]: 9011,
      [
        h.Vi.ChallengeReports.WRONG_ACCEPTED
      ]: 17798
    },
    y = ({
      challenge: e,
      checked: t,
      learningLanguage: n,
      name: a,
      onChange: s
    }) =>{
      const r = e.sourceLanguage || n;
      return i.createElement('label', {
        className: 'IPDFq'
      }, i.createElement('input', {
        checked: t,
        onChange: e=>s(e.target.checked),
        type: 'checkbox'
      }), i.createElement('span', {
        className: '_2_XU0'
      }, (0, _._i) (k[a], {
        language_name: (0, f.vY) (r)
      })))
    };
    class w extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          fields: u.Xc(h.Vi.ChallengeReports, (() =>!1))
        }
      }
      render() {
        const {
          learningLanguage: e,
          modalOptions: {
            challenge: t,
            onReport: n,
            skillId: a
          },
          onDismiss: s,
          skillTreeId: r
        }
        = this.props,
        {
          fields: l
        }
        = this.state,
        o = u.XP(l).filter((e=>l[e]));
        return i.createElement('div', {
          className: '_2D1-v'
        }, (e=>(0, v.w6) ({
          challenge: e
        }).filter((t=>{
          var n,
          a;
          return t === h.Vi.ChallengeReports.NOT_ACCEPTED ? !(null === (n = e.gradingResult) || void 0 === n ? void 0 : n.correct) : t === h.Vi.ChallengeReports.WRONG_ACCEPTED ? null === (a = e.gradingResult) || void 0 === a ? void 0 : a.correct : t === h.Vi.ChallengeReports.BAD_AUDIO || t === h.Vi.ChallengeReports.MISSING_AUDIO ? (e=>{
            var t,
            n,
            a;
            switch (e.type) {
              case S.Sm.Assist:
                return e.options.some((e=>e.tts));
              case S.Sm.CharacterIntro:
              case S.Sm.Listen:
              case S.Sm.ListenComplete:
              case S.Sm.ListenComprehension:
              case S.Sm.SelectTranscription:
              case S.Sm.Speak:
              case S.Sm.Translate:
                return e.tts;
              case S.Sm.CharacterMatch:
                return null === (t = e.pairs) || void 0 === t ? void 0 : t.some((e=>e.tts));
              case S.Sm.CharacterSelect:
              case S.Sm.Select:
              case S.Sm.SelectPronunciation:
              case S.Sm.TapComplete:
              case S.Sm.TapDescribe:
                return null === (n = e.choices) || void 0 === n ? void 0 : n[0].tts;
              case S.Sm.Match:
                return null === (a = e.pairs) || void 0 === a ? void 0 : a.some((e=>e.tts));
              default:
                return !1
            }
          }) (e) : t === h.Vi.ChallengeReports.BAD_HINTS || t === h.Vi.ChallengeReports.MISSING_HINTS ? (e=>{
            var t,
            n,
            a,
            s,
            i,
            r,
            l,
            o,
            c,
            d,
            u,
            p,
            m;
            switch (e.type) {
              case S.Sm.Dialogue:
                return null === (s = null === (a = null === (n = null === (t = e.dialogue) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.hintTokens) || void 0 === a ? void 0 : a[0]) || void 0 === s ? void 0 : s.hintTable;
              case S.Sm.Definition:
                return null === (r = null === (i = e.displayTokens) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r.hintToken;
              case S.Sm.GapFill:
              case S.Sm.TapComplete:
              case S.Sm.Translate:
              case S.Sm.CompleteReverseTranslation:
                return null === (o = null === (l = e.tokens) || void 0 === l ? void 0 : l[0]) || void 0 === o ? void 0 : o.hintTable;
              case S.Sm.ListenComprehension:
                return null === (d = null === (c = e.questionTokens) || void 0 === c ? void 0 : c[0]) || void 0 === d ? void 0 : d.hintTable;
              case S.Sm.ReadComprehension:
                return null !== (p = null === (u = e.questionTokens) || void 0 === u ? void 0 : u[0].hintTable) && void 0 !== p ? p : null === (m = e.passageTokens) || void 0 === m ? void 0 : m[0].hintTable;
              default:
                return !1
            }
          }) (e) : t === h.Vi.ChallengeReports.BAD_IMAGE || t === h.Vi.ChallengeReports.MISSING_IMAGE ? (e=>{
            switch (e.type) {
              case S.Sm.FreeResponse:
              case S.Sm.TapComplete:
              case S.Sm.TapDescribe:
                return e.image;
              case S.Sm.Name:
                return e.images;
              case S.Sm.Select:
                return e.choices[0] && (e.choices[0].image || e.choices[0].svg);
              default:
                return !1
            }
          }) (e) : ((0, b.Kp) (`Conditional Report Type "${ t }" is not mapped to criteria.`), !1)
        }))) (t).map(((n, a) =>i.createElement(y, {
          challenge: t,
          checked: l[n],
          key: a,
          learningLanguage: e,
          name: n,
          onChange: e=>this.setState((t=>({
            fields: Object.assign(Object.assign({
            }, t.fields), {
              [
                n
              ]: e
            })
          })))
        }))), (0, v.uZ) ({
          challenge: t
        }).map(((n, a) =>i.createElement(y, {
          challenge: t,
          checked: l[n],
          key: a,
          learningLanguage: e,
          name: n,
          onChange: e=>this.setState((t=>({
            fields: Object.assign(Object.assign({
            }, t.fields), {
              [
                n
              ]: e
            })
          })))
        }))), i.createElement(p.Z, {
          className: '_36TIF',
          disabled: !o.length,
          onClick: () =>{
            o.forEach((e=>(0, E.j) ('submit suggestion/feedback', {
              challenge_id: t.id,
              report_type: e,
              skill_id: a,
              skill_tree_id: r
            }))),
            h.Vi.reportSentence(t, o.sort()),
            null == n || n(),
            s()
          },
          variant: 'solid'
        }, (0, _._i) (19532)))
      }
    }
    const C = (0, d.$j) ((e=>{
      var t;
      return {
        learningLanguage: (0, g.iH) (e),
        skillTreeId: null === (t = (0, g.is) (e).trackingProperties) || void 0 === t ? void 0 : t.skill_tree_id
      }
    })) ((({
      learningLanguage: e,
      skillTreeId: t
    }) =>i.createElement(m.Z, {
      modalName: x.tl.ReportSentence
    }, (({
      modalOptions: n,
      onDismiss: a
    }) =>i.createElement(w, {
      learningLanguage: e,
      modalOptions: n,
      onDismiss: a,
      skillTreeId: t
    })))));
    var N = n(38891),
    T = n(83537),
    R = n(29531),
    I = n(52761);
    const L = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      modal: '_18xh_',
      header: '_1LruX',
      instructions: 'C21s9',
      'challenge-cards': '_3MetK',
      card: '_2TVVG',
      correct: '_32YlO',
      'icon-container': '_2Kxv6',
      'icon-correct': '_4OA9e _176_d _2jNpf',
      incorrect: 'lk2xf',
      'icon-incorrect': '_2bLr_ _3Hb2o _2jNpf',
      'card-header': '_3WHhh',
      'card-prompt': 'UWDnp',
      image: '_1hqP8',
      speaker: '_1lITn',
      popover: 'ZMDu5',
      wrong: '_8pVG4',
      missing: '_1NT2B',
      'response-label': '_2d7Ae',
      'solution-label': '_2h2Hg',
      'response-text': '_21MzE',
      'solution-container': '_1MehU'
    };
    var F = n(88528),
    z = n(95332),
    D = n(37590),
    j = n(68903),
    Z = n(60610);
    const P = e=>i.createElement('div', null, e.correctSolutions.map(((e, t) =>i.createElement('div', {
      key: t
    }, e)))),
    O = ({
      challenge: e,
      learningLanguage: t,
      onPopoverClose: n,
      onPopoverToggle: a,
      showPopover: r
    }) =>{
      var l,
      o;
      const c = e.skipped ? (0, _._i) (21645) : '',
      {
        correctSolution: d,
        header: p,
        prompt: m,
        userResponse: g
      }
      = (() =>{
        var n,
        a,
        s,
        r,
        l,
        o,
        d,
        p,
        m,
        g,
        h,
        v,
        x,
        b,
        E,
        k,
        y,
        w,
        C,
        T,
        R,
        I,
        F,
        Z,
        O,
        A,
        M,
        H,
        B,
        U,
        G,
        q,
        W,
        V,
        $,
        X;
        switch (e.type) {
          case S.Sm.Assist:
            return {
              correctSolution: e.options[e.correctIndex].text,
              header: (0, _._i) (19598, {
                word: e.prompt
              }),
              prompt: '',
              userResponse: c || e.options[null === (n = e.gradingResult) || void 0 === n ? void 0 : n.guess].text
            };
          case S.Sm.CharacterIntro:
            return {
              correctSolution: e.choices[e.correctIndex],
              header: (0, _._i) (15437),
              prompt: i.createElement(N.Z, {
                audio: e.tts,
                autoplay: !1,
                className: L.speaker,
                type: 'small',
                useKeyboardShortcut: !1
              }),
              userResponse: c || e.choices[null === (a = e.gradingResult) || void 0 === a ? void 0 : a.guess]
            };
          case S.Sm.CharacterMatch:
            {
              const t = e.pairs.map((e=>`${ e.character }⟷${ e.transliteration }`)).join(', ');
              return {
                correctSolution: t,
                header: (0, _._i) (20703),
                prompt: (0, z.r1) (e) [0],
                userResponse: c || t
              }
            }
          case S.Sm.CharacterPuzzle:
            return {
              correctSolution: e.correctSolutions[0],
              header: 'Build the character:',
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (s = e.gradingResult) || void 0 === s ? void 0 : s.guess)
            };
          case S.Sm.CharacterSelect:
            return {
              correctSolution: e.choices[e.correctIndex].character,
              header: (0, _._i) (1202),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || e.choices[null === (r = e.gradingResult) || void 0 === r ? void 0 : r.guess].character
            };
          case S.Sm.CharacterTrace:
            return {
              correctSolution: e.prompt,
              header: (0, _._i) (26295),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (l = e.gradingResult) || void 0 === l ? void 0 : l.correct) ? e.prompt : (0, _._i) (21645)
            };
          case S.Sm.CompleteReverseTranslation:
            return {
              correctSolution: e.displayTokens.map((e=>e.text)).join(''),
              header: (0, _._i) (21271),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (o = e.gradingResult) || void 0 === o ? void 0 : o.guess)
            };
          case S.Sm.Definition:
            {
              const [t,
              n] = (0, z.r1) (e);
              return {
                correctSolution: e.choices[e.correctIndex],
                header: (0, _._i) (24620),
                prompt: i.createElement('div', null, i.createElement('p', null, t), i.createElement('p', null, n)),
                userResponse: c || e.choices[null === (d = e.gradingResult) || void 0 === d ? void 0 : d.guess]
              }
            }
          case S.Sm.Dialogue:
            return {
              correctSolution: e.choices[e.correctIndex],
              header: e.promptTokens ? (0, _._i) (24620) : (0, _._i) (9368),
              prompt: i.createElement('div', null, (0, z.r1) (e).map(((e, t) =>i.createElement('div', {
                key: t
              }, e)))),
              userResponse: c || e.choices[null === (p = e.gradingResult) || void 0 === p ? void 0 : p.guess]
            };
          case S.Sm.Form:
            return {
              correctSolution: e.options[e.correctIndex].text,
              header: (0, _._i) (12908),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || e.options[null === (m = e.gradingResult) || void 0 === m ? void 0 : m.guess].text
            };
          case S.Sm.FreeResponse:
            return {
              correctSolution: '',
              header: (0, _._i) (17610, {
                language_name: (0, f.vY) (t)
              }),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (g = e.gradingResult) || void 0 === g ? void 0 : g.guess)
            };
          case S.Sm.GapFill:
            {
              const {
                displayTokens: t
              }
              = e;
              return {
                correctSolution: e.choices[e.correctIndex],
                header: (0, _._i) (18142, {
                  num_blanks: (0, z.j$) (t).filter((e=>e.isBlank)).length
                }),
                prompt: (0, z.r1) (e) [0],
                userResponse: c || (null === (h = e.gradingResult) || void 0 === h ? void 0 : h.guess)
              }
            }
          case S.Sm.Judge:
            {
              const t = [
                null === (v = e.gradingResult) || void 0 === v ? void 0 : v.guess
              ],
              n = u.e5(t, e.correctIndices),
              a = u.e5(e.correctIndices, t);
              return {
                correctSolution: null !== (b = null === (x = e.gradingResult) || void 0 === x ? void 0 : x.closestSolution) && void 0 !== b ? b : i.createElement('div', null, e.correctIndices.map(((t, n) =>i.createElement('div', {
                  className: a.includes(t) ? L.missing : void 0,
                  key: n
                }, e.choices[t])))),
                header: (0, _._i) (12217),
                prompt: (0, z.r1) (e) [0],
                userResponse: c || i.createElement('div', null, t.map((t=>i.createElement('div', {
                  className: n.includes(t) ? L.wrong : void 0,
                  key: t
                }, e.choices[t]))))
              }
            }
          case S.Sm.Listen:
            return {
              correctSolution: e.prompt,
              header: (0, _._i) (11024),
              prompt: i.createElement(N.Z, {
                audio: e.tts,
                autoplay: !1,
                className: L.speaker,
                type: 'small',
                useKeyboardShortcut: !1
              }),
              userResponse: c || (null === (E = e.gradingResult) || void 0 === E ? void 0 : E.guess)
            };
          case S.Sm.ListenComplete:
            return {
              correctSolution: e.prompt,
              header: (0, _._i) (3351),
              prompt: i.createElement(N.Z, {
                audio: e.tts,
                autoplay: !1,
                className: L.speaker,
                type: 'small',
                useKeyboardShortcut: !1
              }),
              userResponse: c || (null === (k = e.gradingResult) || void 0 === k ? void 0 : k.guess)
            };
          case S.Sm.ListenComprehension:
            {
              const [,
              t] = (0, z.r1) (e);
              return {
                correctSolution: e.choices[e.correctIndex],
                header: (0, _._i) (8769),
                prompt: t,
                userResponse: c || e.choices[null === (y = e.gradingResult) || void 0 === y ? void 0 : y.guess]
              }
            }
          case S.Sm.ListenTap:
            return {
              correctSolution: e.prompt,
              header: (0, _._i) (19092),
              prompt: i.createElement(N.Z, {
                audio: e.tts,
                autoplay: !1,
                className: L.speaker,
                type: 'small',
                useKeyboardShortcut: !1
              }),
              userResponse: c || (null === (w = e.gradingResult) || void 0 === w ? void 0 : w.guess)
            };
          case S.Sm.Match:
            {
              const t = e.pairs.map((e=>`${ e.learningToken }⟷${ e.fromToken }`)).join(', ');
              return {
                correctSolution: t,
                header: (0, _._i) (20703),
                prompt: (0, z.r1) (e) [0],
                userResponse: c || t
              }
            }
          case S.Sm.Name:
            return {
              correctSolution: P(e),
              header: (0, _._i) (14739, {
                language_name: (0, f.vY) (t)
              }),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (C = e.gradingResult) || void 0 === C ? void 0 : C.guess.join((null === (T = e.gradingResult) || void 0 === T ? void 0 : T.guess[0].endsWith('\'')) ? '' : ' '))
            };
          case S.Sm.ReadComprehension:
            {
              const [,
              t] = (0, z.r1) (e);
              return {
                correctSolution: e.choices[e.correctIndex],
                header: (0, _._i) (24620),
                prompt: t,
                userResponse: c || e.choices[null === (R = e.gradingResult) || void 0 === R ? void 0 : R.guess]
              }
            }
          case S.Sm.Select:
            return {
              correctSolution: e.choices[e.correctIndex].phrase,
              header: (0, _._i) (18721, {
                hint: e.prompt
              }),
              prompt: '',
              userResponse: c || e.choices[null === (I = e.gradingResult) || void 0 === I ? void 0 : I.guess].phrase
            };
          case S.Sm.SelectPronunciation:
            return {
              correctSolution: e.choices[e.correctIndex].text,
              header: (0, _._i) (21070),
              prompt: i.createElement(N.Z, {
                audio: e.choices[e.correctIndex].tts,
                autoplay: !1,
                className: L.speaker,
                type: 'small',
                useKeyboardShortcut: !1
              }),
              userResponse: c || e.choices[null === (F = e.gradingResult) || void 0 === F ? void 0 : F.guess].text
            };
          case S.Sm.SelectTranscription:
            return {
              correctSolution: e.choices[e.correctIndex].text,
              header: (0, _._i) (21070),
              prompt: i.createElement(N.Z, {
                audio: e.tts,
                autoplay: !1,
                className: L.speaker,
                type: 'small',
                useKeyboardShortcut: !1
              }),
              userResponse: c || e.choices[null === (Z = e.gradingResult) || void 0 === Z ? void 0 : Z.guess].text
            };
          case S.Sm.Speak:
            return {
              correctSolution: e.prompt,
              header: (0, _._i) (11803),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (O = e.gradingResult) || void 0 === O ? void 0 : O.correct) ? e.prompt : (0, _._i) (21645)
            };
          case S.Sm.TapCloze:
            return {
              correctSolution: (0, D.Ub) (e).join(''),
              header: (0, _._i) (6098),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (A = e.gradingResult) || void 0 === A ? void 0 : A.guess)
            };
          case S.Sm.TapClozeTable:
            return {
              correctSolution: (0, D.Ub) (e).join(''),
              header: (0, _._i) (10718),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (M = e.gradingResult) || void 0 === M ? void 0 : M.guess)
            };
          case S.Sm.TapComplete:
            return {
              correctSolution: (null === (H = e.gradingResult) || void 0 === H ? void 0 : H.correct) ? null === (B = e.gradingResult) || void 0 === B ? void 0 : B.guess : e.displayTokens.map((e=>e.text)).join(''),
              header: (0, _._i) (18142, {
                num_blanks: e.displayTokens.filter((e=>e.isBlank)).length
              }),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (U = e.gradingResult) || void 0 === U ? void 0 : U.guess)
            };
          case S.Sm.TapCompleteTable:
            return {
              correctSolution: (0, D.Ub) (e).join(''),
              header: (0, _._i) (2082),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (G = e.gradingResult) || void 0 === G ? void 0 : G.guess)
            };
          case S.Sm.TapDescribe:
            {
              const {
                choices: t,
                correctIndices: n,
                image: {
                  svg: a
                }
              }
              = e,
              s = (0, z.rF) (e);
              return {
                correctSolution: n.map((e=>t[e].text)).join(s),
                header: (0, _._i) (6204),
                prompt: i.createElement('div', {
                  className: L.image,
                  style: {
                    backgroundImage: `url(${ a })`
                  }
                }),
                userResponse: c || (null === (q = e.gradingResult) || void 0 === q ? void 0 : q.guess)
              }
            }
          case S.Sm.Translate:
            return {
              correctSolution: P(e),
              header: (0, _._i) (14739, {
                language_name: (0, f.vY) (e.targetLanguage)
              }),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (W = e.gradingResult) || void 0 === W ? void 0 : W.guess)
            };
          case S.Sm.TypeCloze:
            return {
              correctSolution: (0, D.Ub) (e).join(''),
              header: (0, _._i) (16472),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (V = e.gradingResult) || void 0 === V ? void 0 : V.guess)
            };
          case S.Sm.TypeClozeTable:
            return {
              correctSolution: (0, D.Ub) (e).join(''),
              header: (0, _._i) (7721),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === ($ = e.gradingResult) || void 0 === $ ? void 0 : $.guess)
            };
          case S.Sm.TypeCompleteTable:
            return {
              correctSolution: (0, D.Ub) (e).join(''),
              header: (0, _._i) (2082),
              prompt: (0, z.r1) (e) [0],
              userResponse: c || (null === (X = e.gradingResult) || void 0 === X ? void 0 : X.guess)
            };
          default:
            throw (0, j.RJ) (e),
            Error(`Unexpected challenge type: ${ e.type }`)
        }
      }) (),
      h = (0, R.f) ();
      return i.createElement(i.Fragment, null, i.createElement(T.Z, {
        className: s() (L.card, (null === (l = e.gradingResult) || void 0 === l ? void 0 : l.correct) ? L.correct : L.incorrect),
        onToggle: a
      }, i.createElement('div', {
        className: L['card-header']
      }, p), i.createElement('div', {
        className: L['icon-container']
      }, i.createElement('div', {
        className: L[`icon-${ (null === (o = e.gradingResult) || void 0 === o ? void 0 : o.correct) ? '' : 'in' }correct`]
      })), i.createElement('div', {
        className: L['card-prompt'],
        ref: h.setElementRef
      }, m)), r ? i.createElement(I.Z, {
        innerClassName: L.popover,
        onRequestClose: n,
        popperProps: h.props,
        ref: h.setPopoverRef,
        stemContainerRef: h.setArrowRef,
        zIndex: parseInt(F.Z['z-index-popover'], 10)
      }, i.createElement('div', {
        className: L.userResponseContainer
      }, i.createElement('div', {
        className: L['response-label']
      }, (0, _._i) (9972)), i.createElement('div', {
        className: L['response-text']
      }, g)), i.createElement('div', {
        className: L['solution-container']
      }, i.createElement('div', {
        className: L['response-label']
      }, (0, _._i) (19178)), i.createElement('div', {
        className: L['response-text']
      }, d))) : null)
    },
    A = () =>{
      const e = (0, Z.Fx) (g.iH),
      t = (0, Z.Fx) (g.is),
      [
        n,
        a
      ] = i.useState();
      return i.createElement('div', {
        className: L.modal
      }, i.createElement('div', {
        className: L.header
      }, (0, _._i) (18187)), i.createElement('div', {
        className: L.instructions
      }, (0, _._i) (17858)), i.createElement('div', {
        className: L['challenge-cards']
      }, (t.challenges || [
      ]).filter((e=>{
        var t;
        return void 0 !== (null === (t = e.gradingResult) || void 0 === t ? void 0 : t.correct)
      })).map(((t, s) =>i.createElement(O, {
        challenge: t,
        key: s,
        learningLanguage: e,
        onPopoverClose: () =>a(void 0),
        onPopoverToggle: () =>a(n === s ? void 0 : s),
        showPopover: n === s
      })))))
    },
    M = () =>i.createElement(m.Z, {
      modalName: x.tl.SessionReview
    }, (() =>i.createElement(A, null)));
    var H = n(59261),
    B = n(53269);
    var U = n(13942),
    G = n(96774),
    q = n(50794),
    W = n(50483),
    V = n(20978);
    const $ = '_1pEmg',
    X = 'hA1_6 _1O2Z6',
    K = ({
      sessionType: e,
      type: t
    }) =>{
      switch (t) {
        case S.A.HardChallenge:
        case S.A.LimitedTts:
          return i.createElement('div', {
            className: $
          }, i.createElement('img', {
            className: 'XRr0_ _1O2Z6',
            src: q
          }), i.createElement('span', {
            className: '_2DNvM _19Xhk _3yAjN'
          }, (0, _._i) (10549)));
        case S.A.PastMistake:
          return e === S.FF.MistakesReview ? i.createElement('div', {
            className: $
          }, i.createElement('img', {
            className: X,
            src: G
          }), i.createElement('span', {
            className: '_201NS _19Xhk _3yAjN'
          }, (0, _._i) (15591))) : i.createElement('div', {
            className: $
          }, i.createElement('img', {
            className: X,
            src: W
          }), i.createElement('span', {
            className: '_2SU00 _19Xhk _3yAjN'
          }, (0, _._i) (15591)));
        case S.A.ReviewChallenge:
          return i.createElement('div', {
            className: $
          }, i.createElement('img', {
            className: '_30d61 _1O2Z6',
            src: V
          }), i.createElement('span', {
            className: 'ZCHCk _19Xhk _3yAjN'
          }, (0, _._i) (25472)));
        default:
          throw (0, j.RJ) (t),
          Error(`Unexpected value for indicatorType: ${ t }`)
      }
    };
    var Y = n(75876);
    const J = (e, {
      maxScale: t
    }) =>{
      const n = (0, Z.Fx) ((e=>e.ui.viewportHeight)),
      a = (0, Z.Fx) ((e=>e.ui.viewportWidth)),
      [
        s,
        r
      ] = i.useState(1);
      return i.useLayoutEffect((() =>{
        const n = e.current.map((e=>{
          var t;
          return null !== (t = null == e ? void 0 : e.measure()) && void 0 !== t ? t : 1 / 0
        }));
        r(Math.min(...n, t))
      }), [
        n,
        a
      ]),
      {
        scale: s
      }
    };
    var Q = n(34704),
    ee = n(5413),
    te = n(25025),
    ne = n(69347),
    ae = n(59425),
    se = n(12516),
    ie = n(40193);
    const re = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'lang-ar': '_38DjA _1k_Qp',
      wrap: '_2Rjkf _2RC-4 d84Fd',
      prompt: '_20V0b',
      'grid-wrap': '_2U6-h',
      grid: '_2jjRM',
      white: '_36WYE',
      green: '_24PLr',
      cell: '_3YisR',
      empty: '_17lQ6',
      filled: '_3y8w_',
      selected: '_2wwsA',
      disabled: '_2DMjY',
      'fast-animation': 'aF78J',
      'cell-content': '_2ra72',
      'cell-shadow': '_1uH1A',
      'final-word-base': '_3JyqJ',
      'final-word-bounce-in': '_3kZqW _3R1wj _3JyqJ',
      'final-word': 'iQAD8 _3JyqJ',
      sparkle: '_107Di',
      'sparkle-scaling': '_1WHfU',
      'final-tokens': '_12hUg',
      'final-token-base': 'CAgZw',
      'final-token': 'Gkx9z CAgZw',
      'final-token-bounce-in': '_3DbUK _3R1wj CAgZw'
    };
    var le,
    oe = n(50498),
    ce = n(59273),
    de = n(81149),
    ue = n(26506),
    pe = n(87477);
    !function (e) {
      e.CorrectMoveInwards = 'correct_1',
      e.CorrectShowFinalWord = 'correct_2',
      e.CorrectFinal = 'correct_3',
      e.IncorrectMoveInwards = 'incorrect_1',
      e.IncorrectSnapBack = 'incorrect_2'
    }(le || (le = {
    }));
    const me = e=>{
      const t = (0, Z.Fx) (g.iH),
      n = () =>'ar' === t ? Math.max(50, e) : 50,
      [
        a,
        s
      ] = i.useState(n());
      return i.useEffect((() =>{
        s(n())
      }), [
        e
      ]),
      a
    },
    ge = ({
      cellSize: e,
      gridCols: t,
      gridRows: n,
      text: a,
      selected: r,
      info: l,
      index: o,
      fast: c,
      onClick: d,
      position: u,
      disabled: m
    }) =>{
      const h = (0, Z.Fx) (g.iH),
      {
        colStart: v,
        rowStart: _,
        numCols: f,
        numRows: x
      }
      = l,
      b = 'center' === u,
      E = 0 === v,
      S = v + f === t,
      k = 0 === _,
      y = _ + x === n,
      w = n * e,
      C = t * e,
      N = x * e + (y ? 0 : 2),
      T = f * e + (S ? 0 : 2),
      R = me(e),
      I = v * e,
      L = 0.5 * (I + T / 2) + C / 2 * 0.5 - T / 2,
      F = _ * e,
      z = 0.5 * (F + N / 2) + w / 2 * 0.5 - N / 2,
      D = s() (re.cell, {
        [
          re.empty
        ]: void 0 === a,
        [
          re.selected
        ]: r && !m,
        [
          re.filled
        ]: void 0 !== a && !m,
        [
          re.disabled
        ]: m,
        [
          re['fast-animation']
        ]: c
      }),
      j = r ? void 0 === a ? 1 : 10 + n + 1 : void 0 === a ? 0 : 10 + _ + x,
      P = Object.assign(Object.assign(Object.assign(Object.assign({
        fontSize: `${ R }px`,
        height: `${ N }px`,
        left: `${ b ? L : I }px`,
        lineHeight: x * e + 'px',
        top: `${ b ? z : F }px`,
        width: `${ T }px`,
        zIndex: j
      }, E && k ? {
        borderTopLeftRadius: '18px'
      }
       : {
      }), E && y ? {
        borderBottomLeftRadius: '18px'
      }
       : {
      }), S && k ? {
        borderTopRightRadius: '18px'
      }
       : {
      }), S && y ? {
        borderBottomRightRadius: '18px'
      }
       : {
      }),
      O = Object.assign(Object.assign({
      }, P), {
        height: `${ N + 2 }px`,
        zIndex: 10
      }),
      A = s() (void 0 === a ? null : re['cell-shadow'], r ? re.selected : null);
      return i.createElement('div', null, b || m ? null : i.createElement('div', {
        className: A,
        style: O
      }), i.createElement(p.Z, {
        className: D,
        disabled: m,
        onClick: () =>null == d ? void 0 : d(o),
        style: P,
        variant: 'unstyled'
      }, i.createElement('span', {
        className: s() (re['cell-content'], re[`lang-${ h }`])
      }, a)))
    },
    he = ({
      animationState: e,
      cellSize: t,
      children: n,
      numRows: a,
      numCols: r
    }) =>{
      const l = e ? [
        le.CorrectMoveInwards,
        le.IncorrectMoveInwards,
        le.IncorrectSnapBack
      ].includes(e) ? re.white : [
        le.CorrectShowFinalWord,
        le.CorrectFinal
      ].includes(e) ? re.green : null : null;
      return i.createElement('div', {
        className: s() (re.grid, l),
        style: {
          height: a * t + 'px',
          width: r * t + 'px'
        }
      }, n)
    },
    ve = ({
      animationState: e,
      correctIndices: t,
      choices: n,
      size: a,
      bottom: r
    }) =>{
      const [l,
      o] = i.useState( - 1),
      c = (0, Z.Fx) (g.iH),
      d = 'rtl' === (0, f.Ux) (c);
      i.useEffect((() =>{
        e === le.CorrectFinal && setTimeout((() =>{
          o(0)
        }), 200)
      }), [
        e
      ]),
      i.useEffect((() =>{
        l >= 0 && l < t.length && setTimeout((() =>{
          o(l + 1)
        }), 100)
      }), [
        l
      ]);
      const u = t.map(((e, t) =>{
        const r = n[e];
        return i.createElement('div', {
          className: s() (l >= t ? re['final-token-bounce-in'] : re['final-token'], re[`lang-${ c }`]),
          key: e,
          style: {
            fontSize: `${ a }px`,
            height: `${ a }px`,
            lineHeight: `${ a }px`,
            width: `${ a }px`
          }
        }, r.text)
      }));
      return i.createElement('div', {
        className: re['final-tokens'],
        style: {
          bottom: `${ r }px`
        }
      }, d ? [
        ...u
      ].reverse() : u)
    };
    var _e = n(25200),
    fe = n(63794),
    xe = n(84273);
    const be = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      card: '_3pn9e',
      'card-disabled': '_1d8Vo _3pn9e',
      hotkey: '_2f9B3',
      transliteration: '_3x_e5',
      icon: '_1xFkr',
      bottom: '_1bl79',
      caption: 'HaQTI'
    };
    var Ee = n(30033),
    Se = n(67173);
    const ke = ({
      autoFocus: e,
      caption: t,
      disabled: n,
      icon: a,
      index: s,
      language: r,
      selected: l
    }) =>{
      const o = i.useRef(null),
      c = i.useCallback((() =>{
        var e,
        t;
        null === (e = o.current) || void 0 === e || e.dispatchEvent(new CustomEvent('web-ui_select')),
        null === (t = o.current) || void 0 === t || t.focus()
      }), [
        o
      ]);
      return i.useEffect((() =>{
        var t;
        e && !n && (null === (t = o.current) || void 0 === t || t.focus())
      }), [
      ]),
      i.createElement(fe.Z, Object.assign({
        className: be['card' + (n ? '-disabled' : '')],
        disabled: n,
        ref: o,
        role: 'radio',
        unstyledDisabled: !0,
        value: `${ s }`
      }, (0, Ee._q) (Se.V.ChallengeChoice)), i.createElement('div', {
        className: be.icon
      }, a), i.createElement('div', {
        className: be.bottom
      }, i.createElement('span', {
        className: be.caption,
        dir: (0, f.Ux) (r)
      }, t), i.createElement(xe.Z, {
        className: be.hotkey,
        disabled: n,
        disabledStyle: 'unstyled',
        index: s,
        onTrigger: c,
        selected: l
      })))
    };
    var ye = n(55306);
    var we = n(70811),
    Ce = n(28723),
    Ne = n(14747);
    const Te = '_23nte',
    Re = (e, t) =>{
      const n = e.getPointAtLength(t * e.getTotalLength()),
      a = e.getCTM();
      return a ? n.matrixTransform(a) : n
    },
    Ie = (e, t) =>{
      const n = 0.9999,
      a = Re(e, t >= n ? 0.95 : t),
      s = Re(e, t >= n ? 1 : Math.min(t + 0.05, 1));
      return Math.atan2(s.y - a.y, s.x - a.x) / Math.PI * 180
    },
    Le = (e, t) =>Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)),
    Fe = (e, t) =>({
      angle: Ie(t, e),
      angleEnd: Ie(t, 1),
      endPoint: Re(t, 1),
      progressPoint: Re(t, e)
    }),
    ze = ({
      cursor: e,
      strokeIndex: t,
      strokeRef: n,
      strokeInfo: a,
      strokeProgress: s,
      numStrokes: i
    }) =>{
      if (Le(e, a.progressPoint) > 25) return;
      const r = t=>Le(Re(n, t), e),
      l = n.getTotalLength();
      let o = Math.max(0, s - 5 / l),
      c = Math.min(1, s + 5 / l);
      for (; c - o > 0.001; ) {
        const e = o + (c - o) / 2,
        t = e + (c - e) / 2;
        r(o + (e - o) / 2) < r(t) ? c = e : o = e
      }
      const d = Math.max(s, o + (c - o) / 2);
      return d >= 0.97 || n.getTotalLength() < 10 ? {
        cursor: e,
        numStrokes: i,
        strokeIndex: t + 1,
        strokeInfo: void 0,
        strokeProgress: 0,
        strokeRef: n
      }
       : {
        cursor: e,
        numStrokes: i,
        strokeIndex: t,
        strokeInfo: Fe(d, n),
        strokeProgress: d,
        strokeRef: n
      }
    },
    De = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'fill-in-the-blank': '_2AzoZ _17nEt sXpqy',
      translation: 'x_l95 _1QDX9 st_Fn _2ti2i sXpqy'
    };
    var je = n(3800);
    class Ze extends i.Component {
      render() {
        const {
          autoFocus: e,
          disabled: t,
          inputLanguage: n,
          onChange: a,
          onFocus: s,
          placeholder: r,
          refCallback: l,
          size: o,
          style: c,
          value: d
        }
        = this.props;
        return i.createElement('input', Object.assign({
        }, (0, Ee._q) (Se.V.ChallengeTextInput), je.N, {
          autoFocus: e,
          className: De[c],
          dir: (0, f.Ux) (n),
          disabled: t,
          onChange: a,
          onFocus: s,
          placeholder: r,
          ref: l,
          size: o,
          type: 'text',
          value: d
        }))
      }
    }
    const Pe = Ze;
    var Oe = n(39955);
    const Ae = ({
      children: e
    }) =>i.createElement('div', {
      className: 'caPDQ'
    }, e);
    var Me = n(56000),
    He = n(22498),
    Be = n(34558),
    Ue = n(44451);
    const Ge = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      image: '_1RL1c',
      'image-container': 'F2B9m',
      'image-hidden': '_3vCW1 _1RL1c',
      lottie: '_1n2tS _1RL1c',
      'lottie-hidden': '_2VIT7 _1n2tS _1RL1c',
      popover: '_2zkz3',
      'popover-inner': '_11rtD',
      'popover-inner-icons': '_3ANq3',
      wrap: '_3mO3g'
    };
    var qe = n(53229),
    We = n(62610),
    Ve = n(71371);
    const $e = ({
      character: e,
      children: t,
      correct: n,
      hasOnlyIcons: a
    }) =>{
      const s = (0, Z.Fx) ((e=>[pe.cS.Guessing,
      pe.cS.Showing].includes(e.player.status))),
      r = (0, Z.Tb) (),
      [
        l,
        o
      ] = i.useState(!1),
      [
        c,
        d
      ] = i.useState(!1),
      [
        u,
        p
      ] = i.useState(!1),
      [
        m,
        g
      ] = i.useState(!1),
      h = r ? void 0 : !0 === n ? e.correctAnimation : !1 === n ? e.incorrectAnimation : void 0,
      v = !r && e.idleAnimation && 'control' !== (0, de.j6) ('web_delight_idle_char_animations_v6', 'view') ? e.idleAnimation : void 0,
      f = (0, Z.PX) (void 0, (() =>v ? We.U2(v) : Promise.resolve(void 0)), [
        v
      ]);
      (0, Ue.Z) ('JuicyCharacter'),
      i.useEffect((() =>{
        v && Ve.Z.start('character_animation_play')
      }), [
        v
      ]),
      i.useEffect((() =>{
        m && Ve.Z.finish('character_animation_play')
      }), [
        m
      ]);
      const x = !v || c ? i.createElement('img', {
        alt: '',
        className: Ge['image' + (l ? '-hidden' : '')],
        onError: () =>o(!0),
        src: e.image.svg
      }) : f ? 'lottie' === (0, de.j6) ('web_delight_idle_char_animations_v6', 'view') ? i.createElement(i.Suspense, {
        fallback: null
      }, i.createElement(He.Z, {
        animationData: f,
        className: Ge.lottie,
        isPlaying: !0,
        onDataFailed: () =>d(!0),
        onSegmentStart: () =>g(!0)
      })) : i.createElement(Be.Z, {
        animationData: f,
        className: Ge.lottie,
        height: 350,
        isPlaying: !0,
        onError: () =>d(!0),
        performanceSamplingRate: 0.1,
        width: 236
      }) : null;
      return i.createElement('div', {
        className: Ge.wrap
      }, i.createElement('div', {
        className: Ge['image-container']
      }, u ? null : x, h ? i.createElement(i.Suspense, {
        fallback: null
      }, i.createElement(He.Z, {
        className: Ge['lottie' + (u ? '' : '-hidden')],
        isPlaying: !s,
        onDataFailed: () =>(0, E.j) ('lottie_download_failure', {
          offline: !navigator.onLine,
          path: h,
          type: 'in_lesson_character_graded'
        }),
        onSegmentStart: () =>p(!0),
        path: (0, qe.qy) (h)
      })) : null), i.createElement(Me.Z, {
        className: Ge.popover,
        direction: 'right',
        innerClassName: Ge['popover-inner' + (a ? '-icons' : '')],
        manualPositioning: !0,
        stemContainerStyle: {
          top: `calc(50% - ${ F.Z['margin-popover-stem'] })`,
          transform: `translateY(-50%) rotate(${ _.lw ? '' : '-' }90deg)`
        },
        zIndex: parseInt(F.Z['z-index-popover'], 10)
      }, t))
    };
    var Xe = n(37575);
    const Ke = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: 'FA030',
      response: '_2EMUT _1QDX9 st_Fn _2ti2i sXpqy',
      'response-with-limit': '_1_xfn _2EMUT _1QDX9 st_Fn _2ti2i sXpqy',
      'character-limit-container': 'Y3LEK',
      'character-limit': 'ZSQE6',
      'character-limit-warning': '_2fLwl',
      'virtual-keyboard': '_1DQuH'
    };
    class Ye extends i.Component {
      constructor() {
        super (...arguments),
        this.inputElement = null,
        this.renderCharacterLimit = () =>{
          const {
            maxLength: e,
            maxLengthWarning: t,
            value: n
          }
          = this.props;
          if (void 0 === e) return null;
          const a = n.length,
          r = !!t && e - a <= t;
          return i.createElement('div', {
            className: Ke['character-limit-container']
          }, i.createElement('span', {
            className: s() (Ke['character-limit'], {
              [
                Ke['character-limit-warning']
              ]: r
            })
          }, (0, _._i) (22527, {
            denominator: e,
            numerator: a
          })))
        }
      }
      render() {
        var e;
        const {
          autoFocus: t,
          disabled: n,
          inputLanguage: a,
          learningLanguage: s,
          maxLength: r,
          onChange: l,
          refCallback: o,
          value: c
        }
        = this.props;
        return i.createElement('div', {
          className: Ke.wrap
        }, i.createElement('textarea', Object.assign({
        }, (0, Ee._q) (Se.V.ChallengeTranslateInput), s === a ? je.N : {
        }, {
          autoFocus: t,
          className: Ke['response' + (r ? '-with-limit' : '')],
          'data-gramm': !1,
          dir: (0, f.Ux) (a),
          disabled: n,
          lang: a,
          maxLength: r,
          onChange: e=>l(e, e.target.value),
          placeholder: (0, _.H8) (17610, {
            language_name: (0, f.vY) (a)
          }),
          ref: e=>{
            this.inputElement = e,
            null == o || o(e)
          },
          value: c
        })), this.renderCharacterLimit(), i.createElement(Xe.Z, {
          className: Ke['virtual-keyboard'],
          disabled: n,
          inputElement: null !== (e = this.inputElement) && void 0 !== e ? e : void 0,
          language: a,
          onChange: (e, t) =>(!r || t.length <= r) && l(e, t),
          value: c
        }))
      }
    }
    const Je = Ye,
    Qe = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_2byft _3IQqi _2RC-4 d84Fd',
      'wrap-character': '_1Eiuz _1lDmW d84Fd',
      prompt: '_38XEZ _2Hg6H',
      'prompt-character': '_1T54K _3oxW8 _2Hg6H',
      answer: '_2Gy66 _2Nv1I _qg8x',
      'answer-character': '_1FYT5 _1zSeg _qg8x',
      'fake-textarea-player': '_3f_Q3 _2FKqf _2ti2i sXpqy',
      'input-container': '_33vo_',
      'virtual-keyboard': '_2H1YH'
    };
    class et extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          inputIndex: this.props.challenge.displayTokens.findIndex((e=>e.isBlank))
        },
        this.inputRefs = new Array(this.props.challenge.displayTokens.filter((e=>e.isBlank)).length).fill(null)
      }
      componentDidUpdate(e) {
        const {
          challengeState: {
            guess: t
          },
          disabled: n
        }
        = this.props;
        n || e.challengeState.guess === t || Ve.Z.finish('challenge_typing')
      }
      render() {
        var e,
        t,
        n,
        a;
        const {
          challenge: {
            character: s,
            displayTokens: r,
            gradingResult: l,
            newWords: o,
            skipped: c,
            tokens: d
          },
          challengeState: {
            guess: u
          },
          challengeToggleState: p,
          disabled: m,
          fromLanguage: g,
          isDesktop: h,
          learningLanguage: v,
          onChange: _
        }
        = this.props,
        x = d.map(((e, t) =>(null == o ? void 0 : o.includes(e.value)) ? t : void 0)).filter((e=>void 0 !== e)),
        b = i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'new-word',
          highlights: x,
          isForward: !1,
          language: g,
          tokens: d
        });
        return i.createElement('div', {
          className: Qe['wrap' + (s ? '-character' : '')]
        }, i.createElement('div', {
          className: Qe['prompt' + (s ? '-character' : '')]
        }, s ? i.createElement($e, {
          character: s,
          correct: c || null == l ? void 0 : l.correct
        }, b) : b), i.createElement('div', {
          className: Qe['answer' + (s ? '-character' : '')]
        }, p.isToggledToTyping ? i.createElement(Je, {
          autoFocus: h,
          disabled: m,
          inputLanguage: v,
          learningLanguage: v,
          onChange: ({
          }, e) =>{
            Ve.Z.start('challenge_typing'),
            _(Object.assign(Object.assign({
            }, u), {
              translatedSentence: e
            }))
          },
          value: null !== (e = null == u ? void 0 : u.translatedSentence) && void 0 !== e ? e : ''
        }) : i.createElement(i.Fragment, null, i.createElement('label', {
          className: Qe['fake-textarea-player'],
          dir: (0, f.Ux) (v)
        }, r.map(((e, t) =>{
          var n,
          a;
          return e.isBlank ? i.createElement('span', {
            className: Qe['input-container'],
            key: t
          }, i.createElement(Ae, null, `_${ e.text }_`), i.createElement(Pe, {
            autoFocus: h && this.state.inputIndex === t,
            disabled: m,
            inputLanguage: v,
            onChange: e=>{
              var n;
              Ve.Z.start('challenge_typing'),
              _(Object.assign(Object.assign({
              }, u), {
                translatedWords: null === (n = null == u ? void 0 : u.translatedWords) || void 0 === n ? void 0 : n.map(((n, a) =>a === t ? e.target.value : n))
              }))
            },
            onFocus: () =>{
              this.setState({
                inputIndex: t
              })
            },
            refCallback: e=>this.inputRefs[t] = e,
            size: 1,
            style: 'fill-in-the-blank',
            value: null !== (a = null === (n = null == u ? void 0 : u.translatedWords) || void 0 === n ? void 0 : n[t]) && void 0 !== a ? a : ''
          })) : i.createElement('span', {
            key: t
          }, e.text)
        }))), i.createElement(Xe.Z, {
          className: Qe['virtual-keyboard'],
          disabled: m,
          inputElement: null !== (t = this.inputRefs[this.state.inputIndex]) && void 0 !== t ? t : void 0,
          language: v,
          onChange: ({
          }, e) =>{
            var t;
            Ve.Z.start('challenge_typing'),
            _(Object.assign(Object.assign({
            }, u), {
              translatedWords: null === (t = null == u ? void 0 : u.translatedWords) || void 0 === t ? void 0 : t.map(((t, n) =>this.state.inputIndex === n ? e : t))
            }))
          },
          value: null !== (a = null === (n = null == u ? void 0 : u.translatedWords) || void 0 === n ? void 0 : n[this.state.inputIndex]) && void 0 !== a ? a : ''
        }))))
      }
    }
    class tt extends i.Component {
      render() {
        const {
          challenge: {
            choiceLanguageId: e,
            choices: t,
            correctIndex: n,
            displayTokens: a,
            phraseToDefine: s,
            tts: r
          },
          challengeState: {
            guess: l
          },
          disabled: o,
          onChange: c
        }
        = this.props;
        return i.createElement('div', {
          className: 'oX0Tr _2RC-4 d84Fd'
        }, i.createElement('div', {
          className: '_3QpTb _2Hg6H',
          dir: (0, f.Ux) (e)
        }, r ? i.createElement(N.Z, {
          audio: r,
          autoplay: !0,
          className: '_3wsVq _3CmzM _371Cf',
          dir: (0, f.Ux) (e),
          ttsTrackingData: {
            text: a.map((e=>e.text)).join('')
          },
          type: 'small',
          useKeyboardShortcut: !0
        }) : null, i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'new-word',
          highlights: a.map(((e, t) =>e.isHighlighted ? t : void 0)).filter((e=>void 0 !== e)),
          isForward: !0,
          language: e,
          tokens: a.map((e=>e.hintToken))
        })), i.createElement('div', {
          className: '_38Get _3slGi'
        }, (0, _._i) (1831, {
          string_1: s
        })), i.createElement(B.Z, {
          autoFocus: !0,
          choices: t,
          className: '_2iCI9',
          correctIndex: n,
          disabled: o,
          language: e,
          onChange: c,
          overflowBehavior: {
            prompt: a.map((e=>e.text)).join(''),
            shouldHandleOverflow: !0,
            trackedChallengeType: 'definition'
          },
          type: 'column',
          value: l
        }))
      }
    }
    var nt = n(33389);
    const at = '_2Iqyl',
    st = ({
      children: e
    }) =>e ? i.createElement('span', {
      className: at
    }, e) : i.createElement('span', {
      className: at
    }, i.createElement('span', {
      className: '_167HH'
    })),
    it = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_2CYoD',
      'bubble-wrap': '_3ZoSe',
      'bubble-wrap-left': '_1eXoV _3ZoSe',
      'bubble-wrap-right': '_2sOtN _3ZoSe',
      'align-left': '_3qOhs',
      'align-right': '_3EGtV',
      bubble: '_39MJv _2Hg6H',
      'tail-left': '_2t35G',
      'tail-right': 'bjjp9 _2t35G',
      'bubble-left': '_29e-M _39MJv _2Hg6H',
      'bubble-right': '_21IEC _39MJv _2Hg6H',
      'hidden-text': '_3zmEQ'
    },
    rt = ({
      alignment: e,
      displayTokens: t,
      hintTokens: n,
      learningLanguage: a
    }) =>{
      if (t.length !== n.length) throw Error('Token length mismatch.');
      return i.createElement('div', {
        className: it[`bubble-wrap-${ e }`]
      }, 'left' === e ? i.createElement('div', {
        className: it[`tail-${ e }`]
      }) : null, i.createElement('div', {
        className: it[`bubble-${ e }`],
        dir: (0, f.Ux) (a)
      }, i.createElement('span', {
        className: it['hidden-text']
      }, (0, _._i) ('left' === e ? 7924 : 17754)), u.DZ(t.length, (e=>{
        const s = t[e],
        r = n[e];
        return s.isBlank ? 0 !== e && t[e - 1].isBlank ? null : i.createElement(st, {
          key: e
        }) : i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'normal',
          isForward: !0,
          key: e,
          language: a,
          tokens: [
            r
          ]
        })
      }))), 'right' === e ? i.createElement('div', {
        className: it[`tail-${ e }`]
      }) : null)
    };
    class lt extends i.Component {
      constructor() {
        super (...arguments),
        this.bubbleWrappers = [
        ]
      }
      render() {
        const {
          currentDialogueIndex: e,
          dialogue: t,
          learningLanguage: n
        }
        = this.props,
        a = t[0].speaker;
        return i.createElement('div', {
          className: it.wrap
        }, t.map(((t, s) =>{
          const r = t.speaker === a ? 'left' : 'right';
          return i.createElement(nt.Z, {
            isVisible: s <= e,
            key: s
          }, i.createElement('div', {
            className: it[`align-${ r }`],
            ref: e=>this.bubbleWrappers[s] = e
          }, i.createElement(rt, {
            alignment: r,
            displayTokens: t.displayTokens,
            hintTokens: t.hintTokens,
            learningLanguage: n
          })))
        })))
      }
      getCurrentlySelectedBubble() {
        const {
          currentDialogueIndex: e
        }
        = this.props;
        return this.bubbleWrappers[e]
      }
    }
    const ot = lt;
    var ct = n(88849);
    class dt extends i.Component {
      constructor() {
        super (...arguments),
        this.choiceListRef = i.createRef(),
        this.choicesWrapper = null,
        this.dialogueComponent = null,
        this.scrollToSelectedBubble = () =>{
          if (this.dialogueComponent) {
            const e = this.dialogueComponent.getCurrentlySelectedBubble();
            e && (0, ct.zT) (e, {
              behavior: 'smooth',
              block: 'center'
            })
          }
        },
        this.scrollToEnd = () =>{
          this.choicesWrapper && (0, ct.zT) (this.choicesWrapper, {
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
      componentDidUpdate(e) {
        var t;
        const {
          isDesktop: n,
          challengeState: {
            currentDialogueIndex: a
          }
        }
        = e,
        {
          challenge: {
            dialogue: s
          },
          challengeState: {
            currentDialogueIndex: i
          },
          isDesktop: r
        }
        = this.props;
        (n !== r || a !== i) && (i < s.length ? this.scrollToSelectedBubble() : this.scrollToEnd());
        const l = a === s.length,
        o = i === s.length;
        !l && o && (null === (t = this.choiceListRef.current) || void 0 === t || t.focusFirstChoice())
      }
      render() {
        const {
          challenge: {
            choices: e,
            correctIndex: t,
            dialogue: n,
            promptTokens: a
          },
          challengeState: s,
          challengeState: {
            guess: r
          },
          disabled: l,
          learningLanguage: o,
          onChange: c
        }
        = this.props,
        {
          currentDialogueIndex: d
        }
        = s,
        u = d === n.length;
        return i.createElement('div', {
          className: 'eIARi _2RC-4 d84Fd'
        }, i.createElement(ot, {
          currentDialogueIndex: d,
          dialogue: n,
          learningLanguage: o,
          ref: e=>this.dialogueComponent = e
        }), i.createElement(nt.Z, {
          isVisible: u
        }, i.createElement('div', {
          ref: e=>this.choicesWrapper = e
        }, a ? i.createElement('div', {
          className: 't9Kun _2Hg6H _1dBSx _3slGi'
        }, i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'normal',
          inTabOrder: u,
          isForward: !0,
          language: o,
          tokens: a
        })) : null, i.createElement(B.Z, {
          choices: e,
          correctIndex: t,
          disabled: l || !u,
          language: o,
          onChange: c,
          overflowBehavior: {
            shouldHandleOverflow: !1
          },
          ref: this.choiceListRef,
          type: 'column',
          value: r
        }))))
      }
    }
    const ut = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: 'mfj2W _3IQqi _2RC-4 d84Fd',
      'wrap-character': '_3eqas _1lDmW d84Fd',
      prompt: '_2SfAl _2Hg6H',
      'prompt-character': '_3vN2c _2h7SO _2Hg6H',
      answer: '_3hkYG _2Nv1I',
      'answer-character': '_364Lu _1zSeg'
    },
    pt = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_2sims _2RC-4 d84Fd',
      'wrap-image': '_3wjZb _2sims _2RC-4 d84Fd',
      prompt: '_26xTB',
      image: '_2PoaJ _1KcR7',
      answer: '_1ZATx _2Nv1I _qg8x'
    };
    class mt extends i.Component {
      componentDidUpdate(e) {
        const {
          challengeState: {
            guess: t
          },
          disabled: n
        }
        = this.props;
        n || e.challengeState.guess === t || Ve.Z.finish('challenge_typing')
      }
      render() {
        const {
          challenge: {
            image: e,
            maxGuessLength: t,
            prompt: n
          },
          challengeState: {
            guess: a
          },
          disabled: s,
          isDesktop: r,
          learningLanguage: l,
          onChange: o
        }
        = this.props;
        return i.createElement('div', {
          className: pt['wrap' + (e ? '-image' : '')]
        }, n ? i.createElement('div', {
          className: pt.prompt
        }, n) : null, e ? i.createElement('img', {
          className: pt.image,
          src: e.svg
        }) : null, i.createElement('div', {
          className: pt.answer
        }, i.createElement(Je, {
          autoFocus: r,
          disabled: s,
          inputLanguage: l,
          learningLanguage: l,
          maxLength: t,
          maxLengthWarning: 10,
          onChange: ({
          }, e) =>{
            Ve.Z.start('challenge_typing'),
            o(e)
          },
          value: null != a ? a : ''
        })))
      }
    }
    const gt = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_1y-0G _3IQqi _2RC-4 d84Fd',
      'wrap-character': '_1_Bqu _1lDmW d84Fd',
      prompt: '_3Fi4A _2Hg6H',
      'prompt-character': 'HYg4b _2h7SO _2Hg6H',
      answer: 'zptRO _2Nv1I',
      'answer-character': '_1c-uw _1zSeg'
    };
    class ht extends i.Component {
      constructor() {
        super (...arguments),
        this.renderSentence = () =>{
          const {
            challenge: {
              displayTokens: e,
              newWords: t,
              tokens: n
            },
            learningLanguage: a
          }
          = this.props,
          s = [
          ];
          e.length !== n.length && (0, b.vU) ('Token length mismatch.');
          for (let r = 0; r < e.length; r++) {
            const l = e[r],
            o = n[r];
            l.isBlank ? 0 !== r && e[r - 1].isBlank || s.push(i.createElement(st, {
              key: r
            })) : s.push(i.createElement(Oe.Z, {
              disableTTS: !1,
              highlightStyle: 'new-word',
              highlights: (null == t ? void 0 : t.includes(l.text)) ? [
                0
              ] : [
              ],
              isForward: !0,
              key: r,
              language: a,
              tokens: [
                o
              ]
            }))
          }
          return i.createElement('div', {
            dir: (0, f.Ux) (a)
          }, s)
        }
      }
      render() {
        const {
          challenge: {
            character: e,
            choices: t,
            correctIndex: n,
            gradingResult: a,
            skipped: s
          },
          challengeState: {
            guess: r
          },
          disabled: l,
          learningLanguage: o,
          onChange: c
        }
        = this.props;
        return i.createElement('div', {
          className: gt['wrap' + (e ? '-character' : '')]
        }, i.createElement('div', {
          className: gt['prompt' + (e ? '-character' : '')]
        }, e ? i.createElement($e, {
          character: e,
          correct: s || null == a ? void 0 : a.correct
        }, this.renderSentence()) : this.renderSentence()), i.createElement(B.Z, {
          autoFocus: !0,
          choices: t,
          className: gt['answer' + (e ? '-character' : '')],
          correctIndex: n,
          disabled: l,
          language: o,
          onChange: c,
          overflowBehavior: {
            shouldHandleOverflow: !1
          },
          type: 'column',
          value: r
        }))
      }
    }
    const vt = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_9rpNE _3IQqi _2RC-4 d84Fd',
      'wrap-character': '_50Zab _1lDmW d84Fd',
      prompt: '_3-JBe',
      'prompt-character': '_20dPJ _2h7SO',
      answer: '_11_Z_ _2Nv1I',
      'answer-character': 'NQ6Yc _1zSeg'
    };
    class _t extends i.Component {
      render() {
        const {
          audio: e,
          onClick: t,
          onError: n,
          slowAudio: a,
          style: s,
          ttsTrackingData: r
        }
        = this.props,
        l = i.createElement(N.Z, {
          audio: e,
          autoplay: !0,
          onClick: t,
          soundOptions: {
            allowInterrupt: a,
            eventListeners: [
              ['error',
              n]
            ],
            forceListen: !0
          },
          style: s,
          ttsTrackingData: r,
          type: 'medium',
          useKeyboardShortcut: !0
        }),
        o = a ? i.createElement(N.Z, {
          audio: a,
          onClick: t,
          soundOptions: {
            allowInterrupt: e,
            eventListeners: [
              ['error',
              n]
            ],
            forceListen: !0
          },
          style: s,
          ttsTrackingData: r,
          type: 'slow',
          useKeyboardShortcut: !0
        }) : null;
        return 'in-character-popover' === s ? i.createElement(i.Fragment, null, i.createElement('span', null, l), o ? i.createElement('span', null, o) : null) : i.createElement('div', {
          className: '_3L7Fu'
        }, l, o ? i.createElement('div', {
          className: '_227Cd'
        }, o) : null)
      }
    }
    const ft = _t;
    var xt = n(99369);
    const bt = ({
      from: e,
      isFlyEnabled: t,
      prefersReducedMotion: n,
      selected: a
    }) =>e && t && !n ? a ? {
      from: e,
      name: 'FLY_INTO_PLACE'
    }
     : {
      from: e,
      name: 'FLY_BACK'
    }
     : a ? {
      name: 'FADE_OUT_HIGHLIGHT'
    }
     : void 0,
    Et = ({
      isFlyEnabled: e,
      selectedIndices: t,
      selectedTokenRefs: n,
      tokens: a,
      unselectedTokenRefs: s
    }) =>{
      const r = (0, Z.Tb) (),
      [
        l,
        o
      ] = i.useState([]),
      [
        c,
        d
      ] = i.useState([]),
      p = i.useRef([]),
      m = i.useRef();
      return i.useEffect((() =>{
        p.current = n.map((e=>e.getBoundingClientRect()))
      })),
      i.useLayoutEffect((() =>{
        if (m.current && !u.Xy(m.current, t)) {
          const n = [
          ],
          i = [
          ];
          for (let o = 0; o < a; o++) {
            const a = m.current.includes(o),
            d = t.includes(o);
            !a && d ? (n[o] = bt({
              from: s[o].getBoundingClientRect(),
              isFlyEnabled: e,
              prefersReducedMotion: r,
              selected: !0
            }), i[o] = void 0) : a && d ? (n[o] = l[o], i[o] = void 0) : a || d ? a && !d && (n[o] = void 0, i[o] = bt({
              from: p.current[m.current.indexOf(o)],
              isFlyEnabled: e,
              prefersReducedMotion: r,
              selected: !1
            })) : (n[o] = void 0, i[o] = c[o])
          }
          o(n),
          d(i)
        }
        m.current = t
      })),
      {
        selectedTokenAnimations: l,
        unselectedTokenAnimations: c
      }
    };
    var St = n(66530);
    const kt = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'safari-wrap': 'tVzIv',
      _wrap: '_1C_S3',
      'wrap-large': '_1OQnu _1C_S3',
      'wrap-normal': '_3IcNx _1C_S3',
      'wrap-shorter': 'BgRIp _1C_S3',
      'selected-tokens-container': '_2PLYW',
      'selected-tokens-inner': 'Qwwbl',
      'available-tokens-container': '_3Lqi-',
      'border-top': '_1HxVp'
    };
    var yt = n(60491);
    const wt = ({
      autoFocus: e,
      challengeType: t,
      choices: n,
      correctIndices: a,
      disabled: r,
      hasBorderTop: l,
      isDesktop: o,
      language: c,
      onChange: d,
      onUnhandledOverflow: p,
      playTtsOnSelect: m,
      showTypeToSelectIntro: g,
      typeToSelectSupported: h,
      value: v
    }) =>{
      var _,
      f;
      const x = (0, Z.tX) (),
      b = (0, Z.Fx) ((e=>e.ui.viewportHeight)),
      E = (0, Z.Fx) ((e=>e.ui.viewportWidth)),
      k = (0, xt.asMutable) (n),
      y = i.useRef(null),
      w = i.useRef(null),
      C = i.useRef(null),
      N = (0, Z.Fx) ((e=>e.player.session.type === S.FF.AlphabetLesson)),
      [
        T,
        R
      ] = i.useState((() =>u.TV(k.map((({
      }, e) =>e))))),
      [
        I,
        L
      ] = i.useState(N || o ? ee.I.Large : ee.I.Normal),
      F = i.useRef(),
      z = i.useRef(),
      D = (e, t) =>{
        const n = window.performance.now();
        d(t ? [
          ...v,
          e
        ] : u.zu(v, e));
        const {
          text: a,
          tts: s
        }
        = k[e];
        t && m && s && (0, U.a1) (s, {
          requestedAt: n,
          text: a
        })
      },
      j = T.map((e=>k[e])),
      P = v.map((e=>T.indexOf(e))),
      {
        highlights: O
      }
      = (0, St.Z) ({
        gracePeriod: 1000,
        language: c,
        mode: r || !h ? 'disabled' : 'unique',
        onBackspace: () =>{
          const e = v.length ? v[v.length - 1] : void 0;
          void 0 !== e && D(e, !1)
        },
        onMatch: e=>{
          x((0, we.eX) ({
            challengeType: t
          })),
          D(T[e], !0)
        },
        selectedIndices: P,
        tokens: j.map((e=>e.text))
      }),
      {
        selectedTokenAnimations: A,
        unselectedTokenAnimations: M
      }
      = Et({
        isFlyEnabled: o,
        selectedIndices: P,
        selectedTokenRefs: null !== (_ = y.current) && void 0 !== _ ? _ : [
        ],
        tokens: T.length,
        unselectedTokenRefs: null !== (f = C.current) && void 0 !== f ? f : [
        ]
      });
      i.useEffect((() =>{
        F.current === T && z.current === I || ((() =>{
          if (w.current && (0, yt.J) (w.current)) {
            const e = (() =>{
              var e;
              return null !== (e = T.filter((e=>!v.includes(e) && !a.includes(e))).sort(((e, t) =>k[t].text.length - k[e].text.length)) [0]) && void 0 !== e ? e : - 1
            }) ();
            I === ee.I.Large ? L(ee.I.Normal) : I === ee.I.Normal ? L(ee.I.Shorter) : e > - 1 ? R(T.filter((t=>t !== e))) : p()
          }
        }) (), F.current = T, z.current = I)
      }));
      const H = i.useRef();
      return H.current = (0, Z.Fx) ((e=>{
        var t;
        return 'TYPE_TO_SELECT' === (null === (t = e.ui.drawer) || void 0 === t ? void 0 : t.name)
      })),
      i.useEffect((() =>{
        if (g) return H.current = !0,
        () =>{
          H.current && x({
            options: void 0,
            type: 'TOGGLE_DRAWER'
          })
        }
      }), [
        g
      ]),
      i.useEffect((() =>{
        var e;
        if (H.current) if (O.some((e=>void 0 !== e && e.index > 0))) x({
          options: void 0,
          type: 'TOGGLE_DRAWER'
        });
         else {
          const t = null === (e = C.current) || void 0 === e ? void 0 : e[T.indexOf(a[0])];
          if (t) {
            const e = t.getBoundingClientRect();
            x({
              options: {
                name: 'TYPE_TO_SELECT',
                spotlight: {
                  cx: e.x + e.width / 2,
                  cy: e.y + e.height / 2,
                  r: e.width / 2 + 8
                }
              },
              type: 'TOGGLE_DRAWER'
            })
          }
        }
      }), [
        O,
        g,
        b,
        E
      ]),
      i.createElement('div', {
        className: kt['safari-wrap']
      }, i.createElement('div', {
        className: s() (kt[`wrap-${ I }`], {
          [
            kt['border-top']
          ]: l
        }),
        ref: w
      }, i.createElement('div', {
        className: kt['selected-tokens-container']
      }, i.createElement('div', {
        className: kt['selected-tokens-inner']
      }, i.createElement(te.Z, {
        choices: j,
        disabled: r,
        language: c,
        onTap: e=>D(T[e], !1),
        selectedIndices: P,
        size: I,
        style: 'lines',
        tokenProps: u.DZ(j.length, (e=>{
          var t,
          n;
          return {
            animation: A[e],
            highlightIndex: null === (t = O[e]) || void 0 === t ? void 0 : t.index,
            isComposing: null === (n = O[e]) || void 0 === n ? void 0 : n.isComposing
          }
        })),
        tokensRef: e=>y.current = e
      }))), i.createElement('div', {
        className: kt['available-tokens-container']
      }, i.createElement(te.Z, {
        autoFocus: e,
        choices: j,
        disabled: r,
        language: c,
        onTap: e=>D(T[e], !0),
        selectedIndices: P,
        size: I,
        style: 'word-bank',
        tokenProps: u.DZ(j.length, (e=>{
          var t,
          n;
          return {
            animation: M[e],
            highlightIndex: null === (t = O[e]) || void 0 === t ? void 0 : t.index,
            isComposing: null === (n = O[e]) || void 0 === n ? void 0 : n.isComposing
          }
        })),
        tokensRef: e=>C.current = e
      }))))
    },
    Ct = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: 'Gitgh _3IQqi _2RC-4 d84Fd',
      'wrap-character': '_3RQXF _1lDmW d84Fd',
      prompt: '_1cnOk',
      'prompt-character': '_29CdC _3oxW8',
      answer: '_27-bD _2Nv1I _qg8x',
      'answer-character': 'HrM0Z _1zSeg _qg8x'
    },
    Nt = e=>e.challenge.type === S.Sm.ListenTap,
    Tt = ({
      challenge: e,
      challengeToggleState: t
    }) =>e.type !== S.Sm.ListenTap || t.isToggledToTyping ? i.createElement('span', null, (0, _._i) (6961)) : i.createElement('span', null, (0, _._i) (10461)),
    Rt = e=>{
      const {
        challenge: {
          character: t,
          gradingResult: n,
          prompt: a,
          skipped: s,
          slowTts: r,
          tts: l
        },
        challengeToggleState: o,
        disabled: c,
        fromLanguage: d,
        isDesktop: u,
        learningLanguage: p
      }
      = e,
      m = (0, Z.tX) (),
      [
        g,
        h
      ] = i.useState(!1),
      [
        v,
        _
      ] = i.useState(0),
      f = i.useRef(null),
      x = i.useRef();
      i.useEffect((() =>{
        h(!0)
      }), [
      ]),
      i.useEffect((() =>{
        v > 1 && m({
          type: 'CHALLENGE_HAS_BROKEN_TTS'
        })
      }), [
        v
      ]),
      i.useEffect((() =>{
        c || !x.current || Nt(x.current) && !x.current.challengeToggleState.isToggledToTyping || Nt(e) && !o.isToggledToTyping || x.current.challengeState.guess === e.challengeState.guess || Ve.Z.finish('challenge_typing'),
        x.current = e
      }));
      const b = i.createElement(ft, {
        audio: l,
        autoplay: !g,
        onClick: () =>{
          var e;
          return null === (e = f.current) || void 0 === e ? void 0 : e.focus()
        },
        onError: () =>_((e=>e + 1)),
        slowAudio: r,
        style: t ? 'in-character-popover' : void 0,
        ttsTrackingData: {
          text: a
        }
      });
      return i.createElement('div', {
        className: Ct['wrap' + (t ? '-character' : '')]
      }, i.createElement('div', {
        className: Ct['prompt' + (t ? '-character' : '')]
      }, t ? i.createElement($e, {
        character: t,
        correct: s || null == n ? void 0 : n.correct,
        hasOnlyIcons: !0
      }, b) : b), (() =>{
        var n,
        s,
        r;
        if (Nt(e) && !o.isToggledToTyping) {
          const {
            challenge: s,
            challengeState: {
              guess: r
            },
            onChange: l
          }
          = e;
          return i.createElement(wt, {
            challengeType: S.Sm.ListenTap,
            choices: s.choices,
            correctIndices: s.correctIndices,
            disabled: c,
            hasBorderTop: !!t,
            isDesktop: u,
            language: p,
            onChange: e=>l(Object.assign(Object.assign({
            }, r), {
              tapTranscriptions: e
            })),
            onUnhandledOverflow: () =>(0, E.j) ('challenge_overflow', {
              challenge_type: 'listen_tap',
              prompt: a
            }),
            playTtsOnSelect: !0 !== s.isOptionTtsDisabled,
            typeToSelectSupported: (0, z.jc) ({
              fromLanguage: d,
              learningLanguage: p
            }),
            value: null !== (n = null == r ? void 0 : r.tapTranscriptions) && void 0 !== n ? n : [
            ]
          })
        }
        return i.createElement('div', {
          className: Ct['answer' + (t ? '-character' : '')]
        }, i.createElement(Je, {
          autoFocus: u,
          disabled: c,
          inputLanguage: p,
          learningLanguage: p,
          onChange: ({
          }, t) =>{
            Ve.Z.start('challenge_typing'),
            Nt(e) ? e.onChange(Object.assign(Object.assign({
            }, e.challengeState.guess), {
              transcription: t
            })) : e.onChange(t)
          },
          refCallback: e=>f.current = e,
          value: null !== (r = Nt(e) ? null === (s = e.challengeState.guess) || void 0 === s ? void 0 : s.transcription : e.challengeState.guess) && void 0 !== r ? r : ''
        }))
      }) ())
    },
    It = {
      wrap: '_1MJw0 _3IQqi _2RC-4 d84Fd',
      'wrap-character': 'dGTmT _1lDmW d84Fd',
      prompt: 'Bphzn',
      'prompt-character': '_3JYky _3oxW8',
      answer: '_2pumT _2Nv1I _qg8x',
      'answer-character': '_55nw4 _1zSeg _qg8x',
      'fake-textarea-player': '_3t3oQ _2FKqf _2ti2i sXpqy',
      'input-container': '_1bHqX',
      'virtual-keyboard': '_3LMrr'
    },
    Lt = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_3wZdL _2RC-4 d84Fd',
      'has-question': '_31uBm',
      prompt: '_27wYK',
      'prompt-before-question': 'tACje _27wYK',
      question: '_1UcMV _2Hg6H _3slGi'
    },
    Ft = () =>{
      const e = (0, Z.Fx) (g.$4);
      return i.createElement('span', null, e ? (0, _._i) (31541) : (0, _._i) (14245))
    },
    zt = e=>{
      const {
        disabled: t,
        fromLanguage: n,
        learningLanguage: a,
        onChange: r
      }
      = e,
      [
        {
          solutionMap: l,
          tokens: o,
          ttsMap: c
        }
      ] = i.useState((() =>(e=>{
        const t = [
        ],
        n = {
        },
        a = {
        },
        s = (e, t) =>{
          n[e] = n[e] || [
          ],
          n[e].push(t)
        };
        return ((e=>e.challenge.type === S.Sm.CharacterMatch) (e) ? (e=>{
          const {
            isOptionTtsDisabled: t,
            pairs: n
          }
          = e;
          return n.map((e=>({
            containsCharacter: !0,
            solutionToken: e.transliteration,
            solutionTokenTransliteration: e.tokenTransliteration,
            spokenToken: e.character,
            tts: t ? void 0 : e.tts
          })))
        }) (e.challenge) : e.challenge.pairs.map((e=>({
          containsCharacter: !1,
          solutionToken: e.fromToken,
          spokenToken: e.learningToken,
          spokenTokenTransliteration: e.learningTokenTransliteration,
          tts: e.tts
        })))).forEach((n=>{
          const {
            containsCharacter: i,
            solutionToken: r,
            solutionTokenTransliteration: l,
            spokenToken: o,
            tts: c
          }
          = n;
          s(o, r),
          s(r, o),
          a[o] = c,
          t.push({
            isCharacter: i,
            language: e.learningLanguage,
            text: o
          }),
          t.push({
            isCharacter: !1,
            language: e.fromLanguage,
            text: r,
            transliteration: l
          })
        })),
        {
          solutionMap: n,
          tokens: u.TV(t),
          ttsMap: a
        }
      }) (e))),
      d = o.map(((e, t) =>({
        index: t,
        token: e
      }))),
      [
        p,
        m
      ] = i.useState([]),
      [
        h,
        v
      ] = i.useState(),
      [
        _,
        x
      ] = i.useState(),
      [
        b,
        E
      ] = i.useState((() =>d.map((({
        index: e
      }) =>e)))),
      k = d.filter((({
        token: e
      }) =>e.language === a)),
      y = d.filter((({
        token: e
      }) =>e.language === n)),
      w = (0, Z.Fx) (g.$4) && 'experiment' === (0, de.j6) ('stories_web_keyboard_match', void 0),
      C = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings)),
      N = 'rtl' === (0, f.Ux) (a),
      T = [
        y,
        k
      ],
      R = y.length,
      I = d.some((({
        token: e
      }) =>void 0 !== e.transliteration)) && (0, Q.dN) (a, n, C);
      return i.createElement('div', {
        className: '_3_8qR _2RC-4 d84Fd'
      }, i.createElement('div', {
        className: s() ('mLXW5', {
          _1Ij3C: w
        }),
        style: {
          flexDirection: N ? 'row-reverse' : 'row'
        }
      }, T.map(((e, s) =>i.createElement('div', {
        className: I ? '_2OzVW' : '_2eHne',
        key: s
      }, e.map((({
        token: e,
        index: d
      }, u) =>((e, s, d, u) =>{
        const g = t || !b.includes(s),
        f = e.transliteration && (0, Q.dN) (a, n, C) ? e.transliteration : void 0;
        return i.createElement('div', {
          className: '_35eLX',
          key: s
        }, i.createElement(ee.Z, {
          animation: p.includes(s) ? h : void 0,
          autoFocus: u.autoFocus,
          disabled: g,
          disabledStyle: b.includes(s) ? 'unstyled' : void 0,
          isCharacter: e.isCharacter,
          language: e.language,
          numberKey: w ? d : void 0,
          onTap: () =>(e=>{
            const t = window.performance.now();
            if (e === _) return m([]),
            void x(void 0);
            if (Object.prototype.hasOwnProperty.call(c, o[e].text)) {
              const n = c[o[e].text];
              n && (0, U.a1) (n, {
                requestedAt: t,
                text: o[e].text
              })
            }
            if (void 0 === _) return m([]),
            void x(e);
            const n = o[_];
            (0, ce.gQ) ('gradeCorrect') && (e = o.findIndex((e=>l[n.text].includes(e.text))));
            const a = o[e],
            s = [
              _,
              e
            ];
            if (void 0 !== _ && o[_].language === o[e].language) return m([]),
            void x(e);
            if (!l[n.text].includes(a.text)) return m(s),
            v({
              disabled: !1,
              name: 'INCORRECT'
            }),
            void x(void 0);
            const i = b.filter((e=>!s.includes(e)));
            m(s),
            v({
              disabled: !0,
              name: 'CORRECT'
            }),
            x(void 0),
            E(i),
            0 === i.length && (Ve.Z.start('challenge_grade', {
              startTime: t
            }), r([]))
          }) (s),
          selected: _ === s,
          size: ee.I.Large,
          text: e.text,
          transliteration: f
        }))
      }) (e, d, (0, z.cf) (s, u, R), {
        autoFocus: 0 === s && 0 === u
      }))))))))
    };
    class Dt extends i.Component {
      componentDidUpdate(e) {
        var t;
        const {
          challengeState: {
            guess: n
          },
          disabled: a
        }
        = this.props;
        a || (null === (t = e.challengeState.guess) || void 0 === t ? void 0 : t.translation) === (null == n ? void 0 : n.translation) || Ve.Z.finish('challenge_typing')
      }
      render() {
        var e,
        t;
        const {
          challenge: {
            articles: n,
            correctSolutions: a,
            images: s,
            svgs: r
          },
          challengeState: {
            guess: l
          },
          disabled: o,
          isDesktop: c,
          learningLanguage: d,
          onChange: u
        }
        = this.props,
        p = r && r.length > 0 ? r : s && s.length > 0 ? s : [
        ];
        return i.createElement('div', {
          className: '_2Uf-O _2RC-4 d84Fd'
        }, i.createElement('div', {
          className: '_1L8bD'
        }, p.map(((e, t) =>i.createElement('img', {
          className: '_1KSs_',
          key: t,
          src: e
        })))), i.createElement('div', {
          className: '_3dsyn'
        }, n ? i.createElement('div', {
          className: '_3yPbT _1dBSx'
        }, i.createElement(B.Z, {
          choices: n,
          correctIndex: n.findIndex((e=>(a || [
          ]).some((t=>t.startsWith(e))))),
          disabled: o,
          language: d,
          onChange: e=>u(Object.assign(Object.assign({
          }, l), {
            article: e
          })),
          onClick: () =>this.inputElement.focus(),
          onHotkey: () =>this.inputElement.focus(),
          overflowBehavior: {
            shouldHandleOverflow: !1
          },
          type: 'row',
          value: null == l ? void 0 : l.article
        })) : null, i.createElement(Pe, {
          autoFocus: c,
          disabled: o,
          inputLanguage: d,
          onChange: e=>{
            Ve.Z.start('challenge_typing');
            let t = null == l ? void 0 : l.article,
            a = e.target.value;
            n && n.forEach(((e, n) =>{
              (e.endsWith('\'') ? e : `${ e } `).toLowerCase() === a.toLowerCase() && n !== (null == l ? void 0 : l.article) && (t = n, a = '')
            })),
            u({
              article: t,
              translation: a
            })
          },
          placeholder: (0, _.H8) (17610, {
            language_name: (0, f.vY) (d)
          }),
          refCallback: e=>e && (this.inputElement = e),
          style: 'translation',
          value: null !== (e = null == l ? void 0 : l.translation) && void 0 !== e ? e : ''
        }), i.createElement(Xe.Z, {
          disabled: o,
          inputElement: this.inputElement,
          language: d,
          onChange: ({
          }, e) =>{
            Ve.Z.start('challenge_typing'),
            u(Object.assign(Object.assign({
            }, l), {
              translation: e
            }))
          },
          value: null !== (t = null == l ? void 0 : l.translation) && void 0 !== t ? t : ''
        })))
      }
    }
    class jt extends i.Component {
      constructor() {
        super (...arguments),
        this.choiceListRef = i.createRef(),
        this.choicesWrapper = null,
        this.passageWrapper = null,
        this.scrollToPassage = () =>{
          this.passageWrapper && (0, ct.zT) (this.passageWrapper, {
            behavior: 'smooth',
            block: 'center'
          })
        },
        this.scrollToEnd = () =>{
          this.choicesWrapper && (0, ct.zT) (this.choicesWrapper, {
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
      componentDidMount() {
        this.scrollToPassage()
      }
      componentDidUpdate(e) {
        var t;
        const {
          challengeState: {
            finishedPassage: n
          },
          isDesktop: a
        }
        = e,
        {
          challengeState: {
            finishedPassage: s
          },
          isDesktop: i
        }
        = this.props;
        (a !== i || n !== s) && (s ? this.scrollToEnd() : this.scrollToPassage()),
        n !== s && (null === (t = this.choiceListRef.current) || void 0 === t || t.focusFirstChoice())
      }
      render() {
        const {
          challenge: e,
          challengeState: {
            guess: t
          },
          challengeState: n,
          disabled: a,
          learningLanguage: s,
          onChange: r
        }
        = this.props,
        {
          choices: l,
          correctIndex: o,
          passage: c,
          passageTokens: d,
          question: u,
          questionTokens: p
        }
        = e,
        {
          finishedPassage: m
        }
        = n;
        return i.createElement('div', {
          className: '_3Vm8B _2RC-4 d84Fd'
        }, i.createElement('div', {
          className: '_1iPXH _2Hg6H',
          dir: (0, f.Ux) (s),
          ref: e=>this.passageWrapper = e
        }, i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'normal',
          isForward: !0,
          language: s,
          tokens: null != d ? d : [
            {
              value: c
            }
          ]
        })), i.createElement(nt.Z, {
          isVisible: m
        }, i.createElement('div', {
          ref: e=>this.choicesWrapper = e
        }, u ? i.createElement('div', {
          className: '_9XgpY _2Hg6H _1dBSx _3slGi',
          dir: (0, f.Ux) (s)
        }, i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'normal',
          inTabOrder: m,
          isForward: !0,
          language: s,
          tokens: null != p ? p : [
            {
              value: u
            }
          ]
        })) : null, i.createElement(B.Z, {
          choices: l,
          correctIndex: o,
          disabled: a || !m,
          language: s,
          onChange: r,
          overflowBehavior: {
            shouldHandleOverflow: !1
          },
          ref: this.choiceListRef,
          type: 'column',
          value: t
        }))))
      }
    }
    const Zt = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_3JMPJ _2RC-4 d84Fd',
      'wrap-character': '_3XmF6 _1lDmW d84Fd',
      'minimal-pairs-wrap': '_1IIqD _2RC-4 d84Fd',
      'minimal-pairs-wrap-character': 'dDtXW _1lDmW d84Fd',
      prompt: 'CFyoZ',
      'prompt-character': '_1IvWc _2h7SO',
      answer: '_2jUcI',
      'answer-character': 'qnW78 _1zSeg'
    },
    Pt = e=>e.type === S.Sm.SelectPronunciation,
    Ot = ({
      challenge: e
    }) =>i.createElement('span', null, (0, _._i) ((Pt(e), 21070))),
    At = ({
      challenge: e,
      challenge: {
        character: t,
        choices: n,
        correctIndex: a,
        gradingResult: s,
        isOptionTtsDisabled: r,
        skipped: l
      },
      challengeState: {
        guess: o
      },
      disabled: c,
      learningLanguage: d,
      onChange: u
    }) =>{
      const p = (0, Z.tX) (),
      [
        m,
        g
      ] = i.useState(0),
      h = () =>g((e=>e + 1));
      i.useEffect((() =>{
        m > 1 && p({
          type: 'CHALLENGE_HAS_BROKEN_TTS'
        })
      }), [
        m
      ]);
      const v = i.createElement(N.Z, {
        audio: Pt(e) ? e.choices[a].tts : e.tts,
        autoplay: !0,
        soundOptions: {
          eventListeners: [
            ['error',
            h]
          ]
        },
        style: t ? 'in-character-popover' : void 0,
        ttsTrackingData: {
          text: e.choices[a].text
        },
        type: 'large'
      }),
      _ = 2 === e.choices.length;
      return i.createElement('div', {
        className: Zt[`${ _ ? 'minimal-pairs-' : '' }wrap${ t ? '-character' : '' }`]
      }, i.createElement('div', {
        className: Zt['prompt' + (t ? '-character' : '')]
      }, t ? i.createElement($e, {
        character: t,
        correct: l || null == s ? void 0 : s.correct,
        hasOnlyIcons: !0
      }, i.createElement('span', null, v)) : v), i.createElement(B.Z, {
        autoFocus: !0,
        choiceStyle: _ ? void 0 : 'TALL',
        choices: e.choices.map((e=>e.text)),
        className: Zt['answer' + (t ? '-character' : '')],
        correctIndex: a,
        disabled: c,
        language: d,
        onChange: e=>{
          const t = window.performance.now();
          u(e);
          const {
            text: a,
            tts: s
          }
          = n[e];
          s && !0 !== r && (0, U.a1) (s, {
            requestedAt: t,
            text: a
          }, {
            eventListeners: [
              ['error',
              h]
            ]
          })
        },
        overflowBehavior: {
          shouldHandleOverflow: !1
        },
        type: _ ? 'two-columns-desktop-column-mobile' : 'two-columns',
        value: o
      }))
    },
    Mt = [
      0.3,
      0,
      0.1,
      0.3,
      0.5,
      0.7,
      1,
      1,
      0.7,
      0.5,
      0.3,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1
    ],
    Ht = [
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01,
      0.01
    ],
    Bt = () =>{
      const e = e=>e.map((e=>5 + 40 * Math.abs(e))),
      [
        t,
        n
      ] = i.useState((() =>e(Ht)));
      return i.useEffect((() =>{
        const t = setInterval((() =>{
          const t = 0.7 * Math.random() + 0.3;
          n(e(Mt.map((e=>e * t))))
        }), 200);
        return () =>clearInterval(t)
      }), [
      ]),
      i.createElement(i.Fragment, null, t.map(((e, n) =>i.createElement('div', {
        className: 'G-Ntw',
        key: n,
        style: {
          marginRight: n === t.length - 1 ? 0 : '4px'
        }
      }, i.createElement('div', {
        className: s() ('_3tR6t', '_2zcLK'),
        style: {
          height: `${ e }px`
        }
      })))))
    },
    Ut = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: 'xGDib _2RC-4 d84Fd',
      'wrap-character': '_CDfV d84Fd',
      prompt: '_2k70e _2Hg6H',
      'prompt-character': 'AHoOE _2h7SO _2Hg6H',
      speaker: '_29KvH _3CmzM _371Cf',
      'speaker-inverse': '_3W_cR _31Egf _371Cf',
      answer: '_1lOuO',
      bordered: '_2GRGJ _1QDX9 st_Fn _2ti2i sXpqy',
      recording: '_3LJUV',
      button: 'FKD2y',
      'button-character': '_13TEM _2HRY_',
      mic: '_1T78c',
      'mic-character': 'hQACf',
      'mic-shrink': '_2okGc',
      'shrink-out': '_2LURC',
      square: '_3gTry',
      'grow-in-large': '_1-WnB',
      'grow-in-small': '_13exE',
      'square-blue': '_1SDVx'
    };
    var Gt = n(11202),
    qt = n(21061);
    const Wt = JSON.parse('{"en":{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety","100":"hundred","1000":"thousand"},"de":{"0":"null","1":"ein","2":"zwei","3":"drei","4":"vier","5":"fünf","6":"sechs","7":"sieben","8":"acht","9":"neun","10":"zehn","11":"elf","12":"zwölf","13":"dreizehn","14":"vierzehn","15":"fünfzehn","16":"sechzehn","17":"siebzehn","18":"achtzehn","19":"neunzehn","20":"zwanzig","21":"einundzwanzig","22":"zweiundzwanzig","23":"dreiundzwanzig","24":"vierundzwanzig","25":"fünfundzwanzig","26":"sechsundzwanzig","27":"siebenundzwanzig","28":"achtundzwanzig","29":"neunundzwanzig","30":"dreißig","31":"einunddreißig","32":"zweiunddreißig","33":"dreiunddreißig","34":"vierunddreißig","35":"fünfunddreißig","36":"sechsunddreißig","37":"siebenunddreißig","38":"achtunddreißig","39":"neununddreißig","40":"vierzig","41":"einundvierzig","42":"zweiundvierzig","43":"dreiundvierzig","44":"vierundvierzig","45":"fünfundvierzig","46":"sechsundvierzig","47":"siebenundvierzig","48":"achtundvierzig","49":"neunundvierzig","50":"fünfzig","51":"einundfünfzig","52":"zweiundfünfzig","53":"dreiundfünfzig","54":"vierundfünfzig","55":"fünfundfünfzig","56":"sechsundfünfzig","57":"siebenundfünfzig","58":"achtundfünfzig","59":"neunundfünfzig","60":"sechzig","61":"einundsechzig","62":"zweiundsechzig","63":"dreiundsechzig","64":"vierundsechzig","65":"fünfundsechzig","66":"sechsundsechzig","67":"siebenundsechzig","68":"achtundsechzig","69":"neunundsechzig","70":"siebzig","71":"einundsiebzig","72":"zweiundsiebzig","73":"dreiundsiebzig","74":"vierundsiebzig","75":"fünfundsiebzig","76":"sechsundsiebzig","77":"siebenundsiebzig","78":"achtundsiebzig","79":"neunundsiebzig","80":"achtzig","81":"einundachtzig","82":"zweiundachtzig","83":"dreiundachtzig","84":"vierundachtzig","85":"fünfundachtzig","86":"sechsundachtzig","87":"siebenundachtzig","88":"achtundachtzig","89":"neunundachtzig","90":"neunzig","91":"einundneunzig","92":"zweiundneunzig","93":"dreiundneunzig","94":"vierundneunzig","95":"fünfundneunzig","96":"sechsundneunzig","97":"siebenundneunzig","98":"achtundneunzig","99":"neunundneunzig","100":"hundert","123":"hundertdreiundzwanzig","1000":"tausend"},"es":{"0":"cero","1":"uno","2":"dos","3":"tres","4":"cuatro","5":"cinco","6":"seis","7":"siete","8":"ocho","9":"nueve","10":"diez","11":"once","12":"doce","13":"trece","14":"catorce","15":"quince","16":"dieciséis","17":"diecisiete","18":"dieciocho","19":"diecinueve","20":"veinte","21":"veintiuno","22":"veintidós","23":"veintitrés","24":"veinticuatro","25":"veinticinco","26":"veintiséis","27":"veintisiete","28":"veintiocho","29":"veintinueve","30":"treinta","40":"cuarenta","50":"cincuenta","60":"sesenta","70":"setenta","80":"ochenta","90":"noventa","100":"cien","1000":"mil"},"pt":{"0":"zero","1":"um","2":"dois","3":"três","4":"quatro","5":"cinco","6":"seis","7":"sete","8":"oito","9":"nove","10":"dez","11":"onze","12":"doze","13":"treze","14":"catorze","15":"quinze","16":"dezesseis","17":"dezessete","18":"dezoito","19":"dezenove","20":"vinte","30":"trinta","40":"quarenta","50":"cinquenta","60":"sessenta","70":"setenta","80":"oitenta","90":"noventa","100":"cem","1000":"mil"},"it":{"0":"zero","1":"uno","2":"due","3":"tre","4":"quattro","5":"cinque","6":"sei","7":"sette","8":"otto","9":"nove","10":"dieci","11":"undici","12":"dodici","13":"tredici","14":"quattordici","15":"quindici","16":"sedici","17":"diciassette","18":"diciotto","19":"diciannove","20":"venti","30":"trenta","40":"quaranta","50":"cinquanta","60":"sessanta","70":"settanta","80":"ottanta","90":"novanta","100":"cento","1000":"mille"},"fr":{"0":"zéro","1":"un","2":"deux","3":"trois","4":"quatre","5":"cinq","6":"six","7":"sept","8":"huit","9":"neuf","10":"dix","11":"onze","12":"douze","13":"treize","14":"quatorze","15":"quinze","16":"seize","17":"dix-sept","18":"dix-huit","19":"dix-neuf","20":"vingt","30":"trente","40":"quarante","50":"cinquante","60":"soixante","70":"soixante-dix","80":"quatre-vingts","90":"quatre-vingt-dix","100":"cent","1000":"mille"}}');
    var Vt = n(43006);
    const $t = {
      es: {
        a: /[á]/g,
        b: /[v]/g,
        e: /[é]/g,
        i: /[í]/g,
        o: /[ó]/g,
        s: /[z]/g,
        u: /[úü]/g
      },
      fr: {
        a: /[àâæ]/g,
        e: /[èéêë]/g,
        i: /[îï]/g,
        o: /[ôœ]/g,
        s: /[ç]/g,
        u: /[ùûü]/g
      }
    },
    Xt = (e, t) =>{
      if (t && (t = t.toLowerCase(), e in $t)) for (const [n,
      a]of Object.entries($t[e])) t = t.replace(a, n);
      return t || ''
    },
    Kt = (e, t) =>{
      if (t && ('en' === e && (t = (t = (t = (t = (t = t.replace(/'s/g, ' is')).replace(/'m/g, ' am')).replace(/'re/g, ' are')).replace(/'ll/g, ' will')).replace(/'ve/g, ' have')), e in Wt)) for (const [n,
      a]of Object.entries(Wt[e])) {
        const e = new RegExp(`\b${ n }\b`, 'g');
        t = t.replace(e, a)
      }
      return t || ''
    },
    Yt = e=>new RegExp(`^[${ Vt.ls }]+$`, 'g').test(e),
    Jt = e=>{
      if (e) {
        const t = new RegExp(`[${ Vt.ls }]`, 'g'),
        n = /[\u00C0-\u1FFF\u2C00-\uD7FF\w]+([-'][\u00C0-\u1FFF\u2C00-\uD7FF\w])+/g,
        a = Array.from(e.matchAll(n)).map((e=>{
          const t = e.index;
          return {
            end: t + e[0].length,
            start: t
          }
        }));
        let s = '',
        i = 0;
        for (const n of a) i < n.start && (s += e.slice(i, n.start).replace(t, ' ')),
        s += e.slice(n.start, n.end),
        i = n.end;
        i < e.length && (s += e.slice(i).replace(t, ' ')),
        s = s.toLowerCase(),
        s = s.replace(/\s+/g, ' '),
        s = s.trim(),
        e = s
      }
      return e || ''
    },
    Qt = () =>{
      const e = new window.webkitSpeechRecognition;
      return e.continuous = !0,
      e.interimResults = !0,
      e
    },
    en = {
      da: 'da-DK',
      de: 'de-DE',
      en: 'en-US',
      es: 'es-MX',
      fr: 'fr-FR',
      it: 'it-IT',
      'nl-NL': 'nl-NL',
      'no-BO': 'nb-NO',
      pt: 'pt-BR',
      ru: 'ru-RU',
      sv: 'sv-SE',
      tr: 'tr-TR',
      uk: 'uk-UA'
    },
    tn = (0, d.$j) () (class extends i.Component {
      constructor() {
        super (...arguments),
        this.state = Object.assign({
          attempts: 0,
          gradingTimer: - 1,
          isTimeoutTriggered: !1,
          maxAttempts: 2,
          recognizer: Qt(),
          recordingTimer: - 1,
          reference: '',
          referenceNorm: '',
          referenceWords: [
          ],
          referenceWordsNorm: [
          ],
          usedGuesses: 1
        }, {
          googleError: null,
          isButtonDisabled: !1,
          isLoading: !1,
          isNotStartable: !1,
          isRecognitionActive: !1,
          isRecognized: !1,
          isRecording: !1,
          rawTranscriptNorm: '',
          showRecording: !1,
          solutionSequence: [
          ],
          solutionText: ''
        }),
        this.renderMicrophone = e=>{
          const {
            disabled: t
          }
          = this.props,
          {
            isLoading: n,
            isButtonDisabled: a
          }
          = this.state;
          return i.createElement('img', {
            className: s() (Ut['mic' + (e ? '-character' : '')], !e && n ? Ut['mic-shrink'] : ''),
            src: `https://d35aaqx5ub95lt.cloudfront.net/images/mic${ e ? a || t ? '-disabled-light' : '-blue' : a || t ? '-disabled' : '' }.svg`
          })
        },
        this.alignSolution = e=>{
          const t = this.findBestMatch(e);
          for (const e of t) e >= 0 && (this.state.solutionSequence[e].isRecognized = !0);
          let n = '',
          a = !0;
          for (const e of this.state.solutionSequence) e.isRecognized ? n += `${ e.text } ` : a = !1;
          return this.setState({
            solutionText: n.trim()
          }),
          a || e.length / this.state.referenceNorm.length > 1.25
        },
        this.compareWords = (e, t) =>e && t ? 1 - (0, Gt.sd) (t, e) / t.length : 0,
        this.computeScore = (e = !1) =>{
          Ve.Z.start('challenge_grade'),
          Ve.Z.start('speech_grade');
          const {
            gradingTimer: t,
            reference: n,
            solutionText: a
          }
          = this.state;
          window.clearTimeout(t);
          const s = a.length / n.length;
          this.props.onChange({
            score: e ? 1 : s,
            usedGuesses: e || 'experiment' !== (0, de.j6) ('speak_web_retries', void 0) ? z.Tu : this.state.usedGuesses
          }),
          this.setState({
            attempts: this.state.attempts + 1,
            usedGuesses: this.state.usedGuesses + 1
          }),
          this.resetRecording()
        },
        this.findBestMatch = e=>{
          const t = e.split(/[\s]+/),
          n = [
          ];
          for (let e = 0; e < t.length; e++) {
            const a = t[e];
            let s = - 1,
            i = 0.2;
            if (a.length > 0) {
              for (let t = 0; t < this.state.referenceWordsNorm.length; t++) {
                const n = this.state.referenceWordsNorm[t];
                let r = this.compareWords(a, n);
                r -= 0.1 * Math.abs(a.length - n.length),
                r -= 0 * Math.abs(t - e),
                r > i && (i = r, s = t)
              }
              s = i > 0.2 ? s : - 1
            }
            n.push(s)
          }
          return n
        },
        this.getTimeout = e=>{
          const {
            reference: t,
            referenceNorm: n,
            solutionText: a
          }
          = this.state;
          let s = 5000 * (1 - Math.max(a.length / t.length, e.length / n.length));
          return s = s < 1000 ? 1000 : s,
          s
        },
        this.handleKeydown = e=>{
          const {
            disabled: t
          }
          = this.props,
          {
            isRecording: n
          }
          = this.state;
          t || 'Enter' !== e.key || (e.preventDefault(), e.stopPropagation(), n ? this.stopRecording() : this.startRecording())
        },
        this.handleTimeout = e=>{
          const {
            isRecording: t,
            recognizer: n
          }
          = this.state;
          t ? n.abort() : e && (this.setState({
            isRecognitionActive: !1
          }), this.makeDefaultCorrectSolution(), this.computeScore())
        },
        this.initChallengeSpecificVariables = e=>{
          for (const t of e.referenceWords) e.solutionSequence.push({
            isRecognized: !1,
            text: t
          })
        },
        this.makeDefaultCorrectSolution = () =>{
          this.setState({
            solutionSequence: [
              {
                isRecognized: !0,
                text: this.state.reference
              }
            ],
            solutionText: this.state.reference
          })
        },
        this.processReference = () =>{
          const {
            challenge: {
              prompt: e = ''
            },
            learningLanguage: t
          }
          = this.props,
          n = e;
          let a = n.split(/[\s]+/);
          const s = Xt(t, Jt(e)),
          i = s.split(/[\s]+/);
          if (a.length !== i.length) {
            const e = [
              a[0]
            ];
            for (let t = 1; t < a.length; ++t) Yt(a[t]) ? e[e.length - 1] += ` ${ a[t] }` : e.push(a[t]);
            if (e.length === i.length) a = e;
             else {
              const t = [
                e[e.length - 1]
              ];
              for (let n = e.length - 2; n >= 0; --n) Yt(e[n]) ? t[0] = `${ e[n] } ${ t[0] }` : t.unshift(e[n]);
              t.length === i.length && (a = t)
            }
          }
          const r = s;
          let l;
          return l = a.length === i.length ? i : a.map((e=>Xt(t, Jt(e)))),
          {
            reference: n,
            referenceNorm: r,
            referenceWords: a,
            referenceWordsNorm: l
          }
        },
        this.resetRecording = () =>{
          const {
            gradingTimer: e,
            recordingTimer: t
          }
          = this.state;
          window.clearTimeout(t),
          window.clearTimeout(e);
          const n = Object.assign(Object.assign({
          }, this.state), {
            googleError: null,
            isButtonDisabled: !1,
            isLoading: !1,
            isNotStartable: !1,
            isRecognitionActive: !1,
            isRecognized: !1,
            isRecording: !1,
            rawTranscriptNorm: '',
            showRecording: !1,
            solutionSequence: [
            ],
            solutionText: ''
          });
          this.initChallengeSpecificVariables(n),
          this.setState(n)
        },
        this.startRecording = () =>{
          (0, U.Ap) ();
          const {
            recognizer: e,
            isNotStartable: t
          }
          = this.state;
          if (!t) {
            this.resetRecording(),
            this.setState({
              isNotStartable: !0
            });
            try {
              e.start()
            } catch (e) {
              console.error('Recognizer already started!')
            }
          }
        },
        this.cancelRecording = () =>{
          if (this.state.isRecording) {
            const {
              recognizer: e
            }
            = this.state;
            this.resetRecording(),
            this.setState({
              isRecording: !1
            }),
            e.stop()
          }
        },
        this.stopRecording = () =>{
          const {
            recognizer: e
          }
          = this.state;
          this.setState({
            gradingTimer: window.setTimeout((() =>this.handleTimeout(!0)), 5000),
            isButtonDisabled: !0,
            isNotStartable: !1,
            isRecording: !1
          }),
          e.stop()
        }
      }
      componentDidMount() {
        const {
          recognizer: e
        }
        = this.state,
        {
          dispatch: t,
          learningLanguage: n
        }
        = this.props;
        e.lang = en[n] || n,
        this.setState(this.processReference()),
        e.onstart = () =>this.setState({
          isLoading: !0,
          isRecognitionActive: !0
        }),
        e.onaudiostart = () =>this.setState({
          isLoading: !1,
          isRecording: !0,
          showRecording: !0
        }),
        e.onaudioend = () =>this.setState({
          showRecording: !1
        }),
        e.onresult = t=>{
          window.clearTimeout(this.state.recordingTimer);
          let a = '',
          s = '';
          for (let e = t.resultIndex; e < t.results.length; ++e) {
            const n = t.results[e][0].transcript.trim();
            t.results[e].isFinal ? a += `${ n } ` : s += `${ n } `
          }
          let i = `${ a } ${ s }`;
          i = Kt(n, i);
          const r = Xt(n, Jt(i)).trim();
          let l = !1;
          const o = {
          };
          if (r && this.state.rawTranscriptNorm !== r && (o.rawTranscriptNorm = r, l = this.alignSolution(r), l && e.abort()), !l) {
            const e = this.getTimeout(r);
            o.recordingTimer = window.setTimeout((() =>this.handleTimeout(!1)), e)
          }
          u.xb(o) || this.setState(o)
        },
        e.onend = () =>{
          this.state.isRecognitionActive && (window.clearTimeout(this.state.recordingTimer), this.state.isRecording && this.stopRecording(), this.setState({
            isRecognitionActive: !1
          }), this.computeScore())
        },
        e.onerror = n=>{
          if ('aborted' !== n.error) switch (e.abort(), this.setState({
              googleError: n.error,
              isLoading: !1,
              isRecognitionActive: !1,
              isRecording: !1,
              showRecording: !1
            }), n.error) {
            case 'audio-capture':
              console.error('Audio capture failed'),
              t({
                options: {
                  message: (0, _.H8) (14437),
                  name: x.tl.Alert,
                  title: (0, _.H8) (14056)
                },
                type: 'TOGGLE_MODAL'
              });
              break;
            case 'network':
              console.error('Recognizer failed to connect'),
              this.computeScore(!0);
              break;
            case 'no-speech':
              console.error('No speech detected'),
              this.computeScore();
              break;
            case 'not-allowed':
              console.warn('Microphone permission denied'),
              'experiment' === (0, de.j6) ('speak_allow_continue_block_microphone', void 0) ? (t({
                type: 'SPEECH_RECOGNIZER_REJECTED'
              }), t({
                type: 'UPDATE_USER',
                user: {
                  enableMicrophone: !1
                }
              }), t((0, we.YK) (!0, Date.now()))) : t({
                options: {
                  name: x.tl.AllowMicrophone
                },
                type: 'TOGGLE_MODAL'
              });
              break;
            case 'language-not-supported':
              console.warn('Recognizer does not support language'),
              (0, E.j) ('recognizer_failed', {
              }),
              t({
                type: 'SPEECH_RECOGNIZER_FAILED'
              }),
              t({
                speakDisabledUntil: (0, qt.Zo) () + (0, qt.dz) ({
                  days: 21
                }),
                type: 'DISABLE_SPEAK'
              }),
              t((0, we.YK) (!0, Date.now()));
              break;
            default:
              this.computeScore(!0),
              (0, b.Kp) ('Exception from recognizer', {
                data: n.error
              })
          }
        },
        ue.U.addListener(document, 'keydown', this.handleKeydown)
      }
      componentDidUpdate(e) {
        const {
          disabled: t
        }
        = this.props,
        {
          recognizer: n
        }
        = this.state;
        !e.disabled && t && n.abort()
      }
      componentWillUnmount() {
        const {
          recognizer: e
        }
        = this.state;
        e.abort(),
        ue.U.removeListener(document, 'keydown', this.handleKeydown)
      }
      render() {
        const {
          challenge: e,
          challenge: {
            character: t,
            gradingResult: n,
            skipped: a
          },
          disabled: r,
          dispatch: l,
          hints: o,
          learningLanguage: c
        }
        = this.props,
        {
          isRecording: d,
          isButtonDisabled: u,
          solutionSequence: m = [
          ]
        }
        = this.state,
        g = [
        ];
        for (let e = 0; e < m.length; ++e) m[e].isRecognized && g.push(e);
        const h = i.createElement('div', {
          className: s() ({
            [
              Ut.bordered
            ]: !t,
            [
              Ut.recording
            ]: d
          }),
          dir: (0, f.Ux) (c)
        }, i.createElement(N.Z, {
          audio: e.tts,
          autoplay: !0,
          className: Ut['speaker' + (t ? '-inverse' : '')],
          dir: (0, f.Ux) (c),
          onTryPlay: this.cancelRecording,
          style: t ? 'in-text' : void 0,
          ttsTrackingData: {
            text: e.prompt
          },
          type: 'small',
          useKeyboardShortcut: !0
        }), (null == o ? void 0 : o.length) ? i.createElement(Oe.Z, {
          disableTTS: !1,
          highlightStyle: 'normal',
          highlights: o.map(((e, t) =>({
            highlightIndex: t,
            token: e
          }))).filter((({
            token: e
          }) =>void 0 !== e.hintTable)).filter((({
          }, e) =>g.includes(e))).map((({
            highlightIndex: e
          }) =>e)),
          isForward: !0,
          language: c,
          onTryPlayTts: this.cancelRecording,
          tokens: o
        }) : i.createElement('span', null, e.prompt)),
        v = 'experiment' === (0, de.j6) ('speak_web_port_speak_waveform', void 0);
        return i.createElement('div', {
          className: Ut['wrap' + (t ? '-character' : '')]
        }, i.createElement('div', {
          className: Ut['prompt' + (t ? '-character' : '')]
        }, t ? i.createElement($e, {
          character: t,
          correct: a || null == n ? void 0 : n.correct
        }, h) : h), i.createElement('div', {
          className: Ut.answer
        }, i.createElement(p.Z, {
          className: s() ({
            [
              Ut.button
            ]: !t,
            [
              Ut['button-character']
            ]: t
          }),
          color: 'macaw',
          disabled: u || r,
          onClick: d ? this.stopRecording : () =>{
            this.startRecording(),
            l({
              status: pe.cS.Guessing,
              type: 'SET_PLAYER_STATUS'
            })
          },
          variant: t ? 'stroke' : 'solid'
        }, v && t ? d ? i.createElement(Bt, null) : this.renderMicrophone(!!t) : d ? i.createElement('span', {
          className: Ut['square' + (t ? '-blue' : '')]
        }) : this.renderMicrophone(!!t), v ? t && !d ? (0, _._i) (17130) : null : t ? (0, _._i) (d ? 19908 : 17130) : null)))
      }
    }),
    nn = {
      da: 'da-DK',
      de: 'de-DE',
      en: 'en-US',
      es: 'es-MX',
      fr: 'fr-FR',
      it: 'it-IT',
      'nl-NL': 'nl-NL',
      'no-BO': 'nb-NO',
      pt: 'pt-BR',
      ru: 'ru-RU',
      sv: 'sv-SE',
      tr: 'tr-TR',
      uk: 'uk-UA'
    };
    class an {
      constructor(e, t) {
        this.isDone = !1,
        this.processRecognizerResult = e=>{
          let t = '',
          n = '';
          for (let a = e.resultIndex; a < e.results.length; ++a) {
            const s = e.results[a][0].transcript.trim();
            e.results[a].isFinal ? t += `${ s } ` : n += `${ s } `
          }
          let a = `${ t } ${ n }`;
          a = Kt(this.learningLanguage, a);
          const s = Xt(this.learningLanguage, Jt(a)).trim();
          let i = !1;
          return s && this.rawTranscriptNorm !== s && (this.alignSolution(s), i = !0),
          this.rawTranscriptNorm = s,
          i
        },
        this.getProgress = () =>{
          const e = this.solutionSequence.map((e=>e.isRecognized ? e.text : '')).join(' ');
          return Math.max(e.length / this.prompt.length, this.rawTranscriptNorm.length / this.referenceNorm.length)
        },
        this.alignSolution = e=>{
          const t = this.findBestMatch(e);
          for (const e of t) e >= 0 && (this.solutionSequence[e].isRecognized = !0);
          let n = !0;
          for (const e of this.solutionSequence) e.isRecognized || (n = !1);
          this.isDone = n
        },
        this.findBestMatch = e=>{
          const t = e.split(/[\s]+/),
          n = [
          ];
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            let r = - 1,
            l = 0.2;
            if (i.length > 0) {
              for (let t = 0; t < this.referenceWordsNorm.length; t++) {
                const n = this.referenceWordsNorm[t];
                let o = (s = n, (a = i) && s ? 1 - (0, Gt.sd) (s, a) / s.length : 0);
                o -= 0.1 * Math.abs(i.length - n.length),
                o -= 0 * Math.abs(t - e),
                o > l && (l = o, r = t)
              }
              r = l > 0.2 ? r : - 1
            }
            n.push(r)
          }
          var a,
          s;
          return n
        },
        this.learningLanguage = e,
        this.prompt = t;
        let n = t.split(/[\s]+/);
        const a = Xt(e, Jt(t)),
        s = a.split(/[\s]+/);
        if (n.length !== s.length) {
          const e = [
            n[0]
          ];
          for (let t = 1; t < n.length; ++t) Yt(n[t]) ? e[e.length - 1] += ` ${ n[t] }` : e.push(n[t]);
          if (e.length === s.length) n = e;
           else {
            const t = [
              e[e.length - 1]
            ];
            for (let n = e.length - 2; n >= 0; --n) Yt(e[n]) ? t[0] = `${ e[n] } ${ t[0] }` : t.unshift(e[n]);
            t.length === s.length && (n = t)
          }
        }
        const i = a;
        let r;
        r = n.length === s.length ? s : n.map((t=>Xt(e, Jt(t)))),
        this.rawTranscriptNorm = '',
        this.referenceNorm = i,
        this.referenceWordsNorm = r,
        this.solutionSequence = n.map((e=>({
          isRecognized: !1,
          text: e
        })))
      }
    }
    const sn = (e, t, n) =>{
      const [a,
      s] = i.useState({
        isDone: !1,
        recognizerTokens: [
          {
            isRecognized: !1,
            text: ''
          }
        ]
      }),
      [
        r,
        l
      ] = i.useState(!1),
      o = i.useRef(n),
      [
        c,
        d
      ] = i.useState(e),
      [
        u,
        p
      ] = i.useState(t);
      e === c && t === u || (s({
        isDone: !1,
        recognizerTokens: [
          {
            isRecognized: !1,
            text: ''
          }
        ]
      }), l(!1), d(e), p(t));
      const m = i.useRef(),
      g = () =>new class {
        constructor(e, t, n, a, s) {
          var i;
          this.recognizer = Qt(),
          this.start = () =>{
            this.recognizer.start()
          },
          this.stop = () =>{
            window.clearTimeout(this.recordingTimer),
            this.recognizer.abort(),
            this.updateRecognizerResults(this.duoRecognizerProcessor.solutionSequence, !0),
            this.onEnd()
          },
          this.onResult = e=>{
            if (window.clearTimeout(this.recordingTimer), this.duoRecognizerProcessor.processRecognizerResult(e) && this.updateRecognizerResults(this.duoRecognizerProcessor.solutionSequence, this.duoRecognizerProcessor.isDone), this.duoRecognizerProcessor.isDone) this.onEnd(),
            this.recognizer.abort();
             else {
              const e = this.duoRecognizerProcessor.getProgress(),
              t = Math.max(5000 * (1 - e), 1000);
              this.recordingTimer = window.setTimeout(this.stop, t)
            }
          },
          this.onError = e=>{
            'aborted' !== e.error && (this.handleError(e), window.clearTimeout(this.recordingTimer), this.recognizer.abort(), this.onEnd())
          },
          this.recognizer.lang = null !== (i = nn[a]) && void 0 !== i ? i : a,
          this.recognizer.onresult = this.onResult,
          this.recognizer.onerror = this.onError,
          this.duoRecognizerProcessor = new an(a, n),
          this.onEnd = t,
          this.updateRecognizerResults = e,
          this.updateRecognizerResults([{
            isRecognized: !1,
            text: ''
          }
          ], !1),
          this.handleError = s
        }
      }(((e, t) =>{
        s({
          isDone: t,
          recognizerTokens: e
        })
      }), (() =>{
        l(!1)
      }), e, t, (e=>o.current(e)));
      return i.useEffect((() =>(m.current = g(), () =>{
        var e;
        return null === (e = m.current) || void 0 === e ? void 0 : e.stop()
      })), [
        e,
        t
      ]),
      i.useEffect((() =>{
        o.current = n
      })),
      {
        isRecognizing: r,
        recognizerResults: a,
        resetRecognizer: () =>{
          var e;
          l(!1),
          null === (e = m.current) || void 0 === e || e.stop(),
          m.current = g()
        },
        startRecognizing: () =>{
          var e;
          l(!0),
          null === (e = m.current) || void 0 === e || e.start()
        },
        stopRecognizing: () =>{
          var e;
          l(!1),
          null === (e = m.current) || void 0 === e || e.stop()
        }
      }
    },
    rn = ({
      challenge: e,
      challenge: {
        character: t,
        gradingResult: n,
        skipped: a
      },
      disabled: r,
      learningLanguage: l,
      hints: o,
      onChange: c
    }) =>{
      const d = (0, Z.tX) (),
      [
        u,
        m
      ] = i.useState(1),
      g = (t = !1) =>{
        Ve.Z.start('challenge_grade'),
        Ve.Z.start('speech_grade');
        const n = w.map((e=>e.isRecognized ? e.text : '')).join(' ').length / e.prompt.length;
        c({
          score: t ? 1 : n,
          usedGuesses: t || 'experiment' !== (0, de.j6) ('speak_web_retries', void 0) ? z.Tu : u
        }),
        S(),
        m(u + 1)
      },
      {
        isRecognizing: h,
        recognizerResults: v,
        resetRecognizer: S,
        startRecognizing: k,
        stopRecognizing: y
      }
      = sn(e.prompt, l, (e=>{
        switch (e.error) {
          case 'audio-capture':
            console.error('Audio capture failed'),
            d({
              options: {
                message: (0, _.H8) (14437),
                name: x.tl.Alert,
                title: (0, _.H8) (14056)
              },
              type: 'TOGGLE_MODAL'
            });
            break;
          case 'network':
            console.error('Recognizer failed to connect'),
            g(!0);
            break;
          case 'no-speech':
            console.error('No speech detected'),
            g();
            break;
          case 'not-allowed':
            console.warn('Microphone permission denied'),
            'experiment' === (0, de.j6) ('speak_allow_continue_block_microphone', void 0) ? (d({
              type: 'SPEECH_RECOGNIZER_REJECTED'
            }), d({
              type: 'UPDATE_USER',
              user: {
                enableMicrophone: !1
              }
            }), d((0, we.YK) (!0, Date.now()))) : d({
              options: {
                name: x.tl.AllowMicrophone
              },
              type: 'TOGGLE_MODAL'
            });
            break;
          case 'language-not-supported':
            console.warn('Recognizer does not support language'),
            (0, E.j) ('recognizer_failed', {
            }),
            d({
              type: 'SPEECH_RECOGNIZER_FAILED'
            }),
            d({
              speakDisabledUntil: (0, qt.Zo) () + (0, qt.dz) ({
                days: 21
              }),
              type: 'DISABLE_SPEAK'
            }),
            d((0, we.YK) (!0, Date.now()));
            break;
          default:
            g(!0),
            (0, b.Kp) ('Exception from recognizer', {
              data: e.error
            })
        }
      })),
      w = v.recognizerTokens,
      C = 'experiment' === (0, de.j6) ('speak_web_port_speak_waveform', void 0);
      i.useEffect((() =>{
        v.isDone && g()
      }), [
        v.isDone
      ]);
      const T = i.useCallback((() =>{
        h ? y() : ((0, U.Ap) (), d({
          status: pe.cS.Guessing,
          type: 'SET_PLAYER_STATUS'
        }), k())
      }), [
        h
      ]);
      i.useEffect((() =>{
        if (!r) {
          const e = e=>{
            'Enter' === e.key && (e.preventDefault(), e.stopPropagation(), T())
          };
          return ue.U.addListener(document, 'keydown', e),
          () =>ue.U.removeListener(document, 'keydown', e)
        }
      }), [
        r,
        T
      ]);
      const R = () =>i.createElement('div', {
        className: s() ({
          [
            Ut.bordered
          ]: !t,
          [
            Ut.recording
          ]: h
        }),
        dir: (0, f.Ux) (l)
      }, i.createElement(N.Z, {
        audio: h ? '' : e.tts,
        autoplay: !0,
        className: Ut['speaker' + (t ? '-inverse' : '')],
        dir: (0, f.Ux) (l),
        disableAnimation: h,
        style: t ? 'in-text' : void 0,
        ttsTrackingData: {
          text: e.prompt
        },
        type: 'small',
        useKeyboardShortcut: !0
      }), (null == o ? void 0 : o.length) ? i.createElement(Oe.Z, {
        disableTTS: h,
        highlightStyle: 'normal',
        highlights: o.map(((e, t) =>({
          highlightIndex: t,
          token: e
        }))).filter((({
          token: e
        }) =>void 0 !== e.hintTable)).filter((({
        }, e) =>{
          var t;
          return null === (t = w[e]) || void 0 === t ? void 0 : t.isRecognized
        })).map((({
          highlightIndex: e
        }) =>e)),
        isForward: !0,
        language: l,
        tokens: o
      }) : i.createElement('span', null, e.prompt));
      return i.createElement('div', {
        className: Ut['wrap' + (t ? '-character' : '')]
      }, i.createElement('div', {
        className: Ut['prompt' + (t ? '-character' : '')]
      }, t ? i.createElement($e, {
        character: t,
        correct: a || null == n ? void 0 : n.correct
      }, R()) : R()), i.createElement('div', {
        className: Ut.answer
      }, i.createElement(p.Z, {
        className: s() ({
          [
            Ut.button
          ]: !t,
          [
            Ut['button-character']
          ]: t
        }),
        color: 'macaw',
        disabled: r,
        onClick: T,
        variant: t ? 'stroke' : 'solid'
      }, h ? C && t ? i.createElement(Bt, null) : i.createElement('span', {
        className: Ut['square' + (t ? '-blue' : '')]
      }) : (I = !!t, i.createElement('img', {
        className: Ut['mic' + (I ? '-character' : '')],
        src: `https://d35aaqx5ub95lt.cloudfront.net/images/mic${ I ? r ? '-disabled-light' : '-blue' : r ? '-disabled' : '' }.svg`
      })), C ? t && !h ? (0, _._i) (17130) : null : t ? (0, _._i) (h ? 19908 : 17130) : null)));
      var I
    },
    ln = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'gap-grid': '_1_ZMU',
      choice: '_1LQx7',
      'choice-hidden': '_70ERZ _1LQx7',
      'damaged-text-start': '_3dRoN k6MEx _3Z2cE _2A7uO _2gwtT _1nlVc _2fOC9 t5wFJ _3dtSu _25Cnc _3yAjN _3Ev3S _1figt _2mG9r _3tP0w',
      'size-large': '_2CJgg',
      'size-normal': '_1Uhbq'
    },
    on = void 0,
    cn = ({
      choice: e,
      damageStart: t,
      disabled: n,
      endRef: a,
      fullText: r,
      language: l,
      onTap: o,
      possibleChoices: c,
      size: d,
      tokenProps: u
    }) =>{
      const p = r.slice(0, t);
      return i.createElement(st, null, i.createElement('span', {
        className: ln['gap-grid']
      }, [
        on,
        ...c
      ].map(((t, r) =>{
        const c = t === e;
        return i.createElement('span', {
          className: ln['choice' + (c ? '' : '-hidden')],
          key: r
        }, i.createElement('span', {
          className: s() (ln['damaged-text-start'], ln[`size-${ d }`])
        }, p), t === on ? null : i.createElement(ee.Z, Object.assign({
          disabled: n || !c,
          disabledStyle: 'unstyled',
          language: l,
          onTap: o,
          ref: a,
          size: d,
          style: 'damaged-end-in-answer',
          text: t
        }, c ? u : {
        })))
      }))))
    },
    dn = 'V3M4U',
    un = ({
      headers: e,
      tableCells: t
    }) =>{
      const n = e && t[0] ? i.createElement('tr', {
        className: 'fvNJ1 _38esZ'
      }, t[0].map(((e, t) =>i.createElement('th', {
        className: dn,
        key: t
      }, e)))) : null,
      a = t.slice(1).map(((e, t) =>i.createElement('tr', {
        className: '_2GQkL _38esZ',
        key: t
      }, e.map(((e, t) =>i.createElement('td', {
        className: dn,
        key: t
      }, e))))));
      return i.createElement('table', {
        className: '_3Ixn-'
      }, n ? i.createElement('thead', null, n) : null, i.createElement('tbody', null, a))
    },
    pn = {
      'gap-grid': '_1Bh_M',
      choice: '_2Z2xv',
      'choice-hidden': '_2Hlc9 _2Z2xv'
    },
    mn = i.forwardRef((({
      animation: e,
      choices: t,
      disabled: n,
      highlightIndex: a,
      isComposing: s,
      language: r,
      onTap: l,
      selectedIndex: o,
      size: c
    }, d) =>{
      const u = t.find((({
      }, e) =>e === o));
      return i.createElement(st, null, i.createElement('div', {
        className: pn['gap-grid']
      }, t.map(((t, o) =>{
        const p = t === u;
        return i.createElement('span', {
          className: pn['choice' + (p ? '' : '-hidden')],
          key: o
        }, i.createElement(ee.Z, {
          animation: p ? e : void 0,
          disabled: n,
          disabledStyle: 'unstyled',
          highlightIndex: p ? a : void 0,
          isComposing: p ? s : void 0,
          language: r,
          onTap: l,
          ref: p ? d : void 0,
          size: c,
          text: t.text
        }))
      }))))
    })),
    gn = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_1jLeA _2RC-4 d84Fd',
      'wrap-image': '_2kgY1 _1jLeA _2RC-4 d84Fd',
      image: 'v230V _1KcR7',
      prompt: '_3NgMa _2Hg6H',
      answer: '_2n18_',
      'gap-wrap': '_1gad7'
    },
    hn = null;
    class vn extends i.Component {
      render() {
        const {
          challenge: e,
          challenge: {
            image: {
              svg: t
            }
          },
          challengeState: {
            guess: n
          },
          disabled: a,
          fromLanguage: s,
          isDesktop: r,
          learningLanguage: l,
          onChange: o
        }
        = this.props;
        return i.createElement('div', {
          className: '_2zOxH _2RC-4 d84Fd'
        }, i.createElement('img', {
          className: '_3EVyz _1KcR7',
          src: t
        }), i.createElement(wt, {
          challengeType: S.Sm.TapDescribe,
          choices: e.choices,
          correctIndices: e.correctIndices,
          disabled: a,
          isDesktop: r,
          language: l,
          onChange: o,
          onUnhandledOverflow: () =>(0, E.j) ('challenge_overflow', {
            challenge_type: 'tap_describe',
            prompt: e.correctSolutions[0]
          }),
          playTtsOnSelect: !0,
          typeToSelectSupported: (0, z.jc) ({
            fromLanguage: s,
            learningLanguage: l
          }),
          value: null != n ? n : [
          ]
        }))
      }
    }
    const _n = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_3l4uE _3IQqi _2RC-4 d84Fd',
      'wrap-character': '_1Zh-d _1lDmW d84Fd',
      prompt: 'H_bo3 _2Hg6H',
      'prompt-firefox-transliterations': '_2VivE',
      'prompt-character': '_2qYLw _3oxW8 _2Hg6H',
      speaker: '_34ccl _3CmzM _371Cf',
      'speaker-inverse': '_21LCG _31Egf _371Cf',
      'speaker-transliterations': '_2jV7V',
      answer: '_2y3vz _2Nv1I _qg8x',
      'answer-character': '_3GhCe _1zSeg _qg8x'
    };
    var fn = n(74597);
    const xn = i.forwardRef((({
      autoFocus: e = !1,
      damageStart: t = 0,
      disabled: n,
      fullText: a,
      onChange: s,
      onFocus: r,
      value: l
    }, o) =>{
      const c = a.slice(0, t),
      d = a.slice(t),
      u = t > 0 ? Vt.qv : (0, _.H8) (20190);
      return i.createElement('span', {
        className: '_1Nr7C'
      }, i.createElement('span', {
        className: '_1O_I2'
      }, t > 0 ? i.createElement('span', {
        className: '_1FEiz'
      }, c) : null, i.createElement('span', {
        className: t > 0 ? '_3bKcr' : '_1Rf3h'
      }, i.createElement(Ae, null, `_${ d }`), i.createElement(Ae, null, u), i.createElement('input', Object.assign({
      }, je.N, {
        autoFocus: e,
        className: 'Y5JxA _17nEt sXpqy',
        disabled: n,
        maxLength: Math.max(d.length + 1, u.length),
        onChange: e=>s(e.target.value),
        onFocus: r,
        placeholder: t > 0 ? '' : u,
        ref: o,
        size: 1,
        type: 'text',
        value: l
      })))))
    })),
    bn = e=>void 0 !== e.damageStart,
    En = ({
      challenge: e
    }) =>e.type === S.Sm.TypeClozeTable ? i.createElement('span', null, (0, _._i) (7721)) : i.createElement('span', null, (0, _._i) (2082)),
    Sn = ({
      challenge: {
        displayTableTokens: e,
        headers: t,
        newWords: n,
        tableTokens: a
      },
      challengeState: {
        guess: s = [
        ]
      },
      disabled: r,
      learningLanguage: l,
      onChange: o
    }) =>{
      var c,
      d,
      u;
      const p = i.useRef(new Array(e.length).fill([]).map((() =>new Array(e[0].length)))),
      [
        m,
        g
      ] = i.useState((() =>(0, D.ao) (e))),
      h = e=>{
        const t = s.map((t=>t.rowIndex === e.rowIndex && t.colIndex === e.colIndex ? e : t));
        o(t)
      };
      return i.createElement('div', {
        dir: (0, f.Ux) (l)
      }, i.createElement(un, {
        headers: t,
        tableCells: (0, D.tl) (e, a, ((e, t, a) =>{
          var o;
          const {
            colIndex: c,
            rowIndex: d
          }
          = e,
          u = s.find((e=>e.colIndex === c && e.rowIndex === d));
          return (bn(t) || (e=>e.isBlank) (t)) && u ? i.createElement(xn, {
            autoFocus: e.colIndex === s[0].colIndex && e.rowIndex === s[0].rowIndex,
            damageStart: bn(t) ? t.damageStart : void 0,
            disabled: r,
            fullText: t.text,
            onChange: e=>h({
              colIndex: c,
              guess: e,
              rowIndex: d
            }),
            onFocus: () =>{
              g(e)
            },
            ref: t=>{
              m.colIndex === c && m.rowIndex === d && (p.current[e.rowIndex][e.colIndex] = t)
            },
            value: null !== (o = u.guess) && void 0 !== o ? o : ''
          }) : a ? i.createElement(Oe.Z, {
            disableTTS: !1,
            highlightStyle: 'new-word',
            highlights: (null == n ? void 0 : n.includes(a.value)) ? [
              0
            ] : [
            ],
            inTabOrder: !1,
            isForward: !0,
            language: l,
            tokens: [
              a
            ]
          }) : i.createElement('div', null, t.text)
        }))
      }), i.createElement(Xe.Z, {
        disabled: r,
        inputElement: null !== (c = p.current[m.colIndex][m.rowIndex]) && void 0 !== c ? c : void 0,
        language: l,
        onChange: ({
        }, e) =>h(Object.assign(Object.assign({
        }, m), {
          guess: e
        })),
        value: null !== (u = null === (d = s.find((e=>e.rowIndex === m.rowIndex && e.colIndex === m.colIndex))) || void 0 === d ? void 0 : d.guess) && void 0 !== u ? u : ''
      }))
    },
    kn = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      header: '_2LZl6',
      'indicator-and-header': 'FZpIH',
      _challenge: 'FQpeZ',
      '_challenge-container': 'lHi6I _32AJE',
      '_layout-grid-gap': 'LI3ZR',
      challenge: 'e4VJZ FQpeZ',
      'challenge-incremental': '_2MbQa FQpeZ',
      'challenge-container-centered': 'uH5m4 lHi6I _32AJE LI3ZR',
      'content-centered': '_3D1I4',
      'challenge-container-incremental': 'I9ZuQ lHi6I _32AJE',
      'spacing-visible': 'hJyup',
      'spacing-invisible': '_1n8fO',
      'content-incremental': '_3OsyP LI3ZR',
      scrollable: '_1IoIW',
      unscrollable: 'Ib6Jz',
      'content-top-aligned': '_1Q4AY'
    },
    yn = ({
      challenge: e,
      content: t,
      header: n
    }) =>i.createElement('div', Object.assign({
    }, (0, Ee._q) (Se.V.Challenge, `challenge-${ e.type }`), {
      className: kn.challenge
    }), i.createElement('div', {
      className: kn['challenge-container-centered']
    }, n, i.createElement('div', {
      className: kn['content-centered']
    }, t))),
    wn = ({
      challenge: e,
      content: t,
      header: n
    }) =>i.createElement('div', Object.assign({
    }, (0, Ee._q) (Se.V.Challenge, `challenge-${ e.type }`), {
      className: kn.challenge
    }), i.createElement('div', {
      className: kn['challenge-container-centered']
    }, n, t)),
    Cn = ({
      challenge: e,
      challengeState: t,
      content: n,
      header: a
    }) =>{
      const r = (0, v.j4) ({
        challenge: e,
        challengeState: t
      });
      return i.createElement('div', Object.assign({
      }, (0, Ee._q) (Se.V.Challenge, `challenge-${ e.type }`), {
        className: kn['challenge-incremental']
      }), i.createElement('div', {
        className: s() (kn['challenge-container-incremental'], kn[(r ? '' : 'un') + 'scrollable'])
      }, i.createElement('div', {
        className: kn[`spacing-${ r ? 'in' : '' }visible`]
      }), i.createElement('div', {
        className: kn['content-incremental']
      }, a, n)))
    },
    Nn = {
      [
        S.Sm.Assist
      ]: {
        Container: wn,
        Content: e=>{
          const {
            challenge: {
              correctIndex: t,
              options: n
            },
            challengeState: {
              guess: a
            },
            disabled: s,
            learningLanguage: r,
            onChange: l
          }
          = e;
          return i.createElement(B.Z, {
            autoFocus: !0,
            choices: n.map((e=>e.text)),
            className: 'MNYeE _2Nv1I',
            correctIndex: t,
            disabled: s,
            language: r,
            onChange: e=>{
              const t = window.performance.now();
              l(e);
              const {
                text: a,
                tts: s
              }
              = n[e];
              s && (0, U.a1) (s, {
                requestedAt: t,
                text: a
              })
            },
            overflowBehavior: {
              shouldHandleOverflow: !1
            },
            type: 'column',
            value: a
          })
        },
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (19598, {
          word: e.prompt
        }))
      },
      [
        S.Sm.CharacterIntro
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            choices: e,
            choiceTransliterations: t,
            correctIndex: n,
            prompt: a,
            tts: s
          },
          challengeState: {
            guess: r
          },
          disabled: l,
          fromLanguage: o,
          learningLanguage: c,
          onChange: d
        }) =>{
          const u = i.useRef([]),
          p = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings)),
          {
            scale: m
          }
          = J(u, {
            maxScale: 1
          });
          return i.createElement('div', {
            className: 'PSWw2 _2RC-4 d84Fd'
          }, i.createElement('div', {
            className: '_11apW'
          }, i.createElement(Y.Z, {
            className: '_2QCqu',
            fontSize: 72,
            learningLanguage: c,
            ref: e=>u.current[0] = e,
            scale: m
          }, a), i.createElement(N.Z, {
            audio: s,
            autoplay: !0,
            className: '_215P9',
            ttsTrackingData: {
              text: a
            },
            type: 'small',
            useKeyboardShortcut: !0
          })), i.createElement(B.Z, {
            autoFocus: !0,
            choiceTransliterations: t && (0, Q.dN) (c, o, p) ? t : void 0,
            choices: e,
            correctIndex: n,
            disabled: l,
            language: c,
            onChange: d,
            overflowBehavior: {
              shouldHandleOverflow: !1
            },
            type: 'column-desktop-row-mobile',
            value: r
          }))
        },
        Header: () =>i.createElement('span', null, (0, _._i) (15437))
      },
      [
        S.Sm.CharacterMatch
      ]: {
        Container: yn,
        Content: zt,
        Header: Ft
      },
      [
        S.Sm.CharacterPuzzle
      ]: {
        Container: yn,
        Content: e=>{
          var t;
          const {
            disabled: n,
            learningLanguage: a,
            challenge: r,
            onChange: l
          }
          = e,
          [
            o,
            c
          ] = i.useState([]),
          [
            d
          ] = i.useState((() =>(e=>{
            const t = e.map(((e, t) =>Object.assign(Object.assign({
            }, e), {
              originalIndex: t
            })));
            return (0, ce.gQ) ('sampleSession') ? t : u.TV([...t])
          }) (r.choices))),
          [
            p,
            m
          ] = i.useState((() =>r.gridItems.map((e=>({
            colStart: e.colStart,
            numCols: e.colEnd - e.colStart,
            numRows: e.rowEnd - e.rowStart,
            rowStart: e.rowStart
          }))))),
          [
            h,
            v
          ] = i.useState(0),
          [
            _,
            x
          ] = i.useState(),
          [
            b,
            E
          ] = i.useState(),
          k = ![S.A.HardChallenge,
          S.A.LimitedTts].includes(r.indicatorType),
          y = (0, Z.Fx) (g.lA),
          w = e=>{
            if (y.status === pe.cS.Blaming) return;
            const t = p[e].choiceIndex;
            void 0 !== t && (k && (0, U.GN) (d[t].tts), c(o.filter((t=>t !== p[e].choiceIndex)))),
            v(e);
            const n = p.map(((t, n) =>n === e ? Object.assign(Object.assign({
            }, t), {
              choiceIndex: void 0
            }) : t));
            m(n),
            l({
              choices: n.map((e=>void 0 === e.choiceIndex ? - 1 : d[e.choiceIndex].originalIndex))
            })
          },
          C = me(null != _ ? _ : 0),
          T = void 0 === _ ? 0 : Math.min(C, _ * r.numRows * 0.4),
          R = void 0 === _ ? 0 : Math.max(25, T * ('ar' === a ? 0.7 : 0.5)),
          I = void 0 === _ ? 0 : r.numRows * _,
          L = void 0 === _ ? 0 : Math.max(10, b === le.CorrectFinal ? (I - T - 10 - R) / 2 : (I - T) / 2),
          F = e=>{
            return t = void 0,
            n = void 0,
            s = function * () {
              for (const [t,
              n]of e) E(t),
              n && (yield(0, oe._v) (n))
            },
            new ((a = void 0) || (a = Promise)) ((function (e, i) {
              function r(e) {
                try {
                  o(s.next(e))
                } catch (e) {
                  i(e)
                }
              }
              function l(e) {
                try {
                  o(s.throw(e))
                } catch (e) {
                  i(e)
                }
              }
              function o(t) {
                var n;
                t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) {
                  e(n)
                }))).then(r, l)
              }
              o((s = s.apply(t, n || [
              ])).next())
            }));
            var t,
            n,
            a,
            s
          };
          i.useEffect((() =>{
            var e;
            y.status === pe.cS.Blaming && ((null === (e = r.gradingResult) || void 0 === e ? void 0 : e.correct) ? F([[le.CorrectMoveInwards,
            355],
            [
              le.CorrectShowFinalWord,
              900
            ],
            [
              le.CorrectFinal,
              void 0
            ]]) : r.skipped || F([[le.IncorrectMoveInwards,
            355],
            [
              le.IncorrectSnapBack,
              void 0
            ]]))
          }), [
            y.status
          ]);
          const z = i.useRef(null),
          D = (0, Z.Fx) ((e=>e.ui.viewportHeight)),
          j = (0, Z.Fx) ((e=>e.ui.viewportWidth)),
          P = (0, Z.Fx) (g.$4);
          i.useLayoutEffect((() =>{
            if (z.current) {
              const {
                numRows: e,
                numCols: t
              }
              = r,
              n = z.current.getBoundingClientRect().width,
              s = z.current.getBoundingClientRect().height,
              i = Math.min(n / t, s / e),
              l = P ? i : n / t * 0.6,
              o = 'ar' === a ? 270 : 216;
              x(!P && l * t < o ? Math.min(i, o / t) : l)
            }
          }), [
            j,
            D
          ]);
          const O = 'rtl' === (0, f.Ux) (a);
          i.useEffect((() =>{
            const e = e=>((e - 1) % p.length + p.length) % p.length,
            t = e=>(e + 1) % p.length;
            if (!n) {
              const n = n=>{
                var a;
                'ArrowRight' === n.key ? (n.preventDefault(), n.stopPropagation(), void 0 === h ? v(O ? p.length - 1 : 0) : (a = h, v(O ? e(a) : t(a)))) : 'ArrowLeft' === n.key ? (n.preventDefault(), n.stopPropagation(), void 0 === h ? v(O ? 0 : p.length - 1) : (n=>{
                  v(O ? t(n) : e(n))
                }) (h)) : 'Backspace' === n.key && (n.preventDefault(), n.stopPropagation(), void 0 !== h && void 0 !== p[h].choiceIndex && w(h))
              };
              return ue.U.addListener(document, 'keydown', n),
              () =>ue.U.removeListener(document, 'keydown', n)
            }
          }), [
            n,
            h,
            p,
            o
          ]);
          const A = void 0 === _ ? null : i.createElement(i.Fragment, null, b && [
            le.CorrectShowFinalWord,
            le.CorrectFinal
          ].includes(b) && (null === (t = r.gradingResult) || void 0 === t ? void 0 : t.correct) ? i.createElement(i.Fragment, null, void 0 === _ ? null : i.createElement('div', {
            className: s() (b === le.CorrectShowFinalWord ? re['final-word-bounce-in'] : re['final-word'], re[`lang-${ a }`]),
            style: Object.assign({
              fontSize: `${ T }px`,
              top: `${ L }px`
            }, b === le.CorrectShowFinalWord ? {
              lineHeight: `${ I }px`
            }
             : {
              height: `${ T }px`,
              lineHeight: `${ T }px`
            })
          }, r.correctSolutions[0]), b === le.CorrectFinal ? i.createElement(ve, {
            animationState: b,
            bottom: L,
            choices: r.choices,
            correctIndices: r.correctIndices,
            size: R
          }) : null) : p.map(((e, t) =>i.createElement(ge, {
            cellSize: _,
            disabled: void 0 !== b,
            fast: b === le.IncorrectSnapBack,
            gridCols: r.numCols,
            gridRows: r.numRows,
            index: t,
            info: e,
            key: t,
            onClick: w,
            position: b && ([le.CorrectMoveInwards,
            le.CorrectShowFinalWord,
            le.CorrectFinal].includes(b) || b === le.IncorrectMoveInwards) ? 'center' : 'default',
            selected: t === h,
            text: void 0 === e.choiceIndex ? void 0 : d[e.choiceIndex].text
          }))), b && [
            le.CorrectShowFinalWord,
            le.CorrectFinal
          ].includes(b) ? [
            [ne,
            {
              bottom: '15%',
              right: '25%'
            }
            ],
            [
              ae,
              {
                bottom: '40%',
                right: '15%'
              }
            ],
            [
              se,
              {
                left: '25%',
                top: '15%'
              }
            ],
            [
              ie,
              {
                left: '15%',
                top: '25%'
              }
            ]
          ].map((([e,
          t], n) =>i.createElement('img', {
            className: re.sparkle,
            key: n,
            src: e,
            style: t
          }))) : null),
          M = P && 'experiment' === (0, de.j6) ('web_alphabets_character_puzzle_keyboard', void 0),
          H = i.createElement(te.Z, {
            choices: d.map((e=>{
              var t;
              return {
                text: e.text,
                tts: null !== (t = e.tts) && void 0 !== t ? t : null
              }
            })),
            disabled: n,
            language: a,
            onTap: e=>{
              if (k && (0, U.GN) (d[e].tts), void 0 === h) return;
              c([...o.filter((e=>e !== p[h].choiceIndex)),
              e]),
              v((e=>{
                for (let t = 1; t < p.length; t++) if (void 0 === p[(e + t) % p.length].choiceIndex) return (e + t) % p.length
              }) (h));
              const t = p.map(((t, n) =>n === h ? Object.assign(Object.assign({
              }, t), {
                choiceIndex: e
              }) : t));
              m(t),
              l({
                choices: t.map((e=>void 0 === e.choiceIndex ? - 1 : d[e.choiceIndex].originalIndex))
              })
            },
            selectedIndices: o,
            size: ee.I.AlphabetsLarge,
            style: 'word-bank',
            tokenProps: u.DZ(d.length, (e=>({
              isCharacter: !0,
              numberKey: M ? e + 1 : void 0
            })))
          });
          return i.createElement('div', {
            className: re.wrap
          }, i.createElement('div', {
            className: re.prompt
          }, i.createElement(N.Z, {
            audio: r.tts,
            autoplay: !0,
            type: 'small'
          }), i.createElement('span', null, r.prompt)), i.createElement('div', {
            className: re['grid-wrap'],
            ref: z
          }, void 0 === _ ? null : i.createElement(he, {
            animationState: b,
            cellSize: _,
            numCols: r.numCols,
            numRows: r.numRows
          }, A)), H)
        },
        Header: () =>i.createElement('span', null, 'Build the character')
      },
      [
        S.Sm.CharacterSelect
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            choices: e,
            isOptionTtsDisabled: t
          },
          challengeState: {
            guess: n
          },
          disabled: a,
          learningLanguage: s,
          onChange: r
        }) =>{
          const l = i.useRef([]),
          {
            scale: o
          }
          = J(l, {
            maxScale: 0.89
          });
          return i.createElement('div', {
            className: '_1xzRh _2RC-4 d84Fd'
          }, i.createElement(ye.Z, {
            onChange: n=>{
              const a = window.performance.now();
              r(n);
              const {
                character: s,
                tts: i
              }
              = e[n];
              i && !0 !== t && (0, U.a1) (i, {
                requestedAt: a,
                text: s
              })
            },
            type: 'row-desktop-two-columns-mobile',
            value: n
          }, e.map(((e, t) =>{
            const r = i.createElement(Y.Z, {
              className: '_2KRgS',
              fontSize: 72,
              learningLanguage: s,
              ref: e=>l.current[t] = e,
              scale: o
            }, e.character);
            return i.createElement(ke, {
              autoFocus: 0 === t,
              disabled: a,
              icon: r,
              index: t,
              key: t,
              language: s,
              selected: n === t
            })
          }))))
        },
        Header: ({
          challenge: e,
          fromLanguage: t,
          learningLanguage: n
        }) =>{
          const {
            type: a
          }
          = (0, Z.Fx) (g.is),
          s = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings));
          return i.createElement('span', null, e.promptTransliteration && (0, Q._G) (a) && (0, Q.dN) (n, t, s) ? i.createElement(i.Fragment, null, i.createElement('span', null, 'Select the correct characters for “'), i.createElement(_e.Z, {
            highlightStyle: 'normal',
            text: [
              ...e.prompt
            ],
            transliteration: e.promptTransliteration
          }), i.createElement('span', null, '”')) : (0, _._i) (12188, {
            challengeText: e.prompt
          }))
        }
      },
      [
        S.Sm.CharacterTrace
      ]: {
        Container: wn,
        Content: ({
          challenge: e,
          learningLanguage: t,
          onChange: n
        }) =>{
          const [a,
          s] = i.useState(),
          [
            r,
            l
          ] = i.useState(0),
          o = i.useRef(null),
          c = i.useRef(null),
          [
            d,
            u
          ] = i.useState(0),
          p = i.useRef(null),
          m = i.useRef(!1),
          g = i.useRef(void 0),
          [
            h,
            v
          ] = i.useState(),
          _ = (0, Z.tX) (),
          x = a ? e.width * a + 20 : void 0,
          b = a ? e.height * a + 20 : void 0;
          i.useLayoutEffect((() =>{
            p.current && v(Fe(0, p.current))
          }), [
            a,
            r
          ]);
          const E = () =>{
            m.current = !1,
            g.current = void 0
          },
          S = (t, a) =>{
            var s;
            const i = ((e, t) =>{
              var n;
              if (!o.current) return;
              const a = null === (n = o.current.getScreenCTM()) || void 0 === n ? void 0 : n.inverse();
              return a ? new DOMPoint(e, t).matrixTransform(a) : void 0
            }) (t, a);
            if (!(h && i && void 0 !== r && p.current && m.current)) return;
            const c = null !== (s = g.current) && void 0 !== s ? s : i,
            f = Math.max(1, Math.ceil(Le(c, i) / 5)),
            x = (i.x - c.x) / f,
            b = (i.y - c.y) / f;
            let E = {
              cursor: i,
              numStrokes: e.strokes.length,
              strokeIndex: r,
              strokeInfo: h,
              strokeProgress: d,
              strokeRef: p.current
            };
            for (let e = 0; e < f && E.strokeInfo; e++) {
              const t = ze({
                cursor: {
                  x: c.x + e * x,
                  y: c.y + e * b
                },
                numStrokes: E.numStrokes,
                strokeIndex: E.strokeIndex,
                strokeInfo: E.strokeInfo,
                strokeProgress: E.strokeProgress,
                strokeRef: E.strokeRef
              });
              if (!t) break;
              E = t
            }
            E && (E.strokeIndex !== r && (m.current = !1, E.strokeIndex < E.numStrokes && l(E.strokeIndex), n(E.strokeIndex)), u(E.strokeProgress), v(E.strokeInfo), E.strokeIndex === E.numStrokes && (_((0, we.YK) (!1, Date.now())), l(void 0))),
            g.current = i
          },
          k = (0, Z.Fx) ((e=>e.ui.viewportHeight)),
          y = (0, Z.Fx) ((e=>e.ui.viewportWidth));
          return i.useLayoutEffect((() =>{
            if (!c.current) return;
            const {
              width: t,
              height: n
            }
            = c.current.getBoundingClientRect(),
            a = Math.min((t - 20) / e.width, (n - 20) / e.height);
            s(a)
          }), [
            k,
            y
          ]),
          i.createElement('div', {
            className: 'v-Z4i',
            dir: (0, f.Ux) (t)
          }, i.createElement('div', {
            className: '_1AV4I'
          }, e.tts ? i.createElement(N.Z, {
            audio: e.tts,
            autoplay: !0,
            type: 'small'
          }) : null, i.createElement('span', null, e.promptTransliteration ? i.createElement(_e.Z, {
            highlightStyle: 'normal',
            text: [
              e.prompt
            ],
            transliteration: {
              tokens: [
                {
                  token: e.prompt,
                  transliterationTexts: [
                    {
                      text: e.promptTransliteration,
                      type: 'romaji'
                    }
                  ]
                }
              ]
            },
            type: 'romaji'
          }) : e.prompt)), i.createElement('div', {
            className: 'IawCP',
            ref: c
          }, void 0 === a ? null : i.createElement('svg', {
            className: '_21jDa',
            height: b,
            onMouseLeave: E,
            onMouseMove: e=>{
              S(e.clientX, e.clientY)
            },
            onMouseUp: E,
            onTouchCancel: E,
            onTouchEnd: E,
            onTouchMove: e=>{
              S(e.touches[0].clientX, e.touches[0].clientY)
            },
            ref: o,
            viewBox: `0 0 ${ x } ${ b }`,
            width: x,
            xmlns: 'http://www.w3.org/2000/svg'
          }, i.createElement('g', {
            transform: `translate(10, 10) scale(${ a }, ${ a })`
          }, e.strokes.map(((e, t) =>i.createElement('path', {
            className: '_2bN8t',
            d: e,
            key: t
          }))), e.strokes.slice(0, null != r ? r : e.strokes.length).map(((e, t) =>i.createElement('path', {
            className: Te,
            d: e,
            key: t,
            pathLength: 1,
            style: {
              strokeDashoffset: 0
            }
          }))), void 0 === r ? null : i.createElement('path', {
            className: '_28IJW',
            d: e.strokes[r],
            ref: p
          }), void 0 === r || d < 0.01 ? null : i.createElement('path', {
            className: Te,
            d: e.strokes[r],
            pathLength: 1,
            style: {
              strokeDashoffset: 1 - d
            }
          })), h ? i.createElement(i.Fragment, null, i.createElement('image', {
            height: 18,
            href: Ce,
            onMouseDown: e=>e.preventDefault(),
            transform: `translate(${ h.endPoint.x }, ${ h.endPoint.y }) rotate(${ h.angleEnd }) translate(-7, -9)`,
            width: 14
          }), i.createElement('g', {
            className: '_3wVMt',
            onMouseDown: e=>{
              m.current = !0,
              S(e.clientX, e.clientY)
            },
            onTouchStart: e=>{
              m.current = !0,
              S(e.touches[0].clientX, e.touches[0].clientY)
            },
            transform: `translate(${ h.progressPoint.x }, ${ h.progressPoint.y })`
          }, i.createElement('circle', {
            r: 15
          }), i.createElement('image', {
            height: 16,
            href: Ne,
            onMouseDown: e=>e.preventDefault(),
            transform: `rotate(${ h.angle }) translate(-8, -8)`,
            width: 16
          }))) : null)))
        },
        Header: () =>i.createElement('span', null, (0, _._i) (26295))
      },
      [
        S.Sm.CompleteReverseTranslation
      ]: {
        Container: wn,
        Content: et,
        Header: ({
          challengeToggleState: e,
          learningLanguage: t
        }) =>e.isToggledToTyping ? i.createElement('span', null, (0, _._i) (19263, {
          language_name: (0, f.vY) (t)
        })) : i.createElement('span', null, 'experiment' === (0, de.j6) ('web_remove_translate_instructions', void 0) ? (0, _._i) (3351) : (0, _._i) (21271))
      },
      [
        S.Sm.Definition
      ]: {
        Container: wn,
        Content: tt,
        Header: () =>i.createElement('span', null, (0, _._i) (24620))
      },
      [
        S.Sm.Dialogue
      ]: {
        Container: Cn,
        Content: dt,
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (e.promptTokens ? 24620 : 9368))
      },
      [
        S.Sm.Form
      ]: {
        Container: wn,
        Content: e=>{
          const {
            challenge: {
              character: t,
              options: n,
              correctIndex: a,
              gradingResult: s,
              promptPieceTransliterations: r,
              promptPieces: l,
              skipped: o
            },
            challengeState: {
              guess: c
            },
            disabled: d,
            fromLanguage: u,
            learningLanguage: p,
            onChange: m
          }
          = e,
          h = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings)),
          v = (0, Z.Fx) (g.is),
          _ = () =>(0, Q._G) (v.type) && (0, Q.dN) (p, u, h),
          x = i.createElement('div', {
            dir: (0, f.Ux) (p)
          }, l.map(((e, t) =>[i.createElement('span', {
            key: `prompt-piece-${ t }`
          }, (null == r ? void 0 : r[t]) && _() ? i.createElement(_e.Z, {
            highlightStyle: 'normal',
            text: [
              ...e
            ],
            transliteration: null == r ? void 0 : r[t]
          }) : e),
          t < l.length - 1 ? i.createElement(st, {
            key: `prompt-piece-${ t }-gap`
          }) : null])));
          return i.createElement('div', {
            className: ut['wrap' + (t ? '-character' : '')]
          }, i.createElement('div', {
            className: ut['prompt' + (t ? '-character' : '')],
            'data-prompt': l.join('___')
          }, t ? i.createElement($e, {
            character: t,
            correct: o || null == s ? void 0 : s.correct
          }, x) : x), i.createElement(B.Z, {
            autoFocus: !0,
            choiceTransliterations: n[0].textTransliteration && _() ? n.map((e=>e.textTransliteration)) : void 0,
            choices: n.map((e=>e.text)),
            className: ut['answer' + (t ? '-character' : '')],
            correctIndex: a,
            disabled: d,
            language: p,
            onChange: m,
            overflowBehavior: {
              prompt: l.join(n[a].text),
              shouldHandleOverflow: !0,
              trackedChallengeType: 'form'
            },
            type: 'two-columns-desktop-column-mobile',
            value: c
          }))
        },
        Header: () =>i.createElement('span', null, (0, _._i) (20300))
      },
      [
        S.Sm.FreeResponse
      ]: {
        Container: ({
          challenge: e,
          content: t,
          header: n
        }) =>i.createElement('div', Object.assign({
        }, (0, Ee._q) (Se.V.Challenge, `challenge-${ e.type }`), {
          className: kn.challenge
        }), i.createElement('div', {
          className: kn['challenge-container-centered']
        }, n, i.createElement('div', {
          className: kn['content-top-aligned']
        }, t))),
        Content: mt,
        Header: ({
          learningLanguage: e
        }) =>i.createElement('span', null, (0, _._i) (17375, {
          language_name: (0, f.vY) (e)
        }))
      },
      [
        S.Sm.GapFill
      ]: {
        Container: wn,
        Content: ht,
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (18142, {
          num_blanks: (0, z.j$) (e.displayTokens).filter((e=>e.isBlank)).length
        }))
      },
      [
        S.Sm.Judge
      ]: {
        Container: wn,
        Content: ({
          challenge: e,
          challenge: {
            character: t,
            gradingResult: n,
            skipped: a
          },
          challengeState: {
            guess: s
          },
          disabled: r,
          fromLanguage: l,
          learningLanguage: o,
          onChange: c
        }) =>{
          const d = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings));
          return i.createElement('div', {
            className: vt['wrap' + (t ? '-character' : '')]
          }, i.createElement('div', {
            className: vt['prompt' + (t ? '-character' : '')]
          }, t ? i.createElement($e, {
            character: t,
            correct: a || null == n ? void 0 : n.correct
          }, e.prompt) : e.prompt), i.createElement(B.Z, {
            autoFocus: !0,
            choiceTransliterations: e.choiceTransliterations && (0, Q.dN) (o, l, d) ? e.choiceTransliterations : void 0,
            choices: e.choices,
            className: vt['answer' + (t ? '-character' : '')],
            correctIndex: e.correctIndices[0],
            disabled: r,
            language: o,
            onChange: c,
            overflowBehavior: {
              prompt: e.prompt,
              shouldHandleOverflow: !0,
              trackedChallengeType: 'judge'
            },
            type: 'column',
            value: s
          }))
        },
        Header: () =>i.createElement('span', null, 'experiment' === (0, de.j6) ('web_remove_translate_instructions', void 0) ? (0, _._i) (32544) : (0, _._i) (5096))
      },
      [
        S.Sm.Listen
      ]: {
        Container: wn,
        Content: Rt,
        Header: Tt
      },
      [
        S.Sm.ListenComplete
      ]: {
        Container: wn,
        Content: e=>{
          var t,
          n,
          a;
          const {
            challenge: {
              character: s,
              displayTokens: r,
              gradingResult: l,
              prompt: o,
              skipped: c,
              slowTts: d,
              tts: u
            },
            challengeState: {
              guess: p
            },
            disabled: m,
            isDesktop: g,
            learningLanguage: h,
            onChange: v
          }
          = e,
          _ = (0, Z.tX) (),
          x = i.useRef(new Array(r.filter((e=>e.isBlank)).length).fill(null)),
          [
            b,
            E
          ] = i.useState(!1),
          [
            S,
            k
          ] = i.useState(0),
          [
            y,
            w
          ] = i.useState((() =>r.findIndex((e=>e.isBlank))));
          i.useEffect((() =>{
            E(!0)
          }), [
          ]),
          i.useEffect((() =>{
            S > 1 && _({
              type: 'CHALLENGE_HAS_BROKEN_TTS'
            })
          }), [
            S
          ]),
          (0, Z.Gj) ((() =>{
            Ve.Z.finish('challenge_typing')
          }), [
            p
          ]);
          const C = i.createElement(ft, {
            audio: u,
            autoplay: !b,
            onClick: () =>{
              var e,
              t;
              null === (t = null === (e = x.current) || void 0 === e ? void 0 : e[y]) || void 0 === t || t.focus()
            },
            onError: () =>k((e=>e + 1)),
            slowAudio: d,
            style: s ? 'in-character-popover' : void 0,
            ttsTrackingData: {
              text: o
            }
          });
          return i.createElement('div', {
            className: It['wrap' + (s ? '-character' : '')]
          }, i.createElement('div', {
            className: It['prompt' + (s ? '-character' : '')]
          }, s ? i.createElement($e, {
            character: s,
            correct: c || null == l ? void 0 : l.correct,
            hasOnlyIcons: !0
          }, C) : C), i.createElement('div', {
            className: It['answer' + (s ? '-character' : '')]
          }, i.createElement('label', {
            className: It['fake-textarea-player'],
            dir: (0, f.Ux) (h)
          }, r.map(((e, t) =>{
            var n;
            return e.isBlank ? i.createElement('span', {
              className: It['input-container'],
              key: t
            }, i.createElement(Ae, null, `_${ e.text }_`), i.createElement(Pe, {
              autoFocus: g && y === t,
              disabled: m,
              inputLanguage: h,
              onChange: e=>{
                Ve.Z.start('challenge_typing'),
                v(null == p ? void 0 : p.map(((n, a) =>a === t ? e.target.value : n)))
              },
              onFocus: () =>w(t),
              refCallback: e=>x.current[t] = e,
              size: 1,
              style: 'fill-in-the-blank',
              value: null !== (n = null == p ? void 0 : p[t]) && void 0 !== n ? n : ''
            })) : i.createElement('span', {
              key: t
            }, e.text)
          }))), i.createElement(Xe.Z, {
            className: It['virtual-keyboard'],
            disabled: m,
            inputElement: null !== (n = null === (t = x.current) || void 0 === t ? void 0 : t[y]) && void 0 !== n ? n : void 0,
            language: h,
            onChange: ({
            }, e) =>{
              Ve.Z.start('challenge_typing'),
              v(null == p ? void 0 : p.map(((t, n) =>n === y ? e : t)))
            },
            value: null !== (a = null == p ? void 0 : p[y]) && void 0 !== a ? a : ''
          })))
        },
        Header: ({
        }) =>i.createElement('span', null, (0, _._i) (3351))
      },
      [
        S.Sm.ListenComprehension
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            choices: e,
            correctIndex: t,
            prompt: n,
            question: a,
            questionTokens: r,
            slowTts: l,
            tts: o
          },
          challengeState: {
            guess: c
          },
          disabled: d,
          learningLanguage: u,
          onChange: p
        }) =>{
          const m = (0, Z.tX) (),
          [
            g,
            h
          ] = i.useState(0);
          return i.useEffect((() =>{
            g > 1 && m({
              type: 'CHALLENGE_HAS_BROKEN_TTS'
            })
          }), [
            g
          ]),
          i.createElement('div', {
            className: s() (Lt.wrap, {
              [
                Lt['has-question']
              ]: !!a
            })
          }, i.createElement('div', {
            className: Lt['prompt' + (a ? '-before-question' : '')]
          }, i.createElement(ft, {
            audio: o,
            autoplay: !0,
            onError: () =>h((e=>e + 1)),
            slowAudio: l,
            ttsTrackingData: {
              text: n
            }
          })), a ? i.createElement('div', {
            className: Lt.question,
            dir: (0, f.Ux) (u)
          }, i.createElement(Oe.Z, {
            disableTTS: !1,
            highlightStyle: 'normal',
            isForward: !0,
            language: u,
            tokens: null != r ? r : [
              {
                value: a
              }
            ]
          })) : null, i.createElement(B.Z, {
            autoFocus: !0,
            choices: e,
            correctIndex: t,
            disabled: d,
            language: u,
            onChange: p,
            overflowBehavior: {
              shouldHandleOverflow: !1
            },
            type: 'column',
            value: c
          }))
        },
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (e.question ? 8769 : 2005))
      },
      [
        S.Sm.ListenTap
      ]: {
        Container: wn,
        Content: Rt,
        Header: Tt
      },
      [
        S.Sm.Match
      ]: {
        Container: yn,
        Content: zt,
        Header: Ft
      },
      [
        S.Sm.Name
      ]: {
        Container: yn,
        Content: Dt,
        Header: ({
          challenge: e,
          learningLanguage: t
        }) =>i.createElement('span', null, (0, _._i) (5669, {
          hint: e.prompt,
          language_name: (0, f.vY) (t)
        }))
      },
      [
        S.Sm.ReadComprehension
      ]: {
        Container: Cn,
        Content: jt,
        Header: ({
          challenge: e
        }) =>{
          const t = e.passage.split('__').length - 1;
          let n = (0, _._i) (2005);
          return e.question ? n = (0, _._i) (24620) : t && (n = (0, _._i) (18142, {
            num_blanks: t
          })),
          i.createElement('span', null, n)
        }
      },
      [
        S.Sm.Select
      ]: {
        Container: wn,
        Content: e=>{
          const {
            challenge: t,
            challengeState: {
              guess: n
            },
            disabled: a,
            fromLanguage: s,
            learningLanguage: r,
            onChange: l
          }
          = e,
          o = (0, Z.Fx) (g.is),
          c = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings));
          return i.createElement('div', {
            className: '_3pyWY _2RC-4 d84Fd'
          }, i.createElement(ye.Z, {
            onChange: e=>{
              const n = window.performance.now();
              l(e);
              const {
                phrase: a,
                tts: s
              }
              = t.choices[e];
              s && (0, U.a1) (s, {
                requestedAt: n,
                text: a
              })
            },
            type: 'row-desktop-two-columns-mobile',
            value: n
          }, t.choices.map(((e, t) =>{
            const l = i.createElement('div', {
              className: '_3U3ZC'
            }, i.createElement('div', {
              className: '_1Ykml',
              style: {
                backgroundImage: `url(${ e.svg || e.image })`
              }
            })),
            d = e.phraseTransliteration && (0, Q._G) (o.type) && (0, Q.dN) (r, s, c) ? i.createElement(_e.Z, {
              highlightStyle: 'normal',
              state: n === t ? 'active' : void 0,
              text: [
                ...e.phrase
              ],
              transliteration: e.phraseTransliteration
            }) : i.createElement('span', {
              style: {
                fontSize: `${ Math.min(17, 21 - e.phrase.length / 2) }px`
              }
            }, e.phrase);
            return i.createElement(ke, {
              autoFocus: 0 === t,
              caption: d,
              disabled: a,
              icon: l,
              index: t,
              key: t,
              language: r,
              selected: n === t
            })
          }))))
        },
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (18721, {
          hint: e.prompt
        }))
      },
      [
        S.Sm.SelectPronunciation
      ]: {
        Container: wn,
        Content: At,
        Header: Ot
      },
      [
        S.Sm.SelectTranscription
      ]: {
        Container: wn,
        Content: At,
        Header: Ot
      },
      [
        S.Sm.Speak
      ]: {
        Container: wn,
        Content: e=>'experiment' === (0, de.j6) ('speak_rewrite_speak_challenge', void 0) ? i.createElement(rn, Object.assign({
        }, e)) : i.createElement(tn, Object.assign({
        }, e)),
        Header: () =>i.createElement('span', null, (0, _._i) (11803))
      },
      [
        S.Sm.TapCloze
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            choices: e,
            displayTokens: t,
            newWords: n,
            tokens: a
          },
          challengeState: {
            guess: s
          },
          disabled: r,
          fromLanguage: l,
          isDesktop: o,
          learningLanguage: c,
          onChange: d
        }) =>{
          var p;
          const m = (0, Z.tX) (),
          g = i.useRef([]),
          h = i.useRef(null),
          v = (null != s ? s : [
          ]).map((e=>e.choiceIndex)).filter((e=>void 0 !== e)),
          _ = o ? ee.I.Large : ee.I.Normal,
          x = e=>k({
            choiceIndex: void 0,
            guess: void 0,
            index: e
          }),
          E = t=>{
            const n = null == s ? void 0 : s.find((e=>void 0 === e.guess));
            n && k({
              choiceIndex: t,
              guess: e[t],
              index: n.index
            })
          },
          k = e=>d(null == s ? void 0 : s.map((t=>t.index === e.index ? e : t))),
          {
            highlights: y
          }
          = (0, St.Z) ({
            gracePeriod: 1000,
            language: c,
            mode: r || !(0, z.jc) ({
              fromLanguage: l,
              learningLanguage: c
            }) ? 'disabled' : v.length === (null == s ? void 0 : s.length) ? 'remove-only' : 'unique',
            onBackspace: () =>{
              const e = null == s ? void 0 : s.find((e=>e.choiceIndex === v[v.length - 1]));
              e && x(e.index)
            },
            onMatch: e=>{
              m((0, we.eX) ({
                challengeType: S.Sm.TapCloze
              })),
              E(e)
            },
            selectedIndices: v,
            tokens: (0, xt.asMutable) (e)
          }),
          {
            selectedTokenAnimations: w,
            unselectedTokenAnimations: C
          }
          = Et({
            isFlyEnabled: o,
            selectedIndices: v,
            selectedTokenRefs: g.current.filter((e=>!!e)),
            tokens: e.length,
            unselectedTokenRefs: null !== (p = h.current) && void 0 !== p ? p : [
            ]
          });
          return i.createElement('div', {
            className: '_1gEd4 _3IQqi _2RC-4 d84Fd',
            dir: (0, f.Ux) (c)
          }, i.createElement('div', {
            className: '_3fly_'
          }, t.map(((t, l) =>i.createElement(i.Fragment, {
            key: l
          }, ((t, a, l) =>{
            var o,
            d,
            u;
            const p = null == s ? void 0 : s.find((e=>e.index === a));
            if (void 0 !== t.damageStart && p) {
              const n = null !== (o = p.choiceIndex) && void 0 !== o ? o : - 1;
              return i.createElement('span', {
                className: '_37Ydt'
              }, i.createElement(cn, {
                choice: p.guess,
                damageStart: t.damageStart,
                disabled: r,
                endRef: e=>{
                  n > - 1 && (g.current[v.indexOf(n)] = e)
                },
                fullText: t.text,
                language: c,
                onTap: () =>n > - 1 && x(p.index),
                possibleChoices: e,
                size: _,
                tokenProps: {
                  animation: w[n],
                  highlightIndex: null === (d = y[n]) || void 0 === d ? void 0 : d.index,
                  isComposing: null === (u = y[n]) || void 0 === u ? void 0 : u.isComposing
                }
              }))
            }
            return l ? i.createElement(Oe.Z, {
              disableTTS: !1,
              highlightStyle: 'new-word',
              highlights: (null == n ? void 0 : n.includes(l.value)) ? [
                0
              ] : [
              ],
              isForward: !0,
              language: c,
              tokens: [
                l
              ]
            }) : ((0, b.vU) ('No matching token found', {
              data: t.text
            }), i.createElement('div', null, t.text))
          }) (t, l, a[l]))))), i.createElement(te.Z, {
            choices: e.map((e=>({
              text: e,
              tts: null
            }))),
            disabled: r,
            language: c,
            onTap: E,
            selectedIndices: v,
            size: _,
            style: 'word-bank',
            tokenProps: u.DZ(e.length, (e=>{
              var t,
              n;
              return {
                animation: C[e],
                highlightIndex: null === (t = y[e]) || void 0 === t ? void 0 : t.index,
                isComposing: null === (n = y[e]) || void 0 === n ? void 0 : n.isComposing,
                style: 'damaged-end'
              }
            })),
            tokensRef: e=>h.current = e
          }))
        },
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (6098, {
          num_broken: e.displayTokens.filter((e=>e.damageStart)).length
        }))
      },
      [
        S.Sm.TapClozeTable
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            choices: e,
            displayTableTokens: t,
            headers: n,
            newWords: a,
            tableTokens: s
          },
          challengeState: {
            guess: r
          },
          disabled: l,
          fromLanguage: o,
          isDesktop: c,
          learningLanguage: d,
          onChange: p
        }) =>{
          var m;
          const g = (0, Z.tX) (),
          h = i.useRef([]),
          v = i.useRef(null),
          _ = (null != r ? r : [
          ]).map((e=>e.choiceIndex)).filter((e=>void 0 !== e)),
          x = c ? ee.I.Large : ee.I.Normal,
          b = (e, t) =>k({
            choiceIndex: void 0,
            colIndex: e,
            guess: void 0,
            rowIndex: t
          }),
          E = t=>{
            const n = null == r ? void 0 : r.find((e=>void 0 === e.guess));
            n && k({
              choiceIndex: t,
              colIndex: n.colIndex,
              guess: e[t],
              rowIndex: n.rowIndex
            })
          },
          k = e=>p(null == r ? void 0 : r.map((t=>t.rowIndex === e.rowIndex && t.colIndex === e.colIndex ? e : t))),
          {
            highlights: y
          }
          = (0, St.Z) ({
            gracePeriod: 1000,
            language: d,
            mode: l || !(0, z.jc) ({
              fromLanguage: o,
              learningLanguage: d
            }) ? 'disabled' : _.length === (null == r ? void 0 : r.length) ? 'remove-only' : 'unique',
            onBackspace: () =>{
              const e = null == r ? void 0 : r.find((e=>e.choiceIndex === _[_.length - 1]));
              e && b(e.colIndex, e.rowIndex)
            },
            onMatch: e=>{
              g((0, we.eX) ({
                challengeType: S.Sm.TapClozeTable
              })),
              E(e)
            },
            selectedIndices: _,
            tokens: (0, xt.asMutable) (e)
          }),
          {
            selectedTokenAnimations: w,
            unselectedTokenAnimations: C
          }
          = Et({
            isFlyEnabled: c,
            selectedIndices: _,
            selectedTokenRefs: h.current.filter((e=>!!e)),
            tokens: e.length,
            unselectedTokenRefs: null !== (m = v.current) && void 0 !== m ? m : [
            ]
          });
          return i.createElement('div', {
            className: '_3brGU _3IQqi _2RC-4 d84Fd',
            dir: (0, f.Ux) (d)
          }, i.createElement(un, {
            headers: n,
            tableCells: (0, D.tl) (t, s, ((t, n, s) =>{
              var o,
              c,
              u;
              const {
                colIndex: p,
                rowIndex: m
              }
              = t,
              g = null == r ? void 0 : r.find((e=>e.colIndex === p && e.rowIndex === m));
              if (n.damageStart && g) {
                const t = null !== (o = g.choiceIndex) && void 0 !== o ? o : - 1;
                return i.createElement('div', {
                  className: '_2heJD'
                }, i.createElement(cn, {
                  choice: g.guess,
                  damageStart: n.damageStart,
                  disabled: l,
                  endRef: e=>{
                    t > - 1 && (h.current[_.indexOf(t)] = e)
                  },
                  fullText: n.text,
                  language: d,
                  onTap: () =>t > - 1 && b(g.colIndex, g.rowIndex),
                  possibleChoices: e,
                  size: x,
                  tokenProps: {
                    animation: w[t],
                    highlightIndex: null === (c = y[t]) || void 0 === c ? void 0 : c.index,
                    isComposing: null === (u = y[t]) || void 0 === u ? void 0 : u.isComposing
                  }
                }))
              }
              return s ? i.createElement(Oe.Z, {
                disableTTS: !1,
                highlightStyle: 'new-word',
                highlights: (null == a ? void 0 : a.includes(s.value)) ? [
                  0
                ] : [
                ],
                isForward: !0,
                language: d,
                tokens: [
                  s
                ]
              }) : i.createElement('div', null, n.text)
            }))
          }), i.createElement(te.Z, {
            choices: e.map((e=>({
              text: e,
              tts: null
            }))),
            disabled: l,
            language: d,
            onTap: E,
            selectedIndices: _,
            size: x,
            style: 'word-bank',
            tokenProps: u.DZ(e.length, (e=>{
              var t,
              n;
              return {
                animation: C[e],
                highlightIndex: null === (t = y[e]) || void 0 === t ? void 0 : t.index,
                isComposing: null === (n = y[e]) || void 0 === n ? void 0 : n.isComposing,
                style: 'damaged-end'
              }
            })),
            tokensRef: e=>v.current = e
          }))
        },
        Header: () =>i.createElement('span', null, (0, _._i) (10718))
      },
      [
        S.Sm.TapComplete
      ]: {
        Container: wn,
        Content: ({
          challenge: e,
          challenge: {
            choices: t,
            correctIndices: n,
            displayTokens: a,
            tokens: s
          },
          disabled: r,
          fromLanguage: l,
          isDesktop: o,
          learningLanguage: c,
          onChange: d
        }) =>{
          var p;
          const m = (0, Z.tX) (),
          g = i.useRef(null),
          h = i.useRef([]),
          v = i.useRef(null),
          [
            _,
            x
          ] = i.useState((() =>new Array(n.length).fill(null))),
          [
            k,
            y
          ] = i.useState((0, xt.asMutable) (e.choices)),
          [
            w,
            C
          ] = i.useState(),
          [
            N,
            T
          ] = i.useState(),
          [
            R,
            I
          ] = i.useState(o ? ee.I.Large : ee.I.Normal),
          L = e=>{
            _.includes(e) ? F(_.map((t=>t === e ? hn : t))) : F(_.map(((t, n, a) =>t === hn && a.indexOf(hn) === n ? e : t)))
          },
          F = e=>{
            x(e);
            const n = e.map((e=>e === hn ? hn : k[e])).map((e=>e === hn ? hn : t.indexOf(e)));
            d(n)
          },
          D = _.filter((e=>e !== hn)),
          {
            highlights: j
          }
          = (0, St.Z) ({
            gracePeriod: 1000,
            language: c,
            mode: r || !(0, z.jc) ({
              fromLanguage: l,
              learningLanguage: c
            }) ? 'disabled' : D.length === n.length ? 'remove-only' : 'unique',
            onBackspace: () =>{
              for (let e = _.length - 1; e >= 0; e--) {
                const t = _[e];
                if (t !== hn) {
                  L(t);
                  break
                }
              }
            },
            onMatch: e=>{
              m((0, we.eX) ({
                challengeType: S.Sm.TapComplete
              })),
              L(e)
            },
            selectedIndices: D,
            tokens: k.map((e=>e.text))
          }),
          {
            selectedTokenAnimations: P,
            unselectedTokenAnimations: O
          }
          = Et({
            isFlyEnabled: o,
            selectedIndices: D,
            selectedTokenRefs: h.current.filter((e=>!!e)),
            tokens: k.length,
            unselectedTokenRefs: null !== (p = v.current) && void 0 !== p ? p : [
            ]
          });
          i.useEffect((() =>{
            w === k && N === R || ((() =>{
              const e = (() =>{
                const e = n.map((e=>t[e])),
                a = k.filter((t=>!e.includes(t)));
                return u.UP(a)
              }) ();
              g.current && (0, yt.J) (g.current) && (R === ee.I.Large ? I(ee.I.Normal) : R === ee.I.Normal ? I(ee.I.Shorter) : void 0 === e ? (0, E.j) ('challenge_overflow', {
                challenge_type: 'tap_complete',
                prompt: a.map((e=>e.text)).join('')
              }) : (x(new Array(n.length).fill(null)), y(u.zu(k, e))))
            }) (), C(k), T(R))
          })),
          a.length !== s.length && (0, b.vU) ('Token length mismatch', {
            once: !0
          });
          const A = _.values();
          return i.createElement('div', {
            className: gn['wrap' + (e.image ? '-image' : '')],
            ref: g
          }, e.image ? i.createElement('img', {
            className: gn.image,
            src: e.image.svg
          }) : null, i.createElement('div', {
            className: gn.prompt,
            dir: (0, f.Ux) (c)
          }, u.DZ(a.length, (e=>{
            var t,
            n;
            const l = a[e],
            o = s[e];
            if (l.isBlank) {
              const a = A.next().value;
              return i.createElement('div', {
                className: gn['gap-wrap'],
                key: e
              }, i.createElement(mn, {
                animation: P[a],
                choices: k,
                disabled: r,
                highlightIndex: null === (t = j[a]) || void 0 === t ? void 0 : t.index,
                isComposing: null === (n = j[a]) || void 0 === n ? void 0 : n.isComposing,
                language: c,
                onTap: () =>a !== hn && L(a),
                ref: e=>h.current[_.indexOf(a)] = e,
                selectedIndex: a === hn ? void 0 : a,
                size: R
              }))
            }
            return i.createElement(Oe.Z, {
              disableTTS: !1,
              highlightStyle: 'normal',
              isForward: !0,
              key: e,
              language: c,
              tokens: [
                o
              ]
            })
          }))), i.createElement('div', {
            className: gn.answer
          }, i.createElement(te.Z, {
            choices: k,
            disabled: r,
            language: c,
            onTap: L,
            selectedIndices: D,
            size: R,
            style: 'word-bank',
            tokenProps: u.DZ(k.length, (e=>{
              var t,
              n;
              return {
                animation: O[e],
                highlightIndex: null === (t = j[e]) || void 0 === t ? void 0 : t.index,
                isComposing: null === (n = j[e]) || void 0 === n ? void 0 : n.isComposing
              }
            })),
            tokensRef: e=>v.current = e
          })))
        },
        Header: ({
          challenge: e
        }) =>i.createElement(i.Fragment, null, (0, _._i) (18142, {
          num_blanks: e.displayTokens.filter((e=>e.isBlank)).length
        }))
      },
      [
        S.Sm.TapCompleteTable
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            displayTableTokens: e,
            headers: t,
            newWords: n,
            choices: a,
            tableTokens: s
          },
          challengeState: {
            guess: r
          },
          disabled: l,
          fromLanguage: o,
          isDesktop: c,
          learningLanguage: d,
          onChange: p
        }) =>{
          var m;
          const g = (0, Z.tX) (),
          h = i.useRef([]),
          v = i.useRef(null),
          _ = (null != r ? r : [
          ]).map((e=>e.choiceIndex)).filter((e=>void 0 !== e)),
          x = c ? ee.I.Large : ee.I.Normal,
          b = (e, t) =>k({
            choiceIndex: void 0,
            colIndex: e,
            guess: void 0,
            rowIndex: t
          }),
          E = e=>{
            const t = null == r ? void 0 : r.find((e=>void 0 === e.guess));
            t && k({
              choiceIndex: e,
              colIndex: t.colIndex,
              guess: a[e].text,
              rowIndex: t.rowIndex
            })
          },
          k = e=>{
            p(null == r ? void 0 : r.map((t=>t.rowIndex === e.rowIndex && t.colIndex === e.colIndex ? e : t)))
          },
          {
            highlights: y
          }
          = (0, St.Z) ({
            gracePeriod: 1000,
            language: d,
            mode: l || !(0, z.jc) ({
              fromLanguage: o,
              learningLanguage: d
            }) ? 'disabled' : _.length === (null == r ? void 0 : r.length) ? 'remove-only' : 'unique',
            onBackspace: () =>{
              const e = null == r ? void 0 : r.find((e=>e.choiceIndex === _[_.length - 1]));
              e && b(e.colIndex, e.rowIndex)
            },
            onMatch: e=>{
              g((0, we.eX) ({
                challengeType: S.Sm.TapCompleteTable
              })),
              E(e)
            },
            selectedIndices: _,
            tokens: (0, xt.asMutable) (a).map((e=>e.text))
          }),
          {
            selectedTokenAnimations: w,
            unselectedTokenAnimations: C
          }
          = Et({
            isFlyEnabled: c,
            selectedIndices: _,
            selectedTokenRefs: h.current.filter((e=>!!e)),
            tokens: a.length,
            unselectedTokenRefs: null !== (m = v.current) && void 0 !== m ? m : [
            ]
          });
          return i.createElement('div', {
            className: 'dAJez _3IQqi _2RC-4 d84Fd',
            dir: (0, f.Ux) (d)
          }, i.createElement(un, {
            headers: t,
            tableCells: (0, D.tl) (e, s, ((e, t, s) =>{
              var o,
              c,
              u;
              const {
                colIndex: p,
                rowIndex: m
              }
              = e,
              g = null == r ? void 0 : r.find((e=>e.colIndex === p && e.rowIndex === m));
              if (t.isBlank && g) {
                const e = null !== (o = g.choiceIndex) && void 0 !== o ? o : - 1;
                return i.createElement('div', {
                  className: '_2bhAD'
                }, i.createElement(mn, {
                  animation: w[e],
                  choices: a,
                  disabled: l,
                  highlightIndex: null === (c = y[e]) || void 0 === c ? void 0 : c.index,
                  isComposing: null === (u = y[e]) || void 0 === u ? void 0 : u.isComposing,
                  language: d,
                  onTap: () =>e > - 1 && b(g.colIndex, g.rowIndex),
                  ref: t=>{
                    e > - 1 && (h.current[_.indexOf(e)] = t)
                  },
                  selectedIndex: g.choiceIndex,
                  size: x
                }))
              }
              return s ? i.createElement(Oe.Z, {
                disableTTS: !1,
                highlightStyle: 'new-word',
                highlights: (null == n ? void 0 : n.includes(s.value)) ? [
                  0
                ] : [
                ],
                isForward: !0,
                language: d,
                tokens: [
                  s
                ]
              }) : i.createElement('div', null, t.text)
            }))
          }), i.createElement(te.Z, {
            choices: a,
            disabled: l,
            language: d,
            onTap: E,
            selectedIndices: _,
            size: x,
            style: 'word-bank',
            tokenProps: u.DZ(a.length, (e=>{
              var t,
              n;
              return {
                animation: C[e],
                highlightIndex: null === (t = y[e]) || void 0 === t ? void 0 : t.index,
                isComposing: null === (n = y[e]) || void 0 === n ? void 0 : n.isComposing
              }
            })),
            tokensRef: e=>v.current = e
          }))
        },
        Header: () =>i.createElement('span', null, (0, _._i) (2082))
      },
      [
        S.Sm.TapDescribe
      ]: {
        Container: yn,
        Content: vn,
        Header: () =>i.createElement('span', null, (0, _._i) (1950))
      },
      [
        S.Sm.Translate
      ]: {
        Container: wn,
        Content: ({
          challenge: e,
          challenge: {
            character: t,
            gradingResult: n,
            newWords: a,
            skipped: r,
            tokens: l
          },
          challengeState: {
            guess: o
          },
          challengeToggleState: {
            isToggledToTyping: c
          },
          disabled: d,
          hints: u,
          isDesktop: p,
          learningLanguage: m,
          onChange: h
        }) =>{
          var v,
          _,
          x;
          const b = (0, Z.Fx) ((e=>0 === (0, g.Oz) (e).xp)),
          k = (0, Z.Fx) ((e=>(0, g.lA) (e).currentIndex === (0, g.is) (e).challenges.findIndex((e=>e.type === S.Sm.Translate)))),
          y = (0, Z.Fx) ((e=>(0, g.lA) (e).status === pe.cS.Sliding)),
          w = (0, Z.Fx) (g.Rv),
          C = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings)),
          T = (0, Z.Fx) ((e=>(0, Q._G) ((0, g.is) (e).type))),
          [
            R,
            I
          ] = i.useState(!1);
          i.useEffect((() =>{
            I(!0)
          }), [
          ]),
          (0, Z.Gj) ((() =>{
            Ve.Z.finish('challenge_typing')
          }), [
            null == o ? void 0 : o.translation
          ]);
          const L = e.sourceLanguage === m,
          F = l.map(((e, t) =>(null == a ? void 0 : a.includes(e.value)) ? t : void 0)).filter((e=>void 0 !== e)),
          D = (0, z.jc) ({
            fromLanguage: e.sourceLanguage,
            learningLanguage: e.targetLanguage
          }),
          j = b && k || (0, ce.gQ) ('debugHoverIntro'),
          P = (0, Z.Fx) ((e=>fn.Z.hasPhysicalKeyboard && D && !e.uiPersisted.typeToSelect.calloutShown && void 0 !== e.uiPersisted.typeToSelect.initializedAt && (0, qt.M) (e.uiPersisted.typeToSelect.initializedAt / 1000, Date.now()) > 7 && !e.uiPersisted.typeToSelect.used && !j && 'experiment' === (0, de.j6) ('web_type_to_select_tokens_callout', void 0))),
          [
            O
          ] = i.useState(P),
          A = (null === (v = e.promptTransliteration) || void 0 === v ? void 0 : v.tokens.some((e=>void 0 !== (0, Q.iZ) (e, C['ja<en'].type)))) && (0, Q.dN) (m, w, C),
          M = i.createElement('div', {
            className: A ? _n['prompt-firefox-transliterations'] : null,
            dir: (0, f.Ux) (e.sourceLanguage)
          }, L && e.tts ? i.createElement(N.Z, {
            audio: e.tts,
            autoplay: !R,
            className: s() (_n['speaker' + (t ? '-inverse' : '')], A ? _n['speaker-transliterations'] : null),
            dir: (0, f.Ux) (e.sourceLanguage),
            style: t ? 'in-text' : void 0,
            ttsTrackingData: {
              text: e.prompt
            },
            type: 'small',
            useKeyboardShortcut: !0
          }) : null, i.createElement(Oe.Z, {
            disableTTS: !1,
            highlightStyle: 'new-word',
            highlights: F,
            isForward: L,
            language: e.sourceLanguage,
            showHoverIntro: j,
            tokens: null != u ? u : [
              {
                value: e.prompt
              }
            ],
            transliteration: T ? e.promptTransliteration : void 0
          }));
          return i.createElement('div', {
            className: _n['wrap' + (t ? '-character' : '')]
          }, i.createElement('div', {
            className: _n['prompt' + (t ? '-character' : '')]
          }, t ? i.createElement($e, {
            character: t,
            correct: r || null == n ? void 0 : n.correct
          }, M) : M), i.createElement('div', {
            className: _n['answer' + (t ? '-character' : '')]
          }, c ? i.createElement(Je, {
            autoFocus: p,
            disabled: d,
            inputLanguage: e.targetLanguage,
            learningLanguage: m,
            onChange: ({
            }, e) =>{
              Ve.Z.start('challenge_typing'),
              h(Object.assign(Object.assign({
              }, o), {
                translation: e
              }))
            },
            value: null !== (_ = null == o ? void 0 : o.translation) && void 0 !== _ ? _ : ''
          }) : i.createElement(wt, {
            autoFocus: !0,
            challengeType: S.Sm.Translate,
            choices: e.choices,
            correctIndices: e.correctIndices,
            disabled: d,
            hasBorderTop: !!t,
            isDesktop: p,
            language: e.targetLanguage,
            onChange: e=>h(Object.assign(Object.assign({
            }, o), {
              tapTranslations: e
            })),
            onUnhandledOverflow: () =>(0, E.j) ('challenge_overflow', {
              challenge_type: 'translate',
              prompt: e.prompt
            }),
            playTtsOnSelect: !L,
            showTypeToSelectIntro: O && !y,
            typeToSelectSupported: D,
            value: null !== (x = null == o ? void 0 : o.tapTranslations) && void 0 !== x ? x : [
            ]
          })))
        },
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (19263, {
          language_name: (0, f.vY) (e.targetLanguage)
        }))
      },
      [
        S.Sm.TypeCloze
      ]: {
        Container: wn,
        Content: ({
          challenge: {
            displayTokens: e,
            newWords: t,
            tokens: n
          },
          challengeState: {
            guess: a = [
            ]
          },
          disabled: s,
          learningLanguage: r,
          onChange: l
        }) =>{
          var o,
          c;
          const d = i.useRef([]),
          [
            u,
            p
          ] = i.useState((() =>(0, D.jL) (e) [0].index)),
          m = e=>{
            const t = a.map((t=>t.index === e.index ? e : t));
            l(t)
          },
          g = a.find((e=>e.index === u));
          return i.createElement('div', {
            className: 'k6E17 _3IQqi _2RC-4 d84Fd',
            dir: (0, f.Ux) (r)
          }, i.createElement('div', {
            className: '_1l3vr'
          }, e.map(((e, l) =>i.createElement(i.Fragment, {
            key: l
          }, ((e, n, l) =>{
            var o;
            const c = a.find((e=>e.index === n));
            return void 0 !== e.damageStart ? i.createElement('span', {
              className: 'bzD4k'
            }, i.createElement(xn, {
              autoFocus: n === a[0].index,
              damageStart: e.damageStart,
              disabled: s,
              fullText: e.text,
              onChange: e=>m({
                guess: e,
                index: n
              }),
              onFocus: () =>p(n),
              ref: e=>{
                d.current[n] = e
              },
              value: null !== (o = null == c ? void 0 : c.guess) && void 0 !== o ? o : ''
            })) : l ? i.createElement(Oe.Z, {
              disableTTS: !1,
              highlightStyle: 'new-word',
              highlights: (null == t ? void 0 : t.includes(l.value)) ? [
                0
              ] : [
              ],
              inTabOrder: !1,
              isForward: !0,
              language: r,
              tokens: [
                l
              ]
            }) : ((0, b.vU) ('No matching token found', {
              data: e.text
            }), i.createElement('div', null, e.text))
          }) (e, l, n[l]))))), i.createElement(Xe.Z, {
            disabled: s,
            inputElement: null !== (o = d.current[u]) && void 0 !== o ? o : void 0,
            language: r,
            onChange: ({
            }, e) =>m({
              guess: e,
              index: u
            }),
            value: null !== (c = null == g ? void 0 : g.guess) && void 0 !== c ? c : ''
          }))
        },
        Header: ({
          challenge: e
        }) =>i.createElement('span', null, (0, _._i) (16472, {
          num_broken: e.displayTokens.filter((e=>e.damageStart)).length
        }))
      },
      [
        S.Sm.TypeClozeTable
      ]: {
        Container: wn,
        Content: Sn,
        Header: En
      },
      [
        S.Sm.TypeCompleteTable
      ]: {
        Container: wn,
        Content: Sn,
        Header: En
      }
    },
    Tn = ({
      index: e
    }) =>{
      var t;
      const n = (0, Z.tX) (),
      a = (0, Z.Fx) ((t=>(0, g.is) (t).challenges[e])),
      s = (0, Z.Fx) ((t=>t.player.challengeStates[e])),
      r = (0, Z.Fx) (g.Rv),
      l = (0, Z.Fx) ((e=>e.player.hints[a.id])),
      o = (0, Z.Fx) (g.$4),
      c = (0, Z.Fx) ((e=>e.player.status === pe.cS.Guessing || e.player.status === pe.cS.Showing)),
      d = (0, Z.Fx) ((e=>e.player.status === pe.cS.SpeakRetryBlaming)),
      u = (0, Z.Fx) ((e=>e.player.status === pe.cS.Sliding)),
      p = (0, Z.Fx) (g.iH),
      m = (0, Z.Fx) ((e=>e.player.sessionParams.isFinalLevel)),
      h = (0, Z.Fx) ((e=>e.player.session.type)),
      v = (0, Z.Fx) ((e=>(0, z.eK) ({
        browserSettings: e.browserSettings,
        challenge: a,
        isDesktop: o,
        session: e.player.session
      }))),
      _ = (0, Z.Fx) ((t=>e !== t.player.currentIndex || !c && !d && !u));
      i.useEffect((() =>{
        c && n({
          timestamp: Date.now(),
          type: 'CHALLENGE_STARTED'
        })
      }), [
        c
      ]);
      const {
        Container: f,
        Content: x,
        Header: b
      }
      = Nn[a.type],
      E = null !== (t = (0, ce.ky) ('indicatorType')) && void 0 !== t ? t : !m && a.indicatorType;
      return i.createElement(f, {
        challenge: a,
        challengeState: s,
        content: i.createElement(x, {
          challenge: a,
          challengeState: s,
          challengeToggleState: v,
          disabled: _,
          fromLanguage: r,
          hints: l,
          isDesktop: o,
          learningLanguage: p,
          onChange: e=>{
            n({
              type: 'CHALLENGE_GUESS_CHANGE',
              value: e
            }),
            [
              S.Sm.CharacterMatch,
              S.Sm.Match,
              S.Sm.Speak
            ].includes(a.type) && n((0, we.YK) (!1, Date.now()))
          }
        }),
        header: i.createElement('div', {
          className: kn['indicator-and-header']
        }, E ? i.createElement(K, {
          sessionType: h,
          type: E
        }) : null, i.createElement('h1', Object.assign({
        }, (0, Ee._q) (Se.V.ChallengeHeader), {
          className: kn.header
        }), i.createElement(b, {
          challenge: a,
          challengeToggleState: v,
          fromLanguage: r,
          learningLanguage: p
        })))
      })
    },
    Rn = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      _lane: '_1cjHm',
      'grow-in': '_2u4jm',
      'grow-in-explosive': 'jr7BZ',
      'lane-center': '_1Gexl _1cjHm',
      'lane-left': '_22MTc _1cjHm',
      'lane-right': '_3f-yb _1cjHm',
      popover: 'BkXvE',
      'popover-horizontal': 'C2DTP BkXvE',
      'popover-inner': '_1nIKu'
    },
    In = parseFloat(F.Z['margin-popover-stem']),
    Ln = ({
      config: {
        animation: e,
        bubblePointerLocation: t,
        bubblePointerSide: n,
        delay: a,
        horizontalDockPoint: r,
        maxWidth: l,
        shouldLimitToOneLine: o,
        verticalPosition: c
      },
      containerHeight: d,
      containerWidth: u,
      text: p
    }) =>{
      const m = i.useRef(null),
      [
        g,
        h
      ] = i.useState(0),
      v = 'left' === n || 'right' === n,
      _ = i.useCallback((() =>{
        if (m.current) {
          const e = v ? m.current.clientHeight : m.current.clientWidth,
          n = t * e - In;
          h(Math.min(Math.max(n, 10), e - 2 * In - 10))
        }
      }), [
        t,
        v
      ]);
      return i.useLayoutEffect((() =>{
        _()
      }), [
        d,
        u,
        _
      ]),
      i.createElement('div', {
        className: Rn[`lane-${ r }`],
        style: {
          bottom: 100 * c + '%',
          maxWidth: l ? 100 * l + '%' : 'calc(50% - 24px)'
        }
      }, i.createElement(Me.Z, {
        className: s() (Rn['grow-in' + (e ? `-${ e }` : '')], Rn['popover' + (v ? '-horizontal' : '')]),
        direction: 'left' === n ? 'right' : 'right' === n ? 'left' : 'up',
        innerClassName: Rn['popover-inner'],
        manualPositioning: !0,
        ref: m,
        stemContainerStyle: {
          left: v ? void 0 : g,
          top: v ? g : void 0,
          transform: v ? 'translateY(-50%) rotate(-90deg)' : 'translateX(-50%) rotate(180deg)'
        },
        style: {
          animationDelay: a / 60 + 's',
          transformOrigin: 'left' === n ? `left ${ g }px` : 'right' === n ? `right ${ g }px` : `${ g }px bottom`,
          whiteSpace: o ? 'nowrap' : void 0
        },
        zIndex: 1
      }, p))
    },
    Fn = ({
      isPlaying: e,
      template: {
        animation: {
          left: t,
          loopingPosition: n,
          right: a,
          url: s
        },
        message: r,
        secondary: l
      }
    }) =>{
      const o = (0, Z.Fx) ((e=>e.ui.viewportHeight)),
      c = (0, Z.Fx) ((e=>e.ui.viewportWidth)),
      d = i.useRef(null),
      [
        u,
        p
      ] = i.useState(!1),
      [
        m,
        g
      ] = i.useState(0),
      [
        h,
        v
      ] = i.useState(0),
      _ = i.useCallback((() =>{
        if (d.current) {
          const e = d.current.getBoundingClientRect(),
          t = Math.min(e.width / 938, e.height / 1223);
          g(1223 * t),
          v(938 * t)
        }
      }), [
      ]);
      i.useLayoutEffect((() =>{
        _()
      }), [
        o,
        c
      ]),
      i.useEffect((() =>{
        He.Z.preload()
      }), [
      ]);
      const f = (0, Z.PX) (void 0, (() =>We.U2(s)), [
        s
      ]);
      return i.createElement('div', {
        className: '_2lzAc',
        ref: d
      }, f ? i.createElement(i.Suspense, {
        fallback: null
      }, i.createElement(He.Z, {
        animationData: f,
        className: '_2IFQ2',
        isPlaying: e,
        loop: void 0 !== n,
        loopSegment: n ? [
          f.ip + n,
          f.op
        ] : void 0,
        onDOMLoaded: () =>p(!0),
        onDestroy: () =>p(!1)
      })) : null, i.createElement('div', {
        className: 'nohr8',
        style: {
          height: m,
          width: h
        }
      }, u && e ? i.createElement(i.Fragment, null, i.createElement(Ln, {
        config: t,
        containerHeight: m,
        containerWidth: h,
        text: r
      }), a && l ? i.createElement(Ln, {
        config: a,
        containerHeight: m,
        containerWidth: h,
        text: l
      }) : null) : null))
    },
    zn = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      _text: '_3k0W4',
      'text-scale': '_2-3Dt',
      forwards: '_1fTht',
      opacity: '_356QM',
      'text-opacity': '_1i6J5',
      'text-opacity-forwards': 'RpIb-',
      'text-bee': '_3TZQ2 _3k0W4',
      'text-fox': '_3q93y _3k0W4',
      'text-owl': '_2k29W _3k0W4',
      wrap: 'ngPWo'
    },
    Dn = ({
      children: e,
      className: t,
      color: n,
      delay: a = 0,
      fillMode: r,
      noOpacity: l,
      onAnimationEnd: o
    }) =>i.createElement('span', {
      className: s() (zn.wrap, t)
    }, i.createElement('span', {
      className: s() (zn[`text-${ n }`], {
        [
          zn.forwards
        ]: 'forwards' === r,
        [
          zn.opacity
        ]: !l
      }),
      onAnimationEnd: o,
      style: {
        animationDelay: `${ a }ms`
      }
    }, e)),
    jn = ({
      isPlaying: e,
      streak: t,
      template: {
        animation: {
          url: n
        },
        message: a
      }
    }) =>{
      const s = (0, Z.Fx) ((e=>e.ui.viewportHeight)),
      r = (0, Z.Fx) ((e=>e.ui.viewportWidth)),
      l = i.useRef(null),
      [
        o,
        c
      ] = i.useState(!1),
      [
        d,
        u
      ] = i.useState();
      i.useLayoutEffect((() =>{
        if (l.current) {
          const e = l.current.getBoundingClientRect(),
          t = Math.min(e.width / 870, e.height / 1060);
          u({
            fontSize: 70 * t,
            height: 1060 * t,
            width: 870 * t + 2
          })
        }
      }), [
        l,
        s,
        r
      ]),
      i.useEffect((() =>{
        He.Z.preload()
      }), [
      ]);
      const p = (0, Z.PX) (void 0, (() =>We.U2(n)), [
        n
      ]);
      return i.createElement('div', {
        className: '_32GBr',
        ref: l
      }, p ? i.createElement(i.Suspense, {
        fallback: null
      }, i.createElement(He.Z, {
        animationData: p,
        className: '_3r-Tl',
        isPlaying: e,
        onDOMLoaded: () =>c(!0),
        onDestroy: () =>c(!1)
      })) : null, i.createElement('div', {
        className: '_3plTW',
        style: d
      }, o && e ? i.createElement(Dn, {
        className: 'inEDC',
        color: (0, pe.SB) (t),
        delay: 14 / 60 * 1000,
        fillMode: 'forwards',
        noOpacity: !0
      }, a) : null))
    };
    var Zn = n(31542),
    Pn = n(5072),
    On = n(29049),
    An = n(54905);
    const Mn = '_3a2xz',
    Hn = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_1Zwon',
      'wrap-padded': '_2NOkh _1Zwon',
      '_player-container': 'wm1bO',
      'player-container-main': '_1jZrU wm1bO',
      'full-width': 'SOEyJ',
      'player-container-right': 'SQR8J wm1bO',
      slide: '_1HA7Y',
      'slide-final-level': 'qOA5w _1HA7Y',
      'ad-block-ad-container': '_39CMQ',
      'remove-ads': '_25Yj- _2__FI _2RTMn _3yAjN'
    };
    var Bn = n(89874),
    Un = n(84389);
    const Gn = ({
      achievement: e,
      isDisplayed: t
    }) =>i.createElement('div', {
      className: s() (Hn.slide, Bn.Z.slide)
    }, i.createElement('div', {
      className: Bn.Z.wrap
    }, i.createElement('div', Object.assign({
      className: Bn.Z.content
    }, (0, Ee._q) (Se.V.AchievementSlide)), i.createElement('div', {
      className: Mn
    }, i.createElement(An.C, {
      animate: t,
      id: e.name,
      level: e.tier
    })), i.createElement('h2', null, (0, _._i) (6608)), i.createElement('h3', null, (0, Un.Kv) (e)), i.createElement('div', {
      className: Bn.Z.tagline
    }, (0, _._i) (10746), ' ', (0, Un.A9) (e, !0, !1, ''))))),
    qn = ({
      achievement: e
    }) =>i.createElement('div', {
      className: s() (Hn.slide, Bn.Z.slide)
    }, i.createElement('div', {
      className: Bn.Z.wrap
    }, i.createElement('div', Object.assign({
      className: Bn.Z.content
    }, (0, Ee._q) (Se.V.AchievementV3Slide)), i.createElement('div', {
      className: Mn
    }, i.createElement(An.D, {
      complete: (0, Un.vO) (e),
      id: e.name,
      level: (0, Un.an) (e),
      size: 'large'
    })), i.createElement('h2', null, (0, _._i) (958, {
      achievement_name: (0, Un.Kv) (e)
    })), i.createElement('div', {
      className: Bn.Z.tagline
    }, (0, Un.A9) (e, !0, !1, '')))));
    var Wn = n(17991);
    var Vn = n(18313);
    const $n = ({
      course: e,
      treeSectionState: {
        sectionEndIndex: t,
        sectionIndex: n
      }
    }) =>{
      const a = e.sections[n].summary ? e.sections[n].summary : t === e.skills.length ? null : (0, _._i) (17854, {
        section: n + 2
      });
      return i.createElement('div', {
        className: s() (Hn.slide, Bn.Z.slide)
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', {
        className: Bn.Z.content
      }, i.createElement('div', {
        className: Bn.Z.illustration
      }, i.createElement('div', {
        className: 'GoUnn'
      }, i.createElement(Wn.Z, {
        checkpointStatus: Vn.jF.Complete,
        sectionIndex: n
      }))), i.createElement('h2', null, (0, _._i) (3433, {
        checkpoint: n + 1
      })), i.createElement('div', {
        className: Bn.Z.tagline
      }, a))))
    };
    var Xn = n(14074);
    const Kn = ({
      skill: e
    }) =>{
      const t = (0, Z.Fx) (g.lA);
      return i.useEffect((() =>{
        (0, E.j) ('final_level_failure_screen_show', {
          lesson_index: t.sessionParams.lessonIndex,
          total_lessons: e.lessons
        })
      }), [
      ]),
      i.createElement('div', {
        className: Hn.slide
      }, i.createElement('img', {
        src: Xn
      }), i.createElement('h2', null, (0, _._i) (23562)), i.createElement('div', null, (0, _._i) (17107)))
    };
    var Yn = n(33175);
    const Jn = () =>{
      const e = (0, Z.Fx) (g.lA);
      return i.createElement('div', {
        className: Hn.slide
      }, i.createElement('div', {
        className: '_2iBoT'
      }, i.createElement('img', {
        className: '_27mir',
        src: Yn
      }), i.createElement('div', {
        className: '_11kg0'
      }, e.partialXpGiven)), i.createElement('h2', null, (0, _._i) (28127, {
        xp: e.partialXpGiven
      })), i.createElement('div', null, (0, _._i) (28366)))
    };
    var Qn = n(57344),
    ea = n(83668),
    ta = n(75962),
    na = n(84774);
    const aa = '_2XScK',
    sa = ({
      onNextClick: e,
      promoType: t,
      skill: n
    }) =>{
      const a = (0, Z.tX) ();
      return i.useEffect((() =>{
        switch (t) {
          case 'gold':
            (0, E.j) ('final_level_se_promo_show', {
            });
            break;
          case 'practice':
            (0, E.j) ('final_level_skill_practice_promo_show', {
            });
            break;
          default:
            (0, j.RJ) (t)
        }
      }), [
      ]),
      i.createElement('div', {
        className: '_3_pda qOA5w _1HA7Y'
      }, i.createElement('div', {
        className: 'cdIsy'
      }, i.createElement(i.Suspense, {
        fallback: null
      }, i.createElement(He.Z, {
        className: '_32hdj',
        isPlaying: !0,
        loop: !0,
        path: na
      })), i.createElement('div', {
        className: '_3hssa _2XScK'
      }, u.ZP.times(n.levels - 1, (e=>i.createElement(Qn.Z, {
        className: '_1ywqU',
        crownVariant: 'gold',
        key: e,
        outlineVariant: 'none'
      }))), i.createElement('img', {
        className: '_1mNBf',
        src: ta
      })), i.createElement('div', Object.assign({
        className: aa
      }, (0, Ee._q) (Se.V.FinalLevelPromo)), i.createElement('h2', {
        className: '_2V8oF'
      }, (0, _._i) (29852)), i.createElement('div', {
        className: '_2b74z'
      }, 'gold' === t ? (0, _._i) (29853) : 'practice' === t ? (0, _._i) (30978, {
        skill: n.name
      }) : (0, j.RJ) (t))), i.createElement('div', {
        className: aa
      }, i.createElement(ea.Z, {
        className: '_2z6Yb _26QYy',
        onClick: () =>{
          switch (t) {
            case 'gold':
              (0, E.j) ('final_level_se_promo_tap', {
              });
              break;
            case 'practice':
              (0, E.j) ('final_level_skill_practice_promo_tap', {
              });
              break;
            default:
              (0, j.RJ) (t)
          }
          a({
            type: 'sessionEnd/CTA_CLICK'
          })
        },
        onDismiss: e,
        origin: 'gold' === t ? 'session_end' : 'practice' === t ? 'skill_practice_promo' : (0, j.RJ) (t),
        skill: n
      }), i.createElement(p.Z, Object.assign({
        className: 'jnPAJ _2Xxi7'
      }, (0, Ee._q) (Se.V.MaybeLater), {
        onClick: () =>{
          switch (t) {
            case 'gold':
              (0, E.j) ('final_level_se_promo_dismiss', {
              });
              break;
            case 'practice':
              (0, E.j) ('final_level_skill_practice_promo_dismiss', {
              });
              break;
            default:
              (0, j.RJ) (t)
          }
          e()
        },
        variant: 'text'
      }), (0, _._i) (17253)))))
    };
    var ia = n(47725),
    ra = n(66369);
    const la = ({
      productName: e
    }) =>{
      const t = (0, Z.tX) ();
      return i.createElement('div', {
        className: s() (Hn.slide, Bn.Z.slide, '_37QYa')
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', {
        className: Bn.Z.content
      }, i.createElement('div', {
        className: s() (Bn.Z.illustration, '_31j_R')
      }), i.createElement('h2', {
        className: '_16Put'
      }, 'Try ', e, '!'), i.createElement('div', {
        className: Bn.Z.tagline
      }, 'Earn XP by responding to a quick, open-ended prompt, and get writing help as you type!')), i.createElement('div', {
        className: Bn.Z.cta
      }, i.createElement(ia.Z, {
        className: s() ((0, p.y) ({
          variant: 'solid'
        }), Bn.Z.button),
        href: 'https://hoots.duolingo.com?referrer=web&campaign=session_end_ad',
        onClick: () =>{
          t({
            type: 'sessionEnd/CTA_CLICK'
          }),
          t(ra.y()),
          (0, E.j) ('hoots_ad_click', {
          })
        }
      }, 'Check it out'))))
    };
    var oa = n(9249),
    ca = n(49473);
    var da = n(51827),
    ua = n(85381);
    const pa = ({
      onClose: e
    }) =>{
      const t = (0, Z.tX) (),
      n = (0, Z.CC) (),
      [
        a,
        s
      ] = i.useState(!1),
      [
        r,
        l
      ] = i.useState(!1),
      o = (0, Z.Fx) ((e=>e.user.streak));
      return i.useEffect((() =>{
        (0, E.j) ('premium_brand_ad_show', {
          context: 'immersive_plus'
        }),
        (0, da.Ph) ();
        const e = setTimeout((() =>s(!0)), 300);
        return () =>clearTimeout(e)
      }), [
      ]),
      i.createElement('div', {
        className: '_3dgYU _2C9ly'
      }, i.createElement('div', {
        className: '_1uaPk'
      }, i.createElement('div', {
        className: '_3buG7'
      }, i.createElement('div', {
        className: 'kD9M3'
      }, i.createElement('img', Object.assign({
        className: '_2l_H6',
        src: 'https://d35aaqx5ub95lt.cloudfront.net/images/duolingo-plus-logo-feather.svg'
      }, (0, Ee._q) (Se.V.PlusOfferLogo))), i.createElement('img', {
        className: '_3cAkW',
        src: ca
      }), i.createElement('div', {
        className: '_23Yqu'
      }, i.createElement('div', {
        className: '_3ISUW'
      }, (0, _._i) (31204, {
        num: o
      })), (0, _._i) (26080))), i.createElement('div', {
        className: '_38nn9'
      }, i.createElement(p.Z, {
        className: '_3RYO5 jn69D',
        onClick: () =>{
          var s,
          i,
          r,
          o;
          a && (t({
            type: 'sessionEnd/CTA_CLICK'
          }), (0, ce.gQ) ('debugSlides') ? e() : (s = void 0, i = void 0, o = function * () {
            l(!0);
            try {
              const a = yield h.Vi.purchaseUserShopItem('immersive_subscription', {
                productId: ua.$A
              });
              (0, E.j) ('purchase_item', {
                item_name: 'immersive_subscription',
                purchased_via: 'item_offer'
              }),
              t(oa.w4(a.purchaseId));
              const s = (0, g.yk) (n.getState());
              (null == s ? void 0 : s.subscriptionInfo) && t({
                plusExpirationDate: s.subscriptionInfo.expectedExpiration,
                type: 'ACTIVATE_PLUS'
              }),
              t({
                notificationType: 'PLUS_BADGE',
                type: 'CREATE_PERSISTENT_NOTIFICATION'
              }),
              e()
            } catch (e) {
              (0, b.vU) (e),
              l(!1)
            }
          }, new ((r = void 0) || (r = Promise)) ((function (e, t) {
            function n(e) {
              try {
                l(o.next(e))
              } catch (e) {
                t(e)
              }
            }
            function a(e) {
              try {
                l(o.throw(e))
              } catch (e) {
                t(e)
              }
            }
            function l(t) {
              var s;
              t.done ? e(t.value) : (s = t.value, s instanceof r ? s : new r((function (e) {
                e(s)
              }))).then(n, a)
            }
            l((o = o.apply(s, i || [
            ])).next())
          }))))
        },
        submitting: r,
        variant: 'solid'
      }, (0, _._i) (30356))))))
    },
    ma = ({
      newRupees: e
    }) =>{
      const t = (0, Z.tX) ();
      return i.createElement('div', {
        className: s() (Hn.slide, Bn.Z.slide)
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', Object.assign({
        className: Bn.Z.content
      }, (0, Ee._q) (Se.V.LingotSlide)), i.createElement('div', {
        className: s() (Bn.Z.illustration, '_2fJ5z')
      }), i.createElement('h2', {
        className: Bn.Z.title
      }, (0, _._i) (8357, {
        new_rupees: e
      })), i.createElement('div', {
        className: Bn.Z.tagline
      }, (0, _._i) (8778))), i.createElement('div', {
        className: Bn.Z.cta
      }, i.createElement(ia.Z, {
        className: s() ((0, p.y) ({
          variant: 'solid'
        }), Bn.Z.button),
        href: '/shop',
        onClick: () =>t({
          type: 'sessionEnd/CTA_CLICK'
        })
      }, (0, _._i) (3403)))))
    };
    var ga = n(882),
    ha = n(8835);
    const va = ({
      type: e
    }) =>{
      const t = (0, Z.Fx) ((e=>e.user.mistakeCountInfo));
      if (i.useEffect((() =>{
        var n,
        a;
        switch (e) {
          case 'gold':
          case 'remaining':
            (0, E.j) ('mistakes_inbox_plus_se_show', {
              mistakes_inbox_counter: null !== (n = null == t ? void 0 : t.mistakeCount) && void 0 !== n ? n : - 1
            });
            break;
          case 'prompt':
            (0, E.j) ('premium_ad_show', {
              iap_context: 'mistakes_inbox_session_end'
            }),
            (0, E.j) ('mistakes_inbox_free_se_show', {
              mistakes_inbox_counter: null !== (a = null == t ? void 0 : t.mistakeCount) && void 0 !== a ? a : - 1
            })
        }
      }), [
      ]), void 0 === t) throw Error('mistakes inbox slide called with no mistakes info');
      const n = t.mistakeCount,
      a = (() =>{
        switch (e) {
          case 'gold':
            return i.createElement('img', {
              className: '_2fzN-',
              src: ha
            });
          case 'prompt':
          case 'remaining':
            return i.createElement('div', {
              className: '_2lwB4'
            }, i.createElement('span', {
              className: '_1yo2O Q2kwm'
            }, i.createElement('img', {
              className: '_3zz58',
              src: ga
            })), i.createElement('span', {
              className: '_2nLQl Q2kwm'
            }, i.createElement('span', {
              className: '_2mlUC _1LYta _1U6jB _1nlVc _2fOC9 t5wFJ _3dtSu _25Cnc _3yAjN UCrz7 A6kvk'
            }, n)));
          default:
            return (0, j.RJ) (e),
            ''
        }
      }) (),
      s = (() =>{
        switch (e) {
          case 'gold':
            return (0, _._i) (25420);
          case 'prompt':
            return (0, _._i) (25412);
          case 'remaining':
            return (0, _._i) (25431, {
              mistakesCount: n
            });
          default:
            return (0, j.RJ) (e),
            ''
        }
      }) (),
      r = (() =>{
        switch (e) {
          case 'gold':
            return (0, _._i) (25410);
          case 'prompt':
            return (0, _._i) (25425, {
              mistakesCount: n
            });
          case 'remaining':
            return (0, _._i) (25417);
          default:
            return (0, j.RJ) (e),
            ''
        }
      }) ();
      return i.createElement('div', {
        className: Hn.slide
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', {
        className: Bn.Z.content
      }, a, i.createElement('h2', null, s), i.createElement('div', {
        className: Bn.Z.tagline
      }, r)), i.createElement('img', {
        className: '_2eryN',
        src: 'https://d35aaqx5ub95lt.cloudfront.net/images/duolingo-plus-badge.svg'
      })))
    },
    _a = ({
      languageName: e,
      percentage: t,
      view: n
    }) =>{
      const a = 'startFromBasics' === n,
      r = a ? 'NbxLc' : '_2L1Z1',
      l = a ? (0, _._i) (11748) : (0, _._i) (3923),
      o = a ? (0, _._i) (8242, {
        language_name: e
      }) : (0, _._i) (8475, {
        language_name: e,
        percent: null != t ? t : 0
      });
      return i.createElement('div', {
        className: Hn.slide
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', {
        className: Bn.Z.content
      }, i.createElement('div', {
        className: s() (Bn.Z.illustration, r)
      }), i.createElement('h1', {
        className: '_3MdOa'
      }, l), i.createElement('p', {
        className: s() (Bn.Z.tagline, '_3AdLl')
      }, o))))
    };
    var fa = n(71342);
    const xa = ({
      onClose: e
    }) =>{
      const t = i.useRef(!1);
      return i.useEffect((() =>{
        (0, da.Ph) (),
        (0, da.$L) ()
      }), [
      ]),
      i.createElement('div', {
        className: '_2HrD8 _2C9ly'
      }, i.createElement(fa.Z, {
        closeFlow: () =>{
          (0, E.j) ('session_end_message_dismiss_clicked', {
            message_name: 'plusNewYears',
            session_end_screen_name: 'plus_new_years_promotion_carousel_offer'
          }),
          e()
        },
        didClickFreeTrial: !1,
        isOffer: !1,
        isSessionEndSlide: !0,
        isVoluntary: !1,
        onAdvanceStep: () =>{
          t.current || (0, E.j) ('session_end_message_cta_clicked', {
            message_name: 'plusNewYears',
            session_end_screen_name: 'plus_new_years_promotion_carousel_offer'
          }),
          t.current = !0
        },
        trackingProps: {
          iap_context: 'new_years_session_end_promo'
        }
      }))
    };
    var ba = n(45342);
    const Ea = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'podcast-illustration': '_3tc69'
    };
    var Sa = n(95975);
    const ka = ({
      fromLanguage: e,
      learningLanguage: t
    }) =>{
      const n = (0, Z.tX) (),
      a = (() =>{
        switch (`${ t }<${ e }`) {
          case 'es<en':
            return `${ Sa.$ }/introducing-the-duolingo-spanish-podcast-61e07ec8affe`;
          case 'en<es':
            return 'https://open.spotify.com/show/0RjrXVjw3FhNlO7saEPoSF?si=CNMcIb7ETZmCm6oUCRkT2w';
          case 'en<pt':
            return `${ Sa.$ }/ingles-portugues`;
          case 'fr<en':
            return `${ Sa.$ }/french`;
          default:
            return Sa.$
        }
      }) ();
      return i.createElement('div', {
        className: s() (Hn.slide, Ea.slideStyles)
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', Object.assign({
        className: Bn.Z.content
      }, (0, Ee._q) (Se.V.PodcastSlide)), i.createElement('img', {
        className: Bn.Z.illustration,
        src: 'https://d35aaqx5ub95lt.cloudfront.net/images/duo-headphones.svg'
      }), i.createElement('img', {
        className: Bn.Z['duolingo-product-logo'],
        src: ba
      }), i.createElement('div', {
        className: Bn.Z.tagline
      }, (0, _._i) (1582, {
        language_name: (0, f.vY) (t)
      }))), i.createElement('div', {
        className: Bn.Z.cta
      }, i.createElement(ia.Z, {
        className: s() ((0, p.y) ({
          variant: 'solid'
        }), Bn.Z.button),
        href: a,
        onClick: () =>{
          n({
            type: 'sessionEnd/CTA_CLICK'
          }),
          n(ra.y()),
          (0, E.j) ('podcast_ad_click', {
          })
        }
      }, (0, _._i) (14794)))))
    };
    var ya = n(35077),
    wa = n(61519);
    const Ca = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      bold: '_3UrNW',
      container: '_3zO_s',
      'plus-badge': '_8rdsE',
      '_ribbon-circle': '_2APeh',
      '_animation-circle-frames': '_2hcX1',
      'ribbon-circle-blue': '_3noeg',
      'ribbon-circle-green': 'zvI4o',
      'ribbon-circle-orange': '_2jL7m',
      'ribbon-circle-purple': '_3AMqQ',
      'ribbon-circle-red': '_2oX8s',
      '_ribbon-circle-filled': '_1u5Um',
      '_ribbon-circle-hollow': '_10taY',
      'ribbon-circle-0': '_1Jm6I _2APeh _10taY',
      'ribbon-circle-1': '_2ctgh _2APeh _1u5Um',
      'ribbon-circle-2': '_1cqhS _2APeh _1u5Um',
      'ribbon-circle-3': '_1tc2E _2APeh _10taY',
      'ribbon-container': '_2SlyE',
      'ribbon-row': '_3j1ae',
      'ribbon-row-item': '_2MeGQ',
      'ribbon-scale': 'vSo1W',
      '_ribbon-scale-keyframes': '_1Jf98',
      'text-subtitle': 'vgI4m',
      'text-title': 'EERlS'
    };
    var Na = n(57527);
    const Ta = {
      preprocess: e=>e.replace(/(\{\{.+?\}\})/g, '<strong>$1</strong>')
    },
    Ra = (0, ya.Z) ((({
      course: {
        progressQuizHistory: e
      }
    }) =>{
      const {
        mostRecentResult: t,
        bestResult: n,
        secondMostRecentResult: a,
        bestResultExcludingMostRecent: r
      }
      = (0, Na.r_) (e);
      if (void 0 === t || void 0 === n) return (0, b.Kp) ('Showing session end progress quiz results with empty progress quiz history', {
        once: !0
      }),
      null;
      const l = (0, Na._Y) (t.score),
      o = (0, Na._Y) (n.score),
      c = a && (0, Na._Y) (a.score),
      d = r && (0, Na._Y) (r.score),
      p = l - (null != c ? c : 0),
      m = void 0 === c ? 0 : l / c - 1,
      g = p > 0,
      h = (0, Na.VH) (l),
      [
        v,
        f
      ] = (() =>{
        const e = void 0 === d || Math.trunc(l) > Math.trunc(d),
        t = l === Na.ix,
        n = (0, Na.Zx) (Na.ix),
        a = (0, Na.Zx) (l);
        return t ? [
          (0, _._i) (6678),
          (0, _._i) (1311, {
            maxScore: n,
            score: a
          }, Ta)
        ] : e ? 'lowest' === h.rank ? [
          (0, _._i) (16642),
          (0, _._i) (10781, {
            maxScore: n,
            score: a
          }, Ta)
        ] : 'highest' === h.rank ? [
          (0, _._i) (16084),
          (0, _._i) (8944, {
            maxScore: n,
            score: a
          }, Ta)
        ] : [
          (0, _._i) (16084),
          (0, _._i) (3460, {
            maxScore: n,
            nextTierScore: (0, Na.Zx) (Math.floor(l) + 1),
            score: a
          }, Ta)
        ] : g ? [
          (0, _._i) (24248),
          (0, _._i) (18206, {
            improvement: m >= 0.05 && m < 1 ? m.toLocaleString(window.duo.uiLanguage, {
              style: 'percent'
            }) : (0, Na.Zx) (p),
            maxScore: n,
            score: a
          }, Ta)
        ] : [
          (0, _._i) (12446),
          (0, _._i) (13066, {
            maxScore: n,
            score: (0, Na.Zx) (null != c ? c : 0)
          }, Ta)
        ]
      }) ();
      return i.createElement('div', {
        className: Ca.container
      }, i.createElement('div', {
        className: Ca['ribbon-container']
      }, i.createElement(wa.Z, {
        className: Ca['ribbon-scale'],
        displayScore: l,
        size: 'large',
        style: 'auto'
      }), (x = h.color, u.DZ(4, (e=>i.createElement('div', {
        className: s() (Ca[`ribbon-circle-${ e }`], Ca[`ribbon-circle-${ x }`]),
        key: e
      }))))), i.createElement('div', {
        className: Ca['ribbon-row']
      }, Na.Ux.map((({
        color: e,
        unlockScore: t
      }, n) =>i.createElement(wa.Z, {
        className: Ca['ribbon-row-item'],
        key: n,
        size: 'tiny',
        style: t > o ? 'locked' : e
      })))), i.createElement('div', {
        className: Ca['text-title']
      }, v), i.createElement('div', {
        className: Ca['text-subtitle']
      }, f), i.createElement('img', {
        className: Ca['plus-badge'],
        src: 'https://d35aaqx5ub95lt.cloudfront.net/images/duolingo-plus-badge.svg'
      }));
      var x
    }), 'pq_history', (e=>({
      course: {
        progressQuizHistory: e.map(((e, t) =>({
          endTime: 100 * t + 1,
          score: e,
          startTime: 100 * t
        })))
      }
    })));
    var Ia = n(69635),
    La = n(16228);
    class Fa extends i.Component {
      componentDidMount() {
        var e,
        t;
        null === (t = (e = this.props).onMount) || void 0 === t || t.call(e)
      }
      render() {
        const {
          buttonText: e,
          onClick: t,
          subtitle: n,
          title: a
        }
        = this.props;
        return i.createElement('div', {
          className: s() (Hn.slide, Bn.Z.slide, '_3NNRA')
        }, i.createElement('div', {
          className: Bn.Z.wrap
        }, i.createElement('div', {
          className: Bn.Z.content
        }, i.createElement('div', {
          className: s() (Bn.Z.illustration, '_3kCnP')
        }), i.createElement('h2', null, a), i.createElement('div', {
          className: Bn.Z.tagline
        }, n)), i.createElement('div', {
          className: Bn.Z.cta
        }, i.createElement(p.Z, {
          className: Bn.Z.button,
          onClick: t,
          variant: 'solid'
        }, e)), i.createElement('img', {
          className: '_1EZWE',
          src: 'https://d35aaqx5ub95lt.cloudfront.net/images/duolingo-plus-badge.svg'
        })))
      }
    }
    const za = ({
      dispatch: e,
      isProbablyEligibleForFreeTrial: t,
      user: n
    }) =>{
      const a = (0, Ia.k6) (),
      s = t ? 'experiment' === (0, de.j6) ('plus_web_standard_cta_copy_v2', void 0) ? (0, _._i) (11291) : (0, _._i) (20497) : (0, _._i) (22460);
      return i.createElement(Fa, {
        buttonText: s,
        onClick: () =>{
          e({
            type: 'sessionEnd/CTA_CLICK'
          }),
          (0, da.qC) (),
          (0, ua.eO) ({
            didClickFreeTrial: t,
            handleClose: () =>a.push('/'),
            trackingProps: {
              iap_context: 'progress_quiz_session_end'
            }
          }, e)
        },
        onMount: () =>{
          (0, da.Pg) (n),
          (0, E.j) ('premium_ad_show', {
            iap_context: 'progress_quiz_session_end'
          })
        },
        subtitle: (0, _._i) (16920),
        title: (0, _._i) (4278)
      })
    },
    Da = (ja = ({
      course: {
        progressQuizHistory: e
      },
      dispatch: t,
      user: n
    }) =>{
      const {
        mostRecentResult: a
      }
      = (0, Na.r_) (e);
      return i.createElement(Fa, {
        buttonText: (0, _._i) (14858),
        onClick: () =>{
          t({
            type: 'sessionEnd/CTA_CLICK'
          }),
          t((0, La.F) ('session_end', !0))
        },
        onMount: () =>{
          (0, da.AD) (n),
          (0, E.j) ('progress_quiz_session_end_cta_shown', {
          })
        },
        subtitle: void 0 === a ? (0, _._i) (9478) : (0, _._i) (7568, {
          score: (0, Na._Y) (a.score)
        }, {
          preprocess: e=>e.replace(/(\{\{.+?\}\})/g, '<strong>$1</strong>')
        }),
        title: void 0 === a ? (0, _._i) (2229) : (0, _._i) (4698)
      })
    }, (0, ya.Z) (ja, 'pq_history', (e=>({
      course: {
        progressQuizHistory: e.map(((e, t) =>({
          endTime: 100 * t + 1,
          score: e,
          startTime: 100 * t
        })))
      }
    }))));
    var ja,
    Za = n(64213),
    Pa = n(56);
    const Oa = ({
      animate: e,
      isDisplayed: t,
      newRupees: n,
      type: a
    }) =>i.createElement('div', {
      className: s() (Hn.slide, Bn.Z.slide)
    }, i.createElement('div', {
      className: Bn.Z.wrap
    }, i.createElement('div', Object.assign({
      className: Bn.Z.content
    }, (0, Ee._q) (Se.V.RewardSlide)), i.createElement('div', {
      className: Pa.Z['chest-container']
    }, i.createElement(Za.Z, {
      animate: t && e && 'lingots' === a,
      type: a
    })), i.createElement('h2', {
      className: Bn.Z.title
    }, 'lingots' === a ? (0, _._i) (8357, {
      new_rupees: n
    }) : (0, _._i) (10715)), i.createElement('div', {
      className: Bn.Z.tagline
    }, 'lingots' === a ? (0, _._i) (16379) : (0, _._i) (13302)))));
    var Aa = n(83936);
    const Ma = ({
      onClose: e
    }) =>{
      var t;
      const n = (0, Z.Fx) (g.__),
      a = (0, Z.tX) (),
      s = i.useRef(!1);
      i.useEffect((() =>{
        (0, da.Ph) (),
        a({
          timestamp: Date.now(),
          type: 'SESSION_END_PLUS_AD_SHOWN'
        })
      }), [
      ]);
      const r = null !== (t = (0, Z.Fx) (Aa.QK)) && void 0 !== t && t,
      l = (0, Z.CC) (),
      [
        o
      ] = i.useState((() =>{
        var e,
        t;
        return r && (null !== (t = null === (e = l.getState().uiPersisted.sessionEndPlusAdShown) || void 0 === e ? void 0 : e.count) && void 0 !== t ? t : 0) % 3 == 2
      })),
      c = o && 'control' !== (0, de.j6) ('sigma_web_family_se_promo', void 0);
      return i.createElement('div', {
        className: '_2bq-a _2C9ly'
      }, i.createElement(fa.Z, {
        closeFlow: () =>{
          a({
            type: 'sessionEnd/DISMISSED'
          }),
          e()
        },
        didClickFreeTrial: !1,
        isOffer: !1,
        isSessionEndSlide: !0,
        isVoluntary: !1,
        onAdvanceStep: () =>{
          s.current || a({
            type: 'sessionEnd/CTA_CLICK'
          }),
          s.current = !0
        },
        trackingProps: {
          iap_context: c ? 'session_end_family' : !1 === (0, da.RZ) (n) ? 'session_end_promo_no_trial' : 'session_end_promo_trial'
        }
      }))
    };
    var Ha = n(5137),
    Ba = n(19640),
    Ua = n(53312);
    const Ga = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'final-level-background': '#222151',
      _badge: 'FHiN7',
      badge: '_2QVfv FHiN7',
      'badge-final-level': '_2i_hR FHiN7',
      'crown-meter': '_2zlUc',
      crowns: '_2EvZA',
      'title-final-level': '_1T6hB',
      'continue-button-final-level': '_2rYmW _26QYy'
    };
    var qa = n(17251);
    const Wa = parseFloat(F.Z['max-width-skill']),
    Va = parseFloat(F.Z['max-width-skill-mobile']);
    class $a extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          showLevelUpAnimation: !1,
          showPreviousCrowns: !1
        },
        this.crownsCountRef = i.createRef(),
        this.playedSound = !1,
        this.renderCrowns = () =>{
          const {
            crowns: e
          }
          = this.props,
          {
            showPreviousCrowns: t
          }
          = this.state;
          return i.createElement(Ua.Z, {
            className: Ga.crowns,
            outlineVariant: 'none',
            ref: this.crownsCountRef,
            total: t ? e - 1 : e
          })
        }
      }
      static getDerivedStateFromProps(e, t) {
        return !t.showLevelUpAnimation && e.animations.find((t=>'SKILL_LEVEL_UP' === t.name && t.skillId === e.skills[0].id)) ? {
          showLevelUpAnimation: !0,
          showPreviousCrowns: !0
        }
         : null
      }
      render() {
        const {
          animations: e,
          isDesktop: t,
          isDisplayed: n,
          isFinalLevel: a,
          onNextClick: s,
          skills: r,
          type: l
        }
        = this.props,
        {
          showLevelUpAnimation: o
        }
        = this.state,
        c = r[0],
        d = (0, qa.Re) (c) >= qa.sJ.GILDED;
        let u,
        m = null;
        switch (l) {
          case 'leveledUpSkill':
          case 'testedOutSkill':
            a ? (u = (0, _._i) (27111), m = (0, _._i) (27112)) : (u = (0, _._i) (5249, {
              level: c.finishedLevels
            }), m = d ? null : (0, _._i) (3650));
            break;
          case 'testedOutSkills':
            u = 1 === r.length ? (0, _._i) (18107, {
              skill_name: c.name
            }) : (0, _._i) (18731, {
              first_skill_name: c.name,
              remaining_skill_count: r.length - 1
            })
        }
        !this.playedSound && n && ((0, U.GN) (U.Tc.BONUS), this.playedSound = !0);
        const g = Object.assign(Object.assign(Object.assign({
        }, c), {
          decayed: !1
        }), o ? {
          finishedLessons: c.lessons
        }
         : {
        });
        return i.createElement('div', Object.assign({
        }, (0, Ee._q) (Se.V.SkillSlide), {
          className: Hn['slide' + (a ? '-final-level' : '')]
        }), o && n ? t ? this.renderCrowns() : (0, Zn.createPortal) (this.renderCrowns(), document.getElementById('overlays')) : null, i.createElement('div', {
          className: Bn.Z.wrap
        }, i.createElement('div', {
          className: Bn.Z['content' + (a ? '-final-level' : '')]
        }, i.createElement('div', {
          className: Ga['badge' + (a ? '-final-level' : '')]
        }, i.createElement(Ha.Z, {
          animation: n ? e.find((e=>'SKILL_LEVEL_UP' === e.name && e.skillId === g.id)) : void 0,
          backgroundColor: a ? Ga['final-level-background'] : void 0,
          crownsCountRef: this.crownsCountRef,
          inSessionEnd: !0,
          isFinalLevel: (0, qa.Re) (c) === qa.sJ.FINALIZED,
          onCurrentAnimationsChange: e=>{
            e.includes('CROWNS_INCREMENT') && this.setState({
              showPreviousCrowns: !1
            })
          },
          outlineVariant: a ? 'bold-dark' : 'bold-light',
          sectionStatus: Vn.HI.Unlocked,
          skill: g,
          width: 1.6 * (t ? Wa : Va)
        })), a ? i.createElement(Ba.Z, {
          className: Ga['crown-meter'],
          crownSize: t ? 46 : 38,
          crowns: g.finishedLevels,
          fillVariant: 'dark',
          hasFinalLevel: !0,
          outlineStyle: 'dark',
          totalCrowns: g.levels
        }) : null, i.createElement('h2', {
          className: a ? Ga['title-final-level'] : null
        }, u), m ? i.createElement('div', {
          className: Bn.Z[a ? 'tagline-final-level' : 'tagline']
        }, m) : null, a ? i.createElement(p.Z, {
          className: Ga['continue-button-final-level'],
          onClick: s,
          variant: 'solid'
        }, (0, _._i) (4906)) : null)))
      }
    }
    const Xa = (0, d.$j) ((e=>({
      animations: (0, Aa.w0) (e),
      crowns: (0, g.Oz) (e).crowns,
      isDesktop: (0, g.$4) (e)
    }))) ($a);
    var Ka = n(84473),
    Ya = n(67699);
    const Ja = ({
      animation: e = 'fade',
      children: t,
      className: n,
      slideElementKey: a
    }) =>{
      const r = (0, Z.Tb) ();
      return i.createElement(Ka.Z, {
        className: s() ('jWza5', {
          _35v0y: 'fade' === e,
          _1ECTX: 'slide' === e,
          Xyyoj: r
        }, n)
      }, i.createElement(Ya.Z, {
        classNames: {
          enter: '_3ly4L',
          enterActive: '_1c8Rc',
          enterDone: '_1bemu',
          exit: '_5H-kD',
          exitActive: '_2YVZq',
          exitDone: '_3uWxe'
        },
        key: a,
        timeout: 'fade' === e ? pe.UV : 200
      }, i.createElement('div', {
        className: '_863KE'
      }, t)))
    },
    Qa = ({
      language: e
    }) =>{
      const t = (0, Z.tX) ();
      return i.createElement('div', {
        className: s() (Hn.slide, Bn.Z.slide)
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', {
        className: Bn.Z.content
      }, i.createElement('div', {
        className: s() (Bn.Z.illustration, 'MOFfu')
      }), i.createElement('h2', null, (0, _._i) (7690), ' '), i.createElement('div', {
        className: Bn.Z.tagline
      }, (0, _._i) (15777, {
        language_name: (0, f.vY) (e)
      }))), i.createElement('div', {
        className: Bn.Z.cta
      }, i.createElement(ia.Z, {
        className: s() ((0, p.y) ({
          variant: 'solid'
        }), Bn.Z.button),
        href: '/stories',
        onClick: () =>{
          t({
            type: 'sessionEnd/CTA_CLICK'
          }),
          (0, E.j) ('stories_ad_click', {
          })
        }
      }, (0, _._i) (20851)))))
    };
    var es = n(71525);
    const ts = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'story-icons': '_1sMCY',
      center: '_25H1l',
      left: '_3-rCj',
      button: '_165ZD',
      right: '_1eAgX',
      'cover-illustration': '_2jhBw',
      sparkle: '_2ZWdp',
      'sparkle-large': '_2zBF7 _2ZWdp',
      'sparkle-large-animated': '_2pfWD _2zBF7 _2ZWdp _1XNyc',
      'sparkle-medium': '_35yrB _2ZWdp',
      'sparkle-medium-animated': '_1thqh _35yrB _2ZWdp _1XNyc',
      'sparkle-small': 'Uu-c5 _2ZWdp',
      'sparkle-small-animated': '_1ONfM Uu-c5 _2ZWdp _1XNyc'
    },
    ns = [
      ts.left,
      ts.center,
      ts.right
    ],
    as = ({
      firstUnlockedSet: e,
      isDisplayed: t,
      isFirstUnlock: n,
      numStoriesUnlocked: a
    }) =>{
      const r = (0, Z.tX) ();
      return i.useEffect((() =>{
        (0, E.j) ('stories_set_chest_show', {
        }),
        r({
          type: 'stories/HAS_SEEN_UNLOCKED_STORIES_SLIDE'
        })
      }), [
      ]),
      i.createElement('div', {
        className: s() (Hn.slide, Bn.Z.slide)
      }, i.createElement('div', {
        className: Bn.Z.wrap
      }, i.createElement('div', Object.assign({
        className: Bn.Z.content
      }, (0, Ee._q) (Se.V.StoriesSlide)), i.createElement('div', {
        className: ts['story-icons']
      }, i.createElement('div', {
        className: ts['sparkle-large' + (t ? '-animated' : '')]
      }), i.createElement('div', {
        className: ts['sparkle-medium' + (t ? '-animated' : '')]
      }), i.createElement('div', {
        className: ts['sparkle-small' + (t ? '-animated' : '')]
      }), ns.map(((t, n) =>{
        const a = e[n];
        return i.createElement(es.Z, {
          className: t,
          imageClassName: ts['cover-illustration'],
          isButton: !1,
          key: t,
          lipClassName: ts.button,
          lipColor: `#${ a.colors.activeLip }`,
          src: a.illustrationUrls.active,
          storyFromLanguageName: a.title
        })
      }))), i.createElement('h2', null, n ? (0, _._i) (6661, {
        number_1: a
      }) : (0, _._i) (25704, {
        None: a,
        num_stories: a
      })), i.createElement('div', {
        className: Bn.Z.tagline
      }, (0, _._i) (25717)))))
    },
    ss = ({
      firstGift: e
    }) =>i.createElement('div', {
      className: Hn.slide
    }, i.createElement('div', {
      className: Bn.Z.wrap
    }, i.createElement('div', Object.assign({
      className: Bn.Z.content
    }, (0, Ee._q) (Se.V.StreakFreezeSlide)), i.createElement('div', {
      className: s() (Bn.Z.illustration, '_1PfAi')
    }), i.createElement('h2', null, (0, _._i) (9378)), i.createElement('div', {
      className: s() (Bn.Z.tagline, 'YAQBy')
    }, e ? (0, _._i) (29437) : (0, _._i) (29438)))));
    var is = n(34189),
    rs = n(47053),
    ls = n(90500);
    const os = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'flame-container': '_1FRZT',
      title: 'PPyFw',
      wrap: '_2U4_2',
      streak: '_1Bi04',
      'streak-number': '_1EJ6T'
    };
    class cs extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          animated: !1
        }
      }
      componentDidMount() {
        !this.state.animated && this.props.isDisplayed && this.setState({
          animated: !0
        })
      }
      componentDidUpdate() {
        !this.state.animated && this.props.isDisplayed && this.setState({
          animated: !0
        })
      }
      render() {
        const {
          daysInCurrentStreak: e,
          session: t,
          template: n,
          user: a
        }
        = this.props,
        {
          streak: r,
          timezoneOffset: l
        }
        = a,
        o = (0, xt.asMutable) (this.props.xpPerDay);
        return o[6] += t.xpGain,
        i.createElement('div', {
          className: s() (Hn.slide)
        }, i.createElement('div', {
          className: os.streak
        }, i.createElement('img', {
          src: ls
        }), i.createElement('span', {
          className: os['streak-number']
        }, r.toString())), i.createElement('div', Object.assign({
          className: os.wrap
        }, (0, Ee._q) (Se.V.StreakSlide)), i.createElement('div', {
          className: os['flame-container']
        }, i.createElement(is.Z, {
          animate: this.state.animated,
          size: 'slide',
          streakState: 'extended'
        })), i.createElement('div', {
          className: os['progress-container']
        }, i.createElement(rs.Z, {
          daysInCurrentStreak: e,
          timezoneOffset: l,
          xpPerDay: o
        }))), i.createElement('h2', {
          className: s() (Hn.title, os.title)
        }, n.title), i.createElement('div', {
          className: Bn.Z.tagline
        }, n.body))
      }
    }
    const ds = cs;
    class us extends i.Component {
      render() {
        const {
          dispatch: e,
          items: t,
          item: n
        }
        = this.props,
        a = void 0 !== t.inventory[n.id],
        r = a ? (0, _._i) (977) : (0, _._i) (2956);
        return i.createElement('div', {
          className: s() (Hn.slide, Bn.Z.slide)
        }, i.createElement('div', {
          className: Bn.Z.wrap
        }, i.createElement('div', Object.assign({
          className: Bn.Z.content
        }, (0, Ee._q) (Se.V.StreakWagerSlide)), i.createElement('div', {
          className: s() (Bn.Z.illustration, '_3IL69')
        }), i.createElement('h2', {
          className: Bn.Z.title
        }, (0, _._i) (3546)), i.createElement('div', {
          className: Bn.Z.tagline
        }, (0, _._i) (2174))), i.createElement('div', {
          className: Bn.Z.cta
        }, i.createElement(p.Z, {
          className: Bn.Z.button,
          disabled: a,
          onClick: () =>{
            e({
              type: 'sessionEnd/CTA_CLICK'
            }),
            e(oa.xD(n, 'item_offer'))
          },
          variant: 'solid'
        }, r))))
      }
    }
    const ps = (0, d.$j) ((e=>({
      items: (0, g.__) (e)
    }))) (us),
    ms = ({
      onNextClick: e
    }) =>{
      const t = (0, Z.tX) ();
      return i.useEffect((() =>{
        (0, E.j) ('registration_wall_show', {
        })
      }), [
      ]),
      i.createElement('div', {
        className: '_3_9H_'
      }, i.createElement('span', {
        className: '_1JYbW'
      }), i.createElement('h1', {
        className: '_1Kz9u'
      }, (0, _._i) (8334)), i.createElement('p', {
        className: '_2inHP'
      }, (0, _._i) (2623)), i.createElement('div', null, i.createElement(p.Z, Object.assign({
        className: '_3_-Fs'
      }, (0, Ee._q) (Se.V.CreateProfile), {
        onClick: () =>{
          t({
            type: 'sessionEnd/CTA_CLICK'
          }),
          (0, E.j) ('registration_wall_tap', {
            target: 'create'
          }),
          t({
            options: {
              goBack: e,
              isSignIn: !1,
              name: x.tl.SignInUp,
              via: 'soft_wall'
            },
            type: 'TOGGLE_MODAL'
          })
        },
        variant: 'solid'
      }), (0, _._i) (10954))), i.createElement(p.Z, Object.assign({
        className: '_3JUJ4'
      }, (0, Ee._q) (Se.V.CreateProfileLater), {
        onClick: () =>{
          t({
            type: 'sessionEnd/DISMISSED'
          }),
          (0, E.j) ('registration_wall_tap', {
            target: 'later'
          }),
          e()
        },
        variant: 'stroke'
      }), (0, _._i) (20467)))
    };
    class gs extends i.Component {
      render() {
        const {
          dispatch: e,
          items: t,
          item: n
        }
        = this.props,
        a = void 0 !== t.inventory[n.id],
        r = a ? (0, _._i) (977) : (0, _._i) (18024, {
          number_1: n.price
        });
        return i.createElement('div', {
          className: s() (Hn.slide, Bn.Z.slide)
        }, i.createElement('div', {
          className: Bn.Z.wrap
        }, i.createElement('div', Object.assign({
          className: Bn.Z.content
        }, (0, Ee._q) (Se.V.WeekendAmuletSlide)), i.createElement('div', {
          className: s() (Bn.Z.illustration, 'HRro2')
        }), i.createElement('h2', {
          className: Bn.Z.title
        }, (0, _._i) (10788)), i.createElement('div', {
          className: Bn.Z.tagline
        }, (0, _._i) (22125))), i.createElement('div', {
          className: Bn.Z.cta
        }, i.createElement(p.Z, {
          className: Bn.Z.button,
          disabled: a,
          onClick: () =>{
            e({
              type: 'sessionEnd/CTA_CLICK'
            }),
            e(oa.xD(n, 'item_offer'))
          },
          variant: 'solid'
        }, r))))
      }
    }
    const hs = (0, d.$j) ((e=>({
      items: (0, g.__) (e)
    }))) (gs);
    var vs = n(89956),
    _s = n(20124),
    fs = n(97106);
    class xs extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          animationState: 'ready'
        },
        this.getSubtitle = e=>{
          const {
            session: {
              failed: t,
              learnedSkills: n = [
              ],
              type: a
            }
          }
          = this.props;
          switch (a) {
            case S.FF.CheckpointTest:
            case S.FF.PlacementTest:
              return n.length ? (0, _._i) (9743, {
                num_learned: n.length
              }) : (0, _._i) (18930);
            case S.FF.SkillTest:
              return t ? (0, _._i) (18930) : this.getTitleStringWithXp(3923, e);
            case S.FF.Checkpoint:
              return this.getTitleStringWithXp(889, e);
            case S.FF.MistakesReview:
            case S.FF.GlobalPractice:
            case S.FF.SectionPractice:
              return this.getTitleStringWithXp(20820, e);
            case S.FF.AlphabetLesson:
            case S.FF.Lesson:
              return this.getTitleStringWithXp(24338, e);
            case S.FF.SkillPractice:
              return e ? this.getTitleStringWithXp(20820, e) : (0, _._i) (14130, {
                xp: 0
              });
            case S.FF.ProgressQuiz:
              throw Error(`XpSlide not supported for session type: ${ a }`);
            default:
              throw (0, j.RJ) (a),
              Error(`Unexpected session type: ${ a }`)
          }
        },
        this.getTitleStringWithXp = (e, t) =>i.createElement('span', null, i.createElement('span', {
          className: _s.Z['title-text']
        }, (0, _._i) (e)), i.createElement('span', {
          className: _s.Z['plus-xp']
        }, (0, _._i) (20384, {
          experience_points: t
        }))),
        this.getTitle = ({
          goalState: e,
          newXp: t,
          xpGain: n
        }) =>{
          const {
            session: {
              type: a
            },
            user: {
              xpGoal: s
            }
          }
          = this.props;
          if (n) switch (e) {
            case fs.cE.Unmet:
              {
                const e = s - t;
                return (0, _._i) (7960, {
                  number_1: e
                })
              }
            case fs.cE.Met:
              return (0, _._i) (22401);
            case fs.cE.Exceeded:
              return (0, _._i) (20644, {
                experience_points: t
              });
            default:
              throw (0, j.RJ) (e),
              Error(`Unexpected value for goalState: ${ e }`)
          } else if (a === S.FF.SkillPractice) return (0, _._i) (17873);
          return null
        },
        this.processAnimations = () =>{
          return e = this,
          t = void 0,
          a = function * () {
            const {
              isDisplayed: e
            }
            = this.props,
            {
              animationState: t
            }
            = this.state;
            'ready' === t && e && (this.setState({
              animationState: 'playing'
            }), yield(0, oe._v) (100), this.setState({
              animationState: 'finished'
            }))
          },
          new ((n = void 0) || (n = Promise)) ((function (s, i) {
            function r(e) {
              try {
                o(a.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                o(a.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function o(e) {
              var t;
              e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(r, l)
            }
            o((a = a.apply(e, t || [
            ])).next())
          }));
          var e,
          t,
          n,
          a
        }
      }
      componentDidMount() {
        this.processAnimations()
      }
      componentDidUpdate() {
        this.processAnimations()
      }
      render() {
        const {
          isDisplayed: e,
          user: t,
          xpGoalSessionProgress: n
        }
        = this.props,
        {
          bonusXp: a,
          goalState: r,
          totalXpThisSession: l,
          totalXpToday: o
        }
        = n,
        {
          animationState: c
        }
        = this.state,
        {
          xpGoal: d
        }
        = t,
        u = l - a,
        p = l,
        m = o,
        g = m - p;
        let h = this.getTitle({
          goalState: r,
          newXp: m,
          xpGain: p
        });
        const v = this.getSubtitle(u);
        let _ = !0;
        null === h && (h = v, _ = !1);
        const f = p > 0,
        x = f && r !== fs.cE.Exceeded,
        b = m / d,
        E = r === fs.cE.Met ? 'largeRattle' : r === fs.cE.Exceeded ? 'duo' : b < 0.5 ? 'smallRattle' : 'mediumRattle';
        return i.createElement('div', {
          className: s() (Hn.slide, _s.Z.slide)
        }, i.createElement('div', Object.assign({
          className: _s.Z.table
        }, (0, Ee._q) (Se.V.XpSlide)), i.createElement('div', {
          className: _s.Z['xp-progress-container']
        }, f ? i.createElement(Za.Z, {
          animate: e,
          type: E
        }) : i.createElement('div', {
          className: _s.Z['image-sad-duo']
        }), x ? i.createElement('div', {
          className: _s.Z['goal-container']
        }, i.createElement('div', {
          className: _s.Z['bar-container']
        }, i.createElement(vs.Z, {
          color: 'bee',
          denominator: d,
          height: 20,
          numerator: 'finished' === c ? m : g,
          sparkleOnIncrease: !0
        }))) : null)), i.createElement('h2', null, h), _ ? i.createElement('div', {
          className: _s.Z['plus-xp-tagline']
        }, v) : null, a > 0 ? i.createElement('div', {
          className: _s.Z['plus-xp-tagline']
        }, this.getTitleStringWithXp(13581, a)) : null)
      }
    }
    const bs = xs;
    var Es = n(90110),
    Ss = n(51551);
    var ks = n(42269),
    ys = n(99859);
    const ws = ({
      isDisplayed: e,
      onNextClick: t,
      skill: n,
      slide: a
    }) =>{
      var s;
      const r = (0, Z.tX) (),
      l = (0, Z.Fx) (g.Oz),
      o = (0, ys.pi) (),
      c = (0, Z.Fx) (g.lA),
      d = (0, Z.Fx) (g.np);
      switch (a.type) {
        case 'streak':
          return i.createElement(ds, {
            daysInCurrentStreak: a.daysInCurrentStreak,
            isDisplayed: e,
            session: c.session,
            template: a.template,
            user: d,
            xpPerDay: a.xpPerDay
          });
        case 'xp':
          return i.createElement(bs, {
            isDisplayed: e,
            session: c.session,
            user: d,
            xpGoalSessionProgress: a.xpGoalSessionProgress
          });
        case 'streakWager':
          return i.createElement(ps, {
            item: a.item
          });
        case 'leveledUpSkill':
          return i.createElement(Xa, {
            isDisplayed: e,
            isFinalLevel: c.sessionParams.isFinalLevel,
            onNextClick: t,
            skills: [
              a.skill
            ],
            skillsSnapshot: [
              a.skillSnapshot
            ],
            type: 'leveledUpSkill'
          });
        case 'testedOutSkill':
          return i.createElement(Xa, {
            isDisplayed: e,
            isFinalLevel: c.sessionParams.isFinalLevel,
            onNextClick: t,
            skills: [
              a.skill
            ],
            skillsSnapshot: [
              a.skillSnapshot
            ],
            type: 'testedOutSkill'
          });
        case 'testedOutSkills':
          return i.createElement(Xa, {
            isDisplayed: e,
            isFinalLevel: c.sessionParams.isFinalLevel,
            onNextClick: t,
            skills: a.skills,
            skillsSnapshot: a.skillsSnapshot,
            type: 'testedOutSkills'
          });
        case 'lingot':
          return i.createElement(ma, {
            newRupees: a.new_rupees || 0
          });
        case 'lingot-reward':
          return i.createElement(Oa, {
            animate: !0,
            isDisplayed: e,
            newRupees: a.new_rupees || 0,
            type: 'lingots'
          });
        case 'streak-freeze-reward':
          return i.createElement(Oa, {
            animate: !0,
            isDisplayed: e,
            newRupees: 0,
            type: 'streakFreeze'
          });
        case 'progress-quiz-ad':
          return i.createElement(za, {
            dispatch: r,
            isProbablyEligibleForFreeTrial: o,
            user: d
          });
        case 'progress-quiz-reminder':
          return i.createElement(Da, {
            course: l,
            dispatch: r,
            user: d
          });
        case 'checkpoint':
          return i.createElement($n, {
            course: a.course,
            treeSectionState: a.treeSectionState
          });
        case 'stories':
          return i.createElement(Qa, {
            language: l.learningLanguage
          });
        case 'stories-unlock':
        case 'story-set-unlock':
          return i.createElement(as, {
            firstUnlockedSet: a.firstUnlockedSet,
            isDisplayed: e,
            isFirstUnlock: 'stories-unlock' === a.type,
            numStoriesUnlocked: a.numStoriesUnlocked
          });
        case 'podcast':
          return i.createElement(ka, {
            fromLanguage: l.fromLanguage,
            learningLanguage: l.learningLanguage
          });
        case 'achievements-completion':
        case 'achievements-gold-skills':
        case 'achievements-perfect':
        case 'achievements-social':
        case 'achievements-spending':
        case 'achievements-streak':
        case 'achievements-time':
        case 'achievements-xp':
          return i.createElement(Gn, {
            achievement: a.achievement,
            isDisplayed: e
          });
        case 'achievements-champion':
        case 'achievements-conqueror':
        case 'achievements-friendly':
        case 'achievements-legendary':
        case 'achievements-overtime':
        case 'achievements-photogenic':
        case 'achievements-regal':
        case 'achievements-sage':
        case 'achievements-scholar':
        case 'achievements-sharpshooter':
        case 'achievements-strategist':
        case 'achievements-wildfire':
        case 'achievements-winner':
          return i.createElement(qn, {
            achievement: a.achievement
          });
        case 'streak-freeze-gift':
          return i.createElement(ss, {
            firstGift: null === (s = d.unconsumedGiftIds) || void 0 === s ? void 0 : s.includes('streakFreezeGift')
          });
        case 'placementTestFailed':
          return i.createElement(_a, {
            languageName: a.languageName,
            view: 'startFromBasics'
          });
        case 'placementTestPassed':
          return i.createElement(_a, {
            languageName: a.languageName,
            percentage: a.unlockedPercentage,
            view: 'testComplete'
          });
        case 'weekend-amulet':
          return i.createElement(hs, {
            item: a.item
          });
        case 'hoots':
          return i.createElement(la, {
            productName: a.productName
          });
        case 'final-level-failed':
          return i.createElement(Kn, {
            skill: n
          });
        case 'final-level-partial-xp':
          return i.createElement(Jn, null);
        case 'final-level-promotion':
          return i.createElement(sa, {
            onNextClick: t,
            promoType: a.promoType,
            skill: n
          });
        case 'mistakesInbox':
          return i.createElement(va, {
            type: 'remaining'
          });
        case 'mistakesInboxEmpty':
          return i.createElement(va, {
            type: 'gold'
          });
        case 'mistakesInboxPrompt':
          return i.createElement(va, {
            type: 'prompt'
          });
        default:
          return (0, j.RJ) (a),
          null
      }
    },
    Cs = ({
      currentSlide: e,
      hasNativeAd: t,
      isPadded: n,
      onNextClick: a,
      skill: r,
      slideData: l
    }) =>{
      const o = (0, Z.tX) (),
      c = (0, Z.Fx) ((e=>t ? (0, da.Z7) ((0, g.np) (e), da.ZD.SessionEnd) : null)),
      d = (0, Z.Fx) (g.Mb),
      u = (0, Z.Fx) (g.Oz),
      p = (0, Z.Fx) (g.__),
      [
        m,
        h
      ] = i.useState(),
      v = (() =>{
        switch (l[e].type) {
          case 'plus-new-years-ad':
            return (0, Zn.createPortal) (i.createElement(xa, {
              onClose: a
            }), document.getElementById('overlays'));
          case 'immersive-plus-ad':
            return (0, Zn.createPortal) (i.createElement(pa, {
              onClose: a
            }), document.getElementById('overlays'));
          case 'plus-ad':
            return (0, Zn.createPortal) (i.createElement(Ma, {
              onClose: a
            }), document.getElementById('overlays'));
          case 'progress-quiz-results':
            return i.createElement(Ra, {
              course: u
            });
          case 'trial-wall':
            return i.createElement(ms, {
              onNextClick: a
            });
          default:
            return
        }
      }) (),
      f = void 0 !== m && !v;
      (({
        currentSlide: e
      }) =>{
        const t = (0, Z.tX) (),
        n = (0, Z.Fx) (g.__),
        a = (0, Z.Fx) (g.is),
        s = (0, Z.Fx) (g.np);
        i.useEffect((() =>{
          switch (e.type) {
            case 'hoots':
              (0, E.j) ('hoots_ad_show', {
              }),
              t({
                timestamp: Date.now(),
                type: 'hoots/SESSION_END_AD_SHOW'
              });
              break;
            case 'stories':
              (0, E.j) ('stories_ad_view', {
              });
              break;
            case 'podcast':
              (0, E.j) ('podcast_ad_view', {
              });
              break;
            case 'streakWager':
              (0, E.j) ('item_offer', {
                item_offer: 'rupee_wager'
              }),
              (0, Ss.N4) (s.id);
              break;
            case 'streak':
              (0, E.j) ('session_end_streak_reached_show', {
                body_copy_id: e.template.bodyID,
                title_copy_id: e.template.titleID
              });
              break;
            case 'lingot-reward':
              {
                const n = e.reward;
                void 0 !== n && ((0, Es.nB) (t, s.id, n), (0, E.j) ('session_end_reward_show', {
                  currency_amount: n.amount,
                  reward_type: 'lingots',
                  rewarded_video: !1
                }));
                break
              }
            case 'streak-freeze-reward':
              oa.ZK(t, n),
              (0, E.j) ('session_end_reward_show', {
                currency_amount: 0,
                reward_type: 'streak_freeze',
                rewarded_video: !1
              });
              break;
            case 'achievements-completion':
            case 'achievements-gold-skills':
            case 'achievements-perfect':
            case 'achievements-social':
            case 'achievements-spending':
            case 'achievements-streak':
            case 'achievements-time':
            case 'achievements-xp':
              {
                const n = e.achievement.name;
                (0, E.j) ('show_achievement_unlock_session_end', {
                  achievement: n
                }),
                (0, Un.UK) (t, s.id, n);
                break
              }
            case 'achievements-champion':
            case 'achievements-conqueror':
            case 'achievements-friendly':
            case 'achievements-legendary':
            case 'achievements-overtime':
            case 'achievements-photogenic':
            case 'achievements-regal':
            case 'achievements-sage':
            case 'achievements-scholar':
            case 'achievements-sharpshooter':
            case 'achievements-strategist':
            case 'achievements-wildfire':
            case 'achievements-winner':
              {
                const n = e.achievement;
                (0, E.j) ('show_achievement_unlock_session_end', {
                  achievement: n.name
                }),
                (0, Un.xu) (t, s.id, n);
                break
              }
            case 'streak-freeze-gift':
              (0, E.j) ('item_offer', {
                item_name: 'streak_freeze'
              });
              break;
            case 'weekend-amulet':
              (0, E.j) ('item_offer', {
                item_offer: 'weekend_amulet'
              }),
              (0, Ss.r5) (s.id);
              break;
            case 'xp':
              {
                const t = e.xpGoalSessionProgress,
                n = {
                  bonus_xp: t.bonusXp,
                  gained_skill_points: t.totalXpThisSession,
                  session_end_goal_was_already_met: t.goalState === fs.cE.Exceeded,
                  session_end_goal_was_met_this_session: t.goalState === fs.cE.Met,
                  session_type: a.type,
                  total_xp_today: t.totalXpToday,
                  type: a.type,
                  xp_gained: t.totalXpThisSession,
                  xp_multiplier: 1
                };
                (0, E.j) ('session_end_summary_show', n);
                break
              }
          }
        }), [
          e.type
        ])
      }) ({
        currentSlide: l[e]
      }),
      (0, ks.Z) (),
      i.useEffect((() =>() =>{
        o(ra.y())
      }), [
      ]),
      i.useEffect((() =>{
        !1 === m && (0, da.NX) (p, d) && (0, E.j) ('premium_ad_show', {
          iap_context: 'session_end_ad'
        })
      }), [
        m
      ]),
      i.useEffect((() =>{
        o({
          slide: l[e].type,
          timestamp: Date.now(),
          type: 'sessionEnd/SLIDE_SHOWN'
        })
      }), [
        e
      ]),
      i.useEffect((() =>{
        if (f) return o({
          slide: 'native-ad',
          timestamp: Date.now(),
          type: 'sessionEnd/SLIDE_SHOWN'
        }),
        () =>{
          o({
            slide: 'native-ad',
            timestamp: Date.now(),
            type: 'sessionEnd/SLIDE_HIDDEN'
          })
        }
      }), [
        f
      ]);
      const x = i.useRef(null);
      if (i.useLayoutEffect((() =>{
        setTimeout((() =>{
          x.current && (x.current.scrollLeft = 0)
        }))
      }), [
        x.current
      ]), v) return v;
      const b = l[e];
      return i.createElement('div', {
        className: s() (Hn['wrap' + (n ? '-padded' : '')], {
          [
            Hn['full-width']
          ]: !c
        })
      }, i.createElement('div', {
        className: Hn['player-container-main'],
        ref: x
      }, i.createElement(Ja, {
        animation: 'slide',
        slideElementKey: e
      }, 'plus-new-years-ad' === b.type || 'immersive-plus-ad' === b.type || 'plus-ad' === b.type || 'progress-quiz-results' === b.type || 'trial-wall' === b.type ? null : i.createElement(ws, {
        isDisplayed: !0,
        onNextClick: a,
        skill: r,
        slide: b
      }))), c ? m ? i.createElement('div', {
        className: Hn['player-container-right']
      }, i.createElement('div', {
        className: Hn['ad-block-ad-container']
      }, i.createElement(Pn.Z, {
        placement: da.ZD.SessionEnd
      }))) : i.createElement('div', {
        className: Hn['player-container-right']
      }, i.createElement(On.Z, {
        adUnit: c,
        onWhetherBlocked: h,
        placement: da.ZD.SessionEnd
      }), (0, da.NX) (p, d) ? i.createElement('span', {
        className: Hn['remove-ads'],
        onClick: () =>(0, ua.eO) ({
          trackingProps: {
            iap_context: 'session_end_ad'
          }
        }, o)
      }, (0, _._i) (2809)) : null) : null)
    };
    var Ns = n(81748),
    Ts = n(75631),
    Rs = n(60148);
    const Is = ({
      onSessionStart: e
    }) =>{
      var t;
      const n = (0, Z.tX) (),
      {
        inLessonTip: a,
        inLessonTipShowing: s,
        status: r
      }
      = (0, Z.Fx) (g.lA),
      l = (0, Z.Fx) (g.lA),
      o = (0, Z.Fx) (g.is),
      c = (0, Z.Fx) (g.oe),
      d = (0, Z.Fx) (g.np),
      u = (0, Ia.k6) (),
      m = o.skillId ? c[o.skillId] : void 0,
      h = i.useRef(null),
      v = (e, t = {
      }) =>{
        t.skill_id = o.skillId,
        t.explanation_title = null == a ? void 0 : a.title,
        (0, E.j) (e, t)
      },
      f = () =>{
        var e,
        t,
        s;
        (0, E.j) ('explanation_close', {
          did_content_load: !0,
          explanation_title: null !== (e = null == a ? void 0 : a.title) && void 0 !== e ? e : '',
          is_grammar_skill: null !== (t = null == m ? void 0 : m.grammar) && void 0 !== t && t,
          is_scrollable: !1,
          skill_id: null !== (s = null == m ? void 0 : m.id) && void 0 !== s ? s : ''
        }),
        r === pe.cS.GrammarSkillSplash ? u.push('/learn') : n({
          shouldShow: !1,
          type: 'TOGGLE_IN_LESSON_TIP'
        })
      };
      return i.useEffect((() =>{
        if (s) {
          const e = e=>{
            [
              'Escape'
            ].includes(e.key) && f()
          };
          return ue.U.addListener(document, 'keydown', e),
          () =>{
            ue.U.removeListener(document, 'keydown', e)
          }
        }
      }), [
        !0 === s
      ]),
      i.useEffect((() =>{
        var e,
        t;
        a && s && (n({
          explanationSkillId: a.skillID,
          timestamp: Date.now(),
          type: 'EXPLANATION_SHOWN'
        }), (0, E.j) ('explanation_open', {
          current_level: null == m ? void 0 : m.finishedLevels,
          from: l.status === pe.cS.GrammarSkillSplash ? 'prelesson_ad' : 'in_lesson',
          is_grammar_skill: null !== (e = null == m ? void 0 : m.grammar) && void 0 !== e && e,
          skill_id: null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : ''
        }))
      }), [
        a,
        s
      ]),
      (0, Zn.createPortal) (i.createElement(Ns.ZP, {
        disabled: !s
      }, i.createElement(Ts.Z, {
        className: '_1XOlc',
        isVisible: !0 === s
      }, a ? i.createElement('div', {
        className: '_2L4yb mQ0GW'
      }, i.createElement('div', {
        className: '_1Mo5S'
      }, i.createElement('div', {
        className: '_1pV8N nP82K _2nDUm'
      }, i.createElement('button', {
        className: '_2q__S _2hiHn _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ _1DC8p _2jNpf',
        onClick: f
      }), i.createElement('h1', {
        className: '_3bRSc'
      }, a.title))), i.createElement('div', {
        className: '_398AS _3yOsW _3VXxf',
        ref: h
      }, i.createElement(Rs.ExplanationItems, {
        container: null !== (t = h.current) && void 0 !== t ? t : void 0,
        disabled: !1,
        items: (0, xt.asMutable) (a.elements, {
          deep: !0
        }),
        learningLanguage: d.learningLanguage,
        onAudioTap: () =>v('explanation_audio_tap'),
        onHintShown: e=>v('explanation_hint_shown', {
          hint: e
        })
      })), r === pe.cS.GrammarSkillSplash ? i.createElement('div', {
        className: 'rBDbb _399cc _2LMXW _2Fc1K'
      }, i.createElement('div', {
        className: 'cSrKG _3FAc4 _2T5D2'
      }, i.createElement('div', {
        className: '_1GIIY _10vOG'
      }, i.createElement(p.Z, {
        color: 'owl',
        onClick: () =>{
          n({
            shouldShow: !1,
            type: 'TOGGLE_IN_LESSON_TIP'
          }),
          (0, E.j) ('explanation_start_session_tap', {
            from: 'prelesson_ad',
            is_grammar_skill: !0
          }),
          e()
        },
        variant: 'solid'
      }, (0, _._i) (26))))) : null) : null)), document.getElementById('overlays'))
    },
    Ls = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'bounced-in': '_3UpNo',
      'bounced-out': '_2oIep',
      'bouncing-in': '_3R1wj',
      '_bounce-in': '_1gQ7w',
      'bouncing-out': '_3V_-s',
      '_bounce-out': 'YUoq9'
    },
    Fs = ({
      animateOnMount: e,
      children: t,
      className: n,
      isVisible: a
    }) =>{
      const [r,
      l] = i.useState(e && a ? 'bouncing-in' : a ? 'bounced-in' : 'bounced-out');
      return (0, Z.Gj) ((() =>{
        l(a ? 'bouncing-in' : 'bouncing-out')
      }), [
        a
      ]),
      i.createElement('div', {
        className: s() (Ls[r], n),
        onAnimationEnd: () =>{
          'bouncing-in' === r && l('bounced-in'),
          'bouncing-out' === r && l('bounced-out')
        }
      }, t)
    },
    zs = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      'report-buttons': '_3MD8I',
      'report-icon': '_29maR',
      'report-icon-green': '_3tFbb _29maR',
      'report-icon-red': '_1SnxH _29maR',
      'report-icon-yellow': '_1opQ9 _29maR',
      'discuss-icon-green': '_2oQNn _29maR',
      'discuss-icon-red': '_3o1ZL _29maR',
      'discuss-icon-yellow': 'WBzys _29maR',
      '_report-button': '_3HsTU _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ',
      'report-button-green': 'jTP0E _3HsTU _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ',
      'report-button-red': 'RnDo_ _3HsTU _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ',
      'report-button-yellow': '_26ysv _3HsTU _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ',
      report: '_1-Ukw',
      'report-text': '_28V9T _3yAjN'
    };
    var Ds = n(66195);
    const js = ({
      challenge: e,
      color: t,
      currentCourse: n,
      onDiscussionClick: a,
      onReportClick: s,
      reported: r,
      user: l
    }) =>{
      var o;
      let c = (null === (o = e.metadata) || void 0 === o ? void 0 : o.num_comments) || null;
      c && (c = ` (${ c })`);
      const d = !r,
      u = !!(null == e ? void 0 : e.sentenceDiscussionId) && (0, Ds._B) (n, l) && (0, v.tv) ({
        challenge: e
      });
      return d || u ? i.createElement('div', {
        className: zs['report-buttons']
      }, d ? i.createElement('button', {
        className: zs[`report-button-${ t }`],
        onClick: s,
        onTouchEnd: s
      }, i.createElement('span', {
        className: zs.report
      }, i.createElement('span', {
        className: zs[`report-icon-${ t }`]
      }), i.createElement('span', {
        className: zs['report-text']
      }, (0, _._i) (400)))) : null, u ? i.createElement('button', Object.assign({
        className: zs[`report-button-${ t }`]
      }, (0, Ee._q) (Se.V.DiscussionButton), {
        onClick: a,
        onTouchEnd: a
      }), i.createElement('span', {
        className: zs.report
      }, i.createElement('span', {
        className: zs[`discuss-icon-${ t }`]
      }), i.createElement('span', {
        className: zs['report-text']
      }, (0, _._i) (7476), c))) : null) : null
    };
    var Zs = n(1855);
    const Ps = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: 'kVhsm',
      green: '_1D8II',
      red: '_3Qruy',
      yellow: '_2QmYK',
      badge: '_2VrUB',
      'badge-centered': '_3EXrQ _2VrUB',
      content: '_3BY4x',
      'icon-green': '_1Zm5f _176_d _2jNpf',
      'icon-red': '_12ZWa _3Hb2o _2jNpf',
      'icon-checkmark-yellow': '_1W9Eh',
      'footer-title': '_1x6Dk',
      lighter: '_1UqAr',
      boxes: 'GnyZd',
      box: '_2ez4I',
      'report-buttons': '_2AOD4',
      'subtitle-inline': '_3BNQd'
    };
    var Os = n(83719);
    const As = ({
      highlights: e,
      text: t
    }) =>{
      e = u.MR(e, (e=>e[0]));
      let n = 0;
      const a = [
      ];
      return e.forEach((e=>{
        e[0] !== n && a.push([t.slice(n, e[0]),
        !1]),
        a.push([t.slice(e[0], e[1]),
        !0]),
        n = e[1]
      })),
      n !== t.length && a.push([t.slice(n, t.length),
      !1]),
      i.createElement('span', null, a.map(((e, t) =>e[1] ? i.createElement('span', {
        className: '_3gI0Y',
        key: t
      }, e[0]) : i.createElement('span', {
        key: t
      }, e[0]))))
    };
    var Ms = n(33037);
    const Hs = ({
      gradingResult: e
    }) =>{
      const {
        blameMessage: t,
        blameSubtext: n
      }
      = e;
      if (t && n) return {
        subtitle: n,
        title: t
      }
    },
    Bs = ({
      defaultCorrectSolutions: e,
      defaultCorrectSolutionTransliteration: t,
      fromLanguage: n,
      gradingResult: a,
      learningLanguage: s,
      transliterationSettings: r
    }) =>{
      const {
        correct: l
      }
      = a;
      return {
        subtitle: (() =>{
          if (!l) return t && (0, Q.dN) (s, n, r, !0) ? i.createElement(_e.Z, {
            highlightStyle: 'normal',
            state: 'active',
            text: [
              ...e[0]
            ],
            transliteration: t
          }) : e.join(', ')
        }) (),
        title: l ? (0, _._i) ((0, Os.ub) ()) : e.length > 1 ? (0, _._i) (8766) : (0, _._i) (23926)
      }
    };
    const Us = ({
      color: e,
      subtitle: t,
      title: n
    }) =>i.createElement('div', {
      className: Ps.box
    }, i.createElement('h2', {
      className: s() (Ps['footer-title'], Ps[e])
    }, n), t ? i.createElement('div', {
      className: s() (Ps.lighter, Ps[e])
    }, t) : null),
    Gs = ({
      color: e,
      correct: t,
      mainContent: n,
      reportButtons: a,
      translation: s
    }) =>{
      const r = !(n && s),
      l = (0, Z.Tb) ();
      return i.createElement('div', Object.assign({
        className: Ps.wrap
      }, (0, Ee._q) (Se.V.Blame, t ? Se.V.BlameCorrect : Se.V.BlameIncorrect)), i.createElement(Fs, {
        animateOnMount: !l,
        className: Ps['badge' + (r ? '-centered' : '')],
        isVisible: !0
      }, e === li.YELLOW ? i.createElement('img', {
        alt: '',
        className: Ps['icon-checkmark-yellow'],
        src: Zs
      }) : i.createElement('span', {
        className: Ps[`icon-${ e }`]
      })), i.createElement('div', {
        className: Ps.content
      }, i.createElement('div', {
        className: Ps.boxes
      }, n, s), a ? i.createElement('div', {
        className: Ps['report-buttons']
      }, a) : null))
    },
    qs = ({
      challenge: e,
      color: t,
      correct: n,
      currentCourse: a,
      onDiscussionClick: s,
      onReportClick: r,
      reported: l,
      smartTip: o,
      user: c
    }) =>{
      const {
        gradingResult: d,
        solutionTranslation: u
      }
      = e,
      p = (0, Ms.LN) (e),
      m = (0, Ms.zn) (e),
      {
        fromLanguage: g,
        learningLanguage: h
      }
      = a,
      v = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings));
      if (!d) throw Error('Cannot construct blame ribbon text for ungraded challenge.');
      const f = (0, Z.xy) ((() =>{
        var e,
        t,
        n,
        a,
        s;
        return null !== (s = null !== (a = null !== (n = null !== (t = null !== (e = Hs({
          gradingResult: d
        })) && void 0 !== e ? e : (({
          defaultCorrectSolutions: e,
          gradingResult: t
        }) =>{
          const {
            blameMessage: n,
            closestSolution: a,
            correct: s,
            highlights: r
          }
          = t;
          if (n && a) return s ? {
            subtitle: i.createElement(As, {
              highlights: null != r ? r : [
              ],
              text: a
            }),
            title: n
          }
           : a === e[0] ? {
            subtitle: i.createElement(As, {
              highlights: null != r ? r : [
              ],
              text: a
            }),
            title: (0, _._i) (23926)
          }
           : {
            subtitle: e[0],
            title: (0, _._i) (23926)
          }
        }) ({
          defaultCorrectSolutions: p,
          gradingResult: d
        })) && void 0 !== t ? t : (({
          defaultCorrectSolutions: e,
          gradingResult: t
        }) =>{
          const {
            blameMessage: n,
            highlights: a
          }
          = t;
          if (n) return {
            subtitle: i.createElement(As, {
              highlights: null != a ? a : [
              ],
              text: e[0]
            }),
            title: n
          }
        }) ({
          defaultCorrectSolutions: p,
          gradingResult: d
        })) && void 0 !== n ? n : (({
          defaultCorrectSolutions: e,
          gradingResult: t
        }) =>{
          const {
            correct: n,
            highlights: a
          }
          = t;
          if (null == a ? void 0 : a.length) return {
            subtitle: i.createElement(As, {
              highlights: a,
              text: e[0]
            }),
            title: n ? (0, _._i) (4081) : (0, _._i) (23926)
          }
        }) ({
          defaultCorrectSolutions: p,
          gradingResult: d
        })) && void 0 !== a ? a : (({
          defaultCorrectSolutions: e,
          gradingResult: t
        }) =>{
          const {
            correct: n,
            guess: a,
            closestSolution: s
          }
          = t;
          if ((0, Ms.tx) (n, a, s, e)) return {
            subtitle: e[0],
            title: (0, _._i) (4231)
          }
        }) ({
          defaultCorrectSolutions: p,
          gradingResult: d
        })) && void 0 !== s ? s : Bs({
          defaultCorrectSolutionTransliteration: m,
          defaultCorrectSolutions: p,
          fromLanguage: g,
          gradingResult: d,
          learningLanguage: h,
          transliterationSettings: v
        })
      }), [
        d,
        p
      ]),
      x = (0, Z.xy) ((() =>(0, _._i) ((0, Os.ul) (!d.blameType && n))), [
        e,
        n
      ]),
      {
        subtitle: b,
        title: E
      }
      = f,
      S = !!d.blameType || !n,
      k = i.createElement(js, {
        challenge: e,
        color: t,
        currentCourse: a,
        onDiscussionClick: s,
        onReportClick: r,
        reported: l,
        user: c
      }),
      y = i.createElement(Us, {
        color: t,
        subtitle: b,
        title: E
      });
      if (!n && o) {
        const e = i.createElement(Us, {
          color: t,
          subtitle: i.createElement(i.Fragment, null, i.createElement('span', {
            className: Ps['subtitle-inline']
          }, (0, _._i) (23926)), i.createElement('span', null, b)),
          title: (0, _._i) (16634)
        });
        return i.createElement(Gs, {
          color: t,
          correct: n,
          reportButtons: k,
          translation: e
        })
      }
      if (u) {
        const e = i.createElement(Us, {
          color: t,
          subtitle: u,
          title: x
        });
        return i.createElement(Gs, {
          color: t,
          correct: n,
          mainContent: S ? y : null,
          reportButtons: k,
          translation: e
        })
      }
      return i.createElement(Gs, {
        color: t,
        correct: n,
        mainContent: y,
        reportButtons: k
      })
    },
    Ws = ({
      challenge: e,
      color: t,
      currentCourse: n,
      onDiscussionClick: a,
      onReportClick: s,
      reported: r,
      user: l
    }) =>{
      const o = i.createElement(js, {
        challenge: e,
        color: t,
        currentCourse: n,
        onDiscussionClick: a,
        onReportClick: s,
        reported: r,
        user: l
      }),
      c = i.createElement(Us, {
        color: t === li.YELLOW ? li.YELLOW : li.RED,
        subtitle: null,
        title: (0, _._i) (21645)
      });
      return i.createElement(Gs, {
        color: t === li.YELLOW ? li.YELLOW : li.RED,
        correct: !1,
        mainContent: c,
        reportButtons: o
      })
    },
    Vs = ({
      challenge: e,
      color: t,
      correct: n,
      currentCourse: a,
      numRetriesLeft: s,
      onDiscussionClick: r,
      onReportClick: l,
      reported: o,
      user: c
    }) =>i.createElement(Gs, {
      color: t,
      correct: n,
      mainContent: i.createElement(Us, {
        color: t,
        subtitle: 1 === s ? (0, _._i) (13747) : (0, _._i) (5563),
        title: 1 === s ? (0, _._i) (20665) : (0, _._i) (5510)
      }),
      reportButtons: i.createElement(js, {
        challenge: e,
        color: t,
        currentCourse: a,
        onDiscussionClick: r,
        onReportClick: l,
        reported: o,
        user: c
      })
    }),
    $s = ({
      challenge: e,
      color: t,
      correct: n,
      currentCourse: a,
      onDiscussionClick: s,
      onReportClick: r,
      reported: l,
      user: o
    }) =>{
      var c;
      const d = Hs({
        gradingResult: e.gradingResult
      }),
      {
        fromLanguage: u,
        learningLanguage: p
      }
      = a,
      m = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings)),
      g = (0, Z.xy) ((() =>null != d ? d : Bs({
        defaultCorrectSolutions: (0, Ms.LN) (e),
        fromLanguage: u,
        gradingResult: e.gradingResult,
        learningLanguage: p,
        transliterationSettings: m
      })), [
        e
      ]),
      {
        subtitle: h,
        title: v
      }
      = g,
      f = i.createElement(js, {
        challenge: e,
        color: t,
        currentCourse: a,
        onDiscussionClick: s,
        onReportClick: r,
        reported: l,
        user: o
      });
      if (d) return i.createElement(Gs, {
        color: t,
        correct: n,
        mainContent: i.createElement(Us, {
          color: t,
          subtitle: h,
          title: v
        }),
        reportButtons: f
      });
      if (e.type === S.Sm.Speak && !n && 'experiment' === (0, de.j6) ('speak_web_retries', void 0)) return i.createElement(Gs, {
        color: t,
        correct: n,
        mainContent: i.createElement(Us, {
          color: t,
          subtitle: `${ 'experiment' === (0, de.j6) ('web_remove_translate_instructions', void 0) ? (0, _.H8) (15039) : `${ (0, _.H8) (22357) }:` } ${ e.solutionTranslation }`,
          title: (0, _._i) (6840)
        }),
        reportButtons: f
      });
      if (e.type === S.Sm.Listen) {
        const {
          closestSolution: a
        }
        = null !== (c = e.gradingResult) && void 0 !== c ? c : {
        },
        s = a ? (0, Vt.Dg) (a) : void 0,
        {
          prompt: r
        }
        = e,
        l = (0, Vt.Dg) (r);
        if (n && s !== l) return i.createElement(Gs, {
          color: t,
          correct: n,
          mainContent: i.createElement(Us, {
            color: t,
            subtitle: h,
            title: v
          }),
          reportButtons: f
        })
      }
      return i.createElement(qs, {
        challenge: e,
        color: t,
        correct: n,
        currentCourse: a,
        onDiscussionClick: s,
        onReportClick: r,
        reported: l,
        user: o
      })
    },
    Xs = ({
      color: e,
      correct: t,
      smartTip: n
    }) =>{
      const a = (0, Z.ZF) ((() =>t ? (0, _._i) ((0, Os.ub) ()) : (0, _._i) (23926)), [
        t
      ]);
      return i.createElement(Gs, {
        color: e,
        correct: t,
        mainContent: i.createElement(Us, {
          color: e,
          subtitle: t ? void 0 : n.correctSolution || '',
          title: a
        })
      })
    },
    Ks = ({
      challenge: e,
      color: t,
      correct: n,
      currentCourse: a,
      dispatch: s,
      fromLanguage: r,
      learningLanguage: l,
      skillId: o,
      status: c,
      smartTip: d,
      user: u
    }) =>{
      var p,
      m;
      const {
        featureFlags: v
      }
      = (0, Z.Fx) (g.Mb),
      [
        _,
        f
      ] = i.useState(!0),
      [
        k,
        y
      ] = i.useState(!1),
      w = t=>{
        return n = void 0,
        a = void 0,
        i = function * () {
          var n,
          a;
          if (t.preventDefault(), !_) return;
          const s = (e.metadata || {
          }).solution_key;
          f(!1);
          const i = window.open('', '_blank');
          if (null !== i) try {
            const t = yield h.d0.getSentence(s, l, r);
            if (null === (n = t.comment) || void 0 === n ? void 0 : n.id) i.location.href = `https://forum.duolingo.com/comment/${ t.comment.id }`,
            f(!0);
             else if (null !== (a = null == v ? void 0 : v.forum_sunset_topbar) && void 0 !== a && a) i.close(),
            (0, E.j) ('forum_sentence_load_fail', {
              challenge_id: e.id,
              sentence_discussion_id: s
            });
             else {
              const e = {
                fromLanguage: r,
                learningLanguage: l,
                sentenceId: s
              };
              i.location.href = `/new-comment?${ (0, qe.Vp) (e) }`,
              f(!0)
            }
          } catch (t) {
            i.close(),
            console.error(`Missing sentence for ${ s }`),
            (0, b.Kp) ('Missing sentence discussion', {
              data: {
                challengeId: e.id,
                fromLanguage: r,
                learningLanguage: l,
                skillId: o,
                solutionKey: s
              },
              ex: t
            })
          } else console.error('Popup window blocked')
        },
        new ((s = void 0) || (s = Promise)) ((function (e, t) {
          function r(e) {
            try {
              o(i.next(e))
            } catch (e) {
              t(e)
            }
          }
          function l(e) {
            try {
              o(i.throw(e))
            } catch (e) {
              t(e)
            }
          }
          function o(t) {
            var n;
            t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s((function (e) {
              e(n)
            }))).then(r, l)
          }
          o((i = i.apply(n, a || [
          ])).next())
        }));
        var n,
        a,
        s,
        i
      },
      C = t=>{
        t.preventDefault(),
        s({
          options: {
            challenge: e,
            name: x.tl.ReportSentence,
            onReport: () =>y(!0),
            skillId: o
          },
          type: 'TOGGLE_MODAL'
        })
      };
      switch (c) {
        case pe.cS.SpeakRetryBlaming:
          return e.type === S.Sm.Speak ? i.createElement(Vs, {
            challenge: e,
            color: t,
            correct: n,
            currentCourse: a,
            numRetriesLeft: null !== (m = null === (p = e.gradingResult) || void 0 === p ? void 0 : p.numRetriesLeft) && void 0 !== m ? m : 0,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            user: u
          }) : ((0, b.vU) ('PlayerStatus is speak retry blaming when the challenge is not a speak challenge.', {
            once: !0
          }), i.createElement(qs, {
            challenge: e,
            color: t,
            correct: n,
            currentCourse: a,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            smartTip: d,
            user: u
          }));
        case pe.cS.Blaming:
          return e.type === S.Sm.Listen || e.type === S.Sm.ListenTap || e.type === S.Sm.ListenComplete || e.type === S.Sm.Speak ? i.createElement($s, {
            challenge: e,
            color: t,
            correct: n,
            currentCourse: a,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            user: u
          }) : n || e.type !== S.Sm.CharacterMatch && e.type !== S.Sm.FreeResponse ? i.createElement(qs, {
            challenge: e,
            color: t,
            correct: n,
            currentCourse: a,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            smartTip: d,
            user: u
          }) : i.createElement(Ws, {
            challenge: e,
            color: t,
            currentCourse: a,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            user: u
          });
        case pe.cS.SmartTipBlaming:
          return void 0 === d ? i.createElement(qs, {
            challenge: e,
            color: t,
            correct: n,
            currentCourse: a,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            user: u
          }) : i.createElement(Xs, {
            color: t,
            correct: n,
            smartTip: d
          });
        default:
          return i.createElement(qs, {
            challenge: e,
            color: t,
            correct: n,
            currentCourse: a,
            onDiscussionClick: w,
            onReportClick: C,
            reported: k,
            user: u
          })
      }
    },
    Ys = '_2orIw',
    Js = '_2eH1_ _2orIw',
    Qs = '_3PphB _9C_ii',
    ei = '_3lWUB _2orIw tEvKV',
    ti = '_1-3tC _3dMo_ _2orIw SD9wr',
    ni = {
      'final-level-failed': {
        className: ei,
        content: 28652
      },
      mistakesInbox: {
        className: ti,
        content: 25595
      },
      mistakesInboxEmpty: {
        className: '_1co3s _3dMo_ _2orIw SD9wr',
        content: 19889
      },
      mistakesInboxPrompt: {
        className: ti,
        content: 9250
      },
      'progress-quiz-results': {
        className: '_2RGop _2orIw',
        content: 8537
      },
      'streak-freeze-gift': {
        className: Js,
        content: 7698
      }
    },
    ai = ({
      color: e,
      coachDuoModel: t,
      currentSessionEndSlideType: n,
      currentSkillLevel: a = 0,
      isSubmittable: r,
      onClick: l,
      session: o,
      smartTip: c,
      status: d
    }) =>{
      const u = i.useRef(null),
      m = (() =>{
        var e;
        switch (d) {
          case pe.cS.CoachDuo:
          case pe.cS.CoachDuoSliding:
          case pe.cS.CoachDuoSubmitting:
            return s() (Ys, Qs, {
              '_3n1P1 _2C9ly': 'dialogue' === (null == t ? void 0 : t.template.type)
            });
          case pe.cS.EndCarousel:
            return null === (e = ni[null != n ? n : '']) || void 0 === e ? void 0 : e.className;
          case pe.cS.FinalLevelDuo:
          case pe.cS.PartialXpDuo:
          case pe.cS.PartialXpDuoSliding:
            return ei;
          case pe.cS.MistakesReviewDuo:
            return ti;
          case pe.cS.GrammarSkillSplash:
          case pe.cS.Showing:
            return Js;
          default:
            return
        }
      }) (),
      g = (() =>{
        var e,
        t;
        switch (d) {
          case pe.cS.Blaming:
            return c ? (0, _._i) (24742) : (0, _._i) (4906);
          case pe.cS.CheckpointSplash:
          case pe.cS.CheckpointTestSplash:
            return (0, _._i) (22462);
          case pe.cS.EndCarousel:
            return (0, _._i) (null !== (t = null === (e = ni[null != n ? n : '']) || void 0 === e ? void 0 : e.content) && void 0 !== t ? t : 4906);
          case pe.cS.GlobalPracticeSplash:
            return (0, _._i) (14896);
          case pe.cS.Grading:
          case pe.cS.Guessing:
          case pe.cS.Sliding:
          case pe.cS.SmartTip:
          case pe.cS.SmartTipSliding:
            return (0, _._i) (17249);
          case pe.cS.GrammarSkillSplash:
            return (0, _._i) (24742);
          case pe.cS.PlacementSplash:
            return (0, _._i) (4133);
          case pe.cS.Showing:
            return i.createElement('span', {
              className: '_3GCbr'
            }, i.createElement('span', {
              className: '_1HtZY'
            }), i.createElement('span', null, (0, _._i) (11383)));
          case pe.cS.SkillTestSplash:
            return (0, _._i) (5039, {
              level: a
            });
          default:
            return (0, _._i) (4906)
        }
      }) (),
      h = (() =>{
        switch (d) {
          case pe.cS.Guessing:
          case pe.cS.PriorProficiencySplash:
          case pe.cS.Sliding:
          case pe.cS.SmartTipSliding:
          case pe.cS.SmartTip:
            return !r();
          default:
            return !1
        }
      }) (),
      v = (() =>{
        switch (d) {
          case pe.cS.CoachDuoSubmitting:
          case pe.cS.Grading:
          case pe.cS.Submitting:
            return !0;
          default:
            return !1
        }
      }) ();
      return d !== pe.cS.EndCarousel && o.type !== S.FF.Checkpoint || (e = li.GREEN),
      i.useEffect((() =>{
        var e;
        h || d === pe.cS.Guessing || d === pe.cS.SmartTip || null === (e = u.current) || void 0 === e || e.focus()
      }), [
        d
      ]),
      i.createElement(p.Z, Object.assign({
      }, (0, Ee._q) (Se.V.PlayerNext), {
        'aria-disabled': h,
        className: null != m ? m : s() (Ys, {
          '_3MQZc _1u49Q': e === li.YELLOW,
          [
            Qs
          ]: e === li.GREEN,
          '_3nf-s NAidc': e === li.RED
        }),
        disabled: h,
        onClick: h || v ? void 0 : l,
        ref: u,
        submitting: v,
        useDisabledAttribute: !1,
        variant: 'solid'
      }), g)
    },
    si = ({
      disabled: e,
      dispatch: t,
      isToggledToTyping: n,
      type: a
    }) =>{
      const {
        handleClick: s,
        iconClass: r,
        label: l
      }
      = (() =>{
        switch (a) {
          case 'DIFFICULTY':
            return n ? {
              handleClick: () =>t((0, we.au) ()),
              iconClass: '_2JSbW _25C4L',
              label: (0, _._i) (19413)
            }
             : {
              handleClick: () =>t((0, we.au) ()),
              iconClass: '_2seqj _25C4L',
              label: (0, _._i) (10185)
            };
          case 'KEYBOARD':
            return n ? {
              handleClick: () =>t((0, we.RX) ()),
              iconClass: '_1ootc _25C4L',
              label: (0, _._i) (19288)
            }
             : {
              handleClick: () =>t((0, we.RX) ()),
              iconClass: '_3gEEV _25C4L',
              label: (0, _._i) (4221)
            };
          default:
            throw Error(`Unexpected toggle type: ${ a }`)
        }
      }) ();
      return i.createElement('button', Object.assign({
        className: '_29cJe _3cbXv _2RTMn _3yAjN',
        disabled: e,
        onClick: s
      }, (0, Ee._q) (Se.V.PlayerToggleKeyboard)), i.createElement('div', {
        className: 'binpA'
      }, i.createElement('div', {
        className: r
      }), i.createElement('div', {
        className: 'yWRY8 _3yAjN'
      }, l)))
    };
    var ii = n(34865);
    const ri = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      correct: '_3e9O1',
      incorrect: '_3vF5k',
      yellow: '_2NxDA',
      _footer: '_2LMXW',
      'footer-bordered': '_399cc _2LMXW',
      'footer-unbordered': 'YQ0lZ _2LMXW',
      '_footer-content-container': '_2T5D2',
      'footer-content-container': '_3FAc4 _2T5D2',
      'single-row-footer-content-container': '_1L84- _2T5D2',
      'progress-quiz-footer-content-container': '_1vwH3 _3FAc4 _2T5D2',
      'footer-right': '_10vOG',
      'footer-left': '_2XF-t',
      'footer-center': 'GE35t',
      'footer-secondary': '_2RFMP',
      'blame-wrap': '_1tuLI',
      none: 'ttyge',
      'blame-wrap-animated': '_3dRS9 _3DKa- _1tuLI',
      '_button-large-solid': 'gP8Wg',
      '_button-large-stroke': 'U1P3s',
      '_footer-button': '_40EaN',
      review: '_2ugbF U1P3s _40EaN',
      'secondary-button-blue': '_3KByY gP8Wg _40EaN',
      skip: 'J51YJ U1P3s',
      'skip-to-lesson': '_3SnKG U1P3s',
      'in-lesson-tip-button': '_2SJgH U1P3s',
      'in-lesson-tip-text': '_1VyAu',
      'light-bulb-logo': '_3-6tM',
      'progress-quiz-return-home': '_2LmEW _40EaN',
      'final-level-no-thanks': '_1_W7F _40EaN _1uhkX',
      'mistakes-inbox-dismiss': '_47xRj U1P3s _40EaN'
    };
    var li;
    !function (e) {
      e.GREEN = 'green',
      e.RED = 'red',
      e.YELLOW = 'yellow'
    }(li || (li = {
    }));
    const oi = ({
      challenge: e,
      challengeState: t,
      className: n,
      challengeToggleState: a,
      coachDuoModel: r,
      currentCourse: l,
      currentSessionEndSlideType: o,
      currentSkillLevel: c = 0,
      dispatch: d,
      inLessonTipAvailable: u,
      isDesktop: m,
      isGrammar: g,
      isSubmittable: h,
      onLeftButtonClick: v,
      onNextButtonClick: f,
      onSessionStart: b,
      onShowInLessonTipClick: k,
      onSkipButtonClick: y,
      remount: w,
      session: C,
      sessionParams: N,
      skill: T,
      smartTip: R,
      status: I,
      user: L
    }) =>{
      var F;
      const z = !0 === e.skipped && !0 === (null === (F = e.gradingResult) || void 0 === F ? void 0 : F.correct) && 'experiment' === (0, de.j6) ('speak_add_yellow_ribbon', void 0),
      D = (0, Z.Tb) (),
      {
        blame: j,
        correct: P
      }
      = (({
        challenge: e,
        currentCourse: t,
        dispatch: n,
        isYellowRibbon: a,
        smartTip: s,
        skillId: r,
        status: l,
        user: o
      }) =>{
        var c,
        d;
        switch (l) {
          case pe.cS.SpeakRetryBlaming:
          case pe.cS.Blaming:
            {
              const d = null === (c = null == e ? void 0 : e.gradingResult) || void 0 === c ? void 0 : c.correct,
              u = a ? li.YELLOW : d ? li.GREEN : li.RED;
              return {
                blame: i.createElement(Ks, {
                  challenge: e,
                  color: u,
                  correct: !!d,
                  currentCourse: t,
                  dispatch: n,
                  fromLanguage: t.fromLanguage,
                  learningLanguage: t.learningLanguage,
                  skillId: r,
                  smartTip: s,
                  status: l,
                  user: o
                }),
                correct: d
              }
            }
          case pe.cS.SmartTipBlaming:
            {
              const c = null === (d = null == s ? void 0 : s.gradingResult) || void 0 === d ? void 0 : d.correct,
              u = a ? li.YELLOW : c ? li.GREEN : li.RED;
              return {
                blame: i.createElement(Ks, {
                  challenge: e,
                  color: u,
                  correct: !!c,
                  currentCourse: t,
                  dispatch: n,
                  fromLanguage: t.fromLanguage,
                  learningLanguage: t.learningLanguage,
                  skillId: r,
                  smartTip: s,
                  status: l,
                  user: o
                }),
                correct: c
              }
            }
          default:
            return {
              blame: null,
              correct: void 0
            }
        }
      }) ({
        challenge: e,
        currentCourse: l,
        dispatch: d,
        isYellowRibbon: z,
        skillId: T.id,
        smartTip: R,
        status: I,
        user: L
      }),
      O = (({
        challenge: e,
        challengeToggleState: t,
        dispatch: n,
        isDesktop: a,
        isGrammar: s,
        status: r
      }) =>{
        switch (r) {
          case pe.cS.SpeakRetryBlaming:
          case pe.cS.Blaming:
          case pe.cS.Grading:
          case pe.cS.Guessing:
          case pe.cS.Sliding:
            if (t.canToggleTyping) {
              const l = r !== pe.cS.Guessing;
              if (a && l || s) return null;
              switch (e.type) {
                case S.Sm.CompleteReverseTranslation:
                case S.Sm.ListenTap:
                case S.Sm.Translate:
                  return i.createElement(si, {
                    disabled: l,
                    dispatch: n,
                    isToggledToTyping: t.isToggledToTyping,
                    type: e.type === S.Sm.CompleteReverseTranslation ? 'DIFFICULTY' : 'KEYBOARD'
                  });
                default:
                  return null
              }
            }
            return null;
          default:
            return null
        }
      }) ({
        challenge: e,
        challengeToggleState: a,
        dispatch: d,
        isDesktop: m,
        isGrammar: g,
        status: I
      }),
      A = C ? (({
        challenge: e,
        challengeState: t,
        currentSessionEndSlideType: n,
        dispatch: a,
        inLessonTipAvailable: r,
        isDesktop: l,
        onLeftButtonClick: o,
        onSessionStart: c,
        onShowInLessonTipClick: d,
        onSkipButtonClick: u,
        session: m,
        sessionParams: g,
        skill: h,
        status: v
      }) =>{
        switch (v) {
          case pe.cS.EndCarousel:
            switch (n) {
              case 'progress-quiz-results':
                return i.createElement(ia.Z, {
                  className: s() ((0, p.y) ({
                    variant: 'stroke'
                  }), ri['progress-quiz-return-home']),
                  href: '/',
                  onClick: () =>a({
                    type: 'sessionEnd/DISMISSED'
                  })
                }, (0, _._i) (18413));
              case 'final-level-failed':
                return i.createElement(ia.Z, {
                  className: s() ((0, p.y) ({
                    variant: 'stroke'
                  }), ri['final-level-no-thanks']),
                  href: '/learn',
                  onClick: () =>{
                    (0, E.j) ('final_level_failure_screen_dismiss', {
                      lesson_index: g.lessonIndex,
                      total_lessons: h.lessons
                    }),
                    a({
                      type: 'sessionEnd/DISMISSED'
                    })
                  }
                }, (0, _._i) (6821));
              case 'mistakesInbox':
              case 'mistakesInboxPrompt':
                return i.createElement(p.Z, {
                  className: ri['mistakes-inbox-dismiss'],
                  onClick: o,
                  variant: 'stroke'
                }, 'mistakesInbox' === n ? (0, _._i) (7827) : (0, _._i) (6821));
              default:
                return l ? i.createElement(p.Z, {
                  className: ri.review,
                  onClick: () =>{
                    a({
                      options: {
                        name: x.tl.SessionReview
                      },
                      type: 'TOGGLE_MODAL'
                    }),
                    (0, E.j) ('review_lesson_click', {
                    })
                  },
                  variant: 'stroke'
                }, (0, _._i) (19304)) : null
            }
          case pe.cS.Grading:
          case pe.cS.Guessing:
          case pe.cS.Showing:
          case pe.cS.Sliding:
            {
              const n = v !== pe.cS.Guessing;
              if (l && n) return null;
              const a = (0, pe.yn) ({
                challenge: e,
                challengeState: t,
                isDesktop: l,
                session: m,
                sessionParams: g
              });
              return a ? i.createElement(p.Z, Object.assign({
              }, (0, Ee._q) (Se.V.PlayerSkip), {
                className: ri.skip,
                disabled: n,
                onClick: u,
                variant: 'stroke'
              }), (0, _._i) ('cant-listen' === a ? 16837 : 'cant-speak' === a ? 14082 : 12500)) : r && !g.isFinalLevel ? i.createElement(p.Z, {
                className: ri['in-lesson-tip-button'],
                color: 'macaw',
                disabled: n,
                onClick: d,
                variant: 'stroke'
              }, i.createElement('img', {
                className: ri['light-bulb-logo'],
                src: ii
              }), i.createElement('span', {
                className: ri['in-lesson-tip-text']
              }, (0, _._i) (24742))) : null
            }
          case pe.cS.GrammarSkillSplash:
            return i.createElement(p.Z, {
              className: ri['skip-to-lesson'],
              color: 'macaw',
              onClick: () =>{
                (0, E.j) ('explanation_ad_cancel', {
                  is_grammar_skill: !0
                }),
                c()
              },
              variant: 'stroke'
            }, (0, _._i) (7058));
          default:
            return null
        }
      }) ({
        challenge: e,
        challengeState: t,
        currentSessionEndSlideType: o,
        dispatch: d,
        inLessonTipAvailable: u,
        isDesktop: m,
        onLeftButtonClick: v,
        onSessionStart: b,
        onShowInLessonTipClick: k,
        onSkipButtonClick: y,
        session: C,
        sessionParams: N,
        skill: T,
        status: I
      }) : null,
      M = (() =>{
        if (!C) return ri['footer-content-container'];
        switch (C.type) {
          case S.FF.PlacementTest:
            return A ? ri['single-row-footer-content-container'] : ri['footer-content-container'];
          case S.FF.ProgressQuiz:
            return 'progress-quiz-results' === o ? ri['progress-quiz-footer-content-container'] : ri['footer-content-container'];
          default:
            return ri['footer-content-container']
        }
      }) (),
      H = C ? (({
        isDesktop: e,
        remount: t,
        session: n,
        status: a
      }) =>{
        switch (a) {
          case pe.cS.EndCarousel:
            return e && n && n.type === S.FF.GlobalPractice ? i.createElement(p.Z, Object.assign({
            }, (0, Ee._q) (Se.V.PlayerPracticeAgain), {
              className: ri['secondary-button-blue'],
              onClick: t,
              variant: 'solid'
            }), (0, _._i) (18109)) : null;
          default:
            return null
        }
      }) ({
        isDesktop: m,
        onSessionStart: b,
        remount: w,
        session: C,
        status: I
      }) : null,
      B = C ? i.createElement(ai, {
        coachDuoModel: r,
        color: z ? li.YELLOW : !1 === P ? li.RED : li.GREEN,
        currentSessionEndSlideType: o,
        currentSkillLevel: c,
        isDesktop: m,
        isSubmittable: h,
        onClick: f,
        session: C,
        smartTip: R,
        status: I
      }) : null;
      return i.createElement('div', {
        className: s() (ri[`footer-${ void 0 === P ? '' : 'un' }bordered`], {
          [
            ri.yellow
          ]: m && z,
          [
            ri.correct
          ]: m && !0 === P && !z,
          [
            ri.incorrect
          ]: m && !1 === P && !z
        }, n),
        id: yt.D
      }, i.createElement('div', {
        className: M
      }, A ? i.createElement('div', {
        className: ri['footer-left']
      }, A) : null, O ? i.createElement('div', {
        className: ri['footer-center']
      }, O) : null, j ? i.createElement('div', {
        className: s() (ri['blame-wrap' + (D ? '' : '-animated')], void 0 === P ? '' : z ? ri.yellow : P ? ri.correct : ri.incorrect)
      }, j) : null, H ? i.createElement('div', {
        className: ri['footer-secondary']
      }, H) : null, B ? i.createElement('div', {
        className: ri['footer-right']
      }, B) : null))
    },
    ci = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      hearts: '_2plWZ',
      'heart-container': '_2VeNm',
      '_heart-filled': '_1Oz7v',
      '_heart-lost': '_22kW9',
      gray: '_17ytN _3XZrb _1woVy',
      red: '_1NtOv _1Oz7v _1eV_y _1woVy',
      'red-lost': '_3N_wo _1NtOv _1Oz7v _1eV_y _1woVy _22kW9',
      starling: '_26xqU _1Oz7v _2veMu _1woVy',
      'starling-lost': 'Q3nzf _26xqU _1Oz7v _2veMu _1woVy _22kW9'
    },
    di = ({
      color: e = 'red',
      left: t,
      total: n
    }) =>i.createElement('div', {
      className: ci.hearts
    }, u.DZ(n, (n=>i.createElement('div', {
      className: ci['heart-container'],
      key: n
    }, i.createElement('span', {
      className: ci.gray
    }), i.createElement('span', {
      className: ci[`${ e }${ n < t ? '' : '-lost' }`]
    })))));
    var ui = n(86505);
    const pi = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      grid: '_2nDUm',
      'grid-with-stats': '_3gWuI _2nDUm',
      'grid-with-settings': '_2LO8p _2nDUm',
      'grid-with-settings-and-stats': '_3FHOg _2nDUm',
      quit: '_2hiHn _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ _1DC8p _2jNpf',
      wrap: 'nP82K',
      'transliterations-settings': '_2l-C- _2kfEr _1nlVc _2fOC9 UCrz7 t5wFJ'
    },
    mi = ({
      player: e
    }) =>{
      const t = (0, Z.Fx) (g.Oz),
      n = (0, Z.Fx) ((e=>e.browserSettings.transliterationsSettings)),
      a = (0, Z.tX) (),
      s = (0, Ia.k6) (),
      {
        session: r,
        sessionParams: l,
        useHearts: o
      }
      = e,
      c = (0, pe.l$) (r.type) ? null : o ? i.createElement(di, {
        color: l.isFinalLevel ? 'starling' : 'red',
        left: e.session.heartsLeft,
        total: e.maxHearts
      }) : null,
      d = (0, Q._G) (r.type) && (0, Q.dN) (t.learningLanguage, t.fromLanguage, n, !0) ? i.createElement('button', {
        className: pi['transliterations-settings'],
        onClick: () =>a({
          options: {
            name: x.tl.TransliterationSettings
          },
          type: 'TOGGLE_MODAL'
        })
      }) : null,
      u = c && d ? 'grid-with-settings-and-stats' : c ? 'grid-with-stats' : d ? 'grid-with-settings' : 'grid';
      return i.createElement('div', {
        className: pi.wrap
      }, i.createElement('div', {
        className: pi[u]
      }, i.createElement('button', Object.assign({
        className: pi.quit
      }, (0, Ee._q) (Se.V.QuitButton), {
        onClick: () =>{
          var n;
          s.push(r.type === S.FF.PlacementTest || (null === (n = null == r ? void 0 : r.metadata) || void 0 === n ? void 0 : n.first_lesson) && (null == t ? void 0 : t.placementTestAvailable) ? '/welcome?welcomeStep=choosePath' : r.type === S.FF.AlphabetLesson ? '/characters' : '/learn'),
          e.status === pe.cS.PlacementSplash && (0, E.j) ('placement_splash_tap', {
            target: 'quit'
          })
        }
      })), d, i.createElement(ui.Z, {
        secondsLeft: void 0
      }), c))
    },
    gi = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      main: '_2PeYy',
      choices: '_12yaj',
      _label: '_1wmX_',
      'min-label': '_2ArNu _1wmX_',
      'max-label': '_1Su2F _1wmX_',
      '_circular-choice': '_1P8UQ',
      'circular-choice': '_2i82f _1P8UQ',
      'circular-choice-selected': '_30bW1 _1P8UQ',
      rating: '_1fGF7'
    },
    hi = e=>{
      const {
        isSelected: t,
        onSelectChoice: n,
        value: a
      }
      = e;
      return i.createElement('button', {
        className: gi['circular-choice' + (t ? '-selected' : '')],
        onClick: () =>n(a)
      }, i.createElement('div', {
        className: gi.rating
      }, a))
    },
    vi = e=>{
      const {
        currentRating: t,
        maxRatingLabel: n,
        maxRatingValue: a,
        minRatingLabel: s,
        minRatingValue: r,
        onSelectRating: l
      }
      = e,
      o = [
      ];
      for (let e = r; e <= a; e++) o.push(i.createElement(hi, {
        isSelected: !(void 0 === t || t !== e),
        key: `choice-${ e }`,
        onSelectChoice: l,
        value: e
      }));
      return i.createElement('div', {
        className: gi.main
      }, s ? i.createElement('div', {
        className: gi['min-label']
      }, s) : null, i.createElement('div', {
        className: gi.choices
      }, o.map(((e, t) =>i.createElement('div', {
        key: `rating-choice-${ t }`
      }, e)))), s ? i.createElement('div', {
        className: gi['max-label']
      }, n) : null)
    };
    class _i extends i.Component {
      constructor() {
        super (...arguments),
        this.selectProficiency = e=>{
          const {
            dispatch: t
          }
          = this.props;
          t({
            priorProficiency: e,
            type: 'SET_PRIOR_PROFICIENCY'
          })
        }
      }
      render() {
        const {
          learningLanguage: e,
          priorProficiency: t
        }
        = this.props,
        n = (0, f.vY) (e);
        return i.createElement('div', {
          className: '_1FCog'
        }, i.createElement('div', {
          className: '_14pB5'
        }, (0, _._i) (10011, {
          language_name: n
        })), i.createElement(vi, {
          currentRating: t,
          maxRatingLabel: (0, _.H8) (9979),
          maxRatingValue: 10,
          minRatingLabel: (0, _.H8) (19148),
          minRatingValue: 0,
          onSelectRating: this.selectProficiency
        }))
      }
    }
    const fi = _i;
    var xi = n(14889),
    bi = n(99621),
    Ei = n(59824);
    const Si = '_1HGMM',
    ki = '_21yiM _1giII',
    yi = '_1CGXL _1giII';
    const wi = {
      lottieBicepCurl: xi,
      lottieWaveBottom: bi,
      lottieWaveLeft: Ei
    },
    Ci = i.forwardRef((({
      lottie: e,
      className: t,
      onEnterFrame: n
    }, a) =>i.createElement('div', Object.assign({
      className: s() (t, Si),
      ref: a
    }, (0, Ee._q) (Se.V.SessionDuo)), i.createElement(i.Suspense, {
      fallback: null
    }, i.createElement(He.Z, {
      isPlaying: !0,
      onEnterFrame: n,
      path: e
    }))))),
    Ni = i.forwardRef((({
      className: e
    }, t) =>i.createElement('div', Object.assign({
      className: s() (e, Si),
      ref: t
    }, (0, Ee._q) (Se.V.SessionDuo))))),
    Ti = ({
      animate: e,
      children: t,
      onRequestClose: n,
      type: a
    }) =>{
      e = !(0, Z.Tb) () && e;
      const r = i.useCallback((() =>[0,
      'coachBottom' === a || 'coachLeft' === a ? e ? - 32 : 18 : 'finalLevelBottom' === a ? - 25 : 'finalLevelLeft' === a ? - 10 : 'hardModeLeft' === a ? 0 : 'mistakesReviewBottom' === a ? 15 : 'mistakesReviewLeft' === a ? - 40 : ((0, j.RJ) (a), 0)]), [
        e,
        a
      ]),
      l = (0, R.f) ({
        modifiers: [
          {
            enabled: !1,
            name: 'flip'
          },
          {
            enabled: !1,
            name: 'hide'
          },
          {
            name: 'offset',
            options: {
              offset: r
            }
          },
          {
            enabled: !1,
            name: 'preventOverflow'
          }
        ],
        placement: _.lw ? 'left' : 'right'
      }),
      [
        o,
        c
      ] = i.useState(!e),
      [
        d,
        u
      ] = i.useState(null);
      d !== a && (c(!e), u(a));
      const p = i.useCallback((({
        currentTime: e
      }) =>{
        e > ('coachBottom' === a || 'finalLevelBottom' === a ? 15 : 20) && c(!0)
      }), [
        a
      ]),
      {
        baseSessionDuo: m,
        cssVars: g,
        wrapClassName: h
      }
      = (() =>{
        const t = {
          animate: !!e,
          onEnterFrame: p,
          ref: l.setElementRef
        };
        switch (a) {
          case 'coachBottom':
            return {
              baseSessionDuo: e ? i.createElement(Ci, Object.assign({
              }, t, {
                className: 'm61gL',
                lottie: wi.lottieWaveBottom
              })) : i.createElement(Ni, {
                className: '_1YM9_ _2lTlB _1TSHz _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: e ? '_rHmp' : '_1epFk',
              wrapClassName: ki
            };
          case 'coachLeft':
            return {
              baseSessionDuo: e ? i.createElement(Ci, Object.assign({
              }, t, {
                className: '_3uk05 _1G1lu',
                lottie: wi.lottieWaveLeft
              })) : i.createElement(Ni, {
                className: '_3QdWH _3Jblo _1TSHz _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: e ? '_1uLsg' : '_3oaIl',
              wrapClassName: yi
            };
          case 'finalLevelBottom':
            return {
              baseSessionDuo: i.createElement(Ni, {
                className: '_3L9gx _2nEXq _1TSHz _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: '_1zC1U',
              wrapClassName: ki
            };
          case 'finalLevelLeft':
            return {
              baseSessionDuo: i.createElement(Ni, {
                className: '_2LahF DRBkF _1TSHz _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: '_2-MIh',
              wrapClassName: yi
            };
          case 'hardModeLeft':
            return {
              baseSessionDuo: e ? i.createElement(Ci, Object.assign({
              }, t, {
                className: '_3MlAQ _1G1lu',
                lottie: wi.lottieBicepCurl
              })) : i.createElement(Ni, {
                className: '_25dm9 _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: e ? '_4Hkz2' : '_2AoO6',
              wrapClassName: yi
            };
          case 'mistakesReviewBottom':
            return {
              baseSessionDuo: i.createElement(Ni, {
                className: '_18rIo _3kNfI _1TSHz _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: '_3Ku8d',
              wrapClassName: ki
            };
          case 'mistakesReviewLeft':
            return {
              baseSessionDuo: i.createElement(Ni, {
                className: '_2fe0m zuqPV _1TSHz _1G1lu',
                ref: l.setElementRef
              }),
              cssVars: '_1LOk_',
              wrapClassName: yi
            };
          default:
            throw (0, j.RJ) (a),
            Error(`Unsupported session Duo type: ${ a }`)
        }
      }) ();
      return i.createElement('div', {
        className: s() (g, h),
        key: a
      }, m, i.createElement(nt.Z, {
        isVisible: o
      }, i.createElement('div', null, i.createElement(I.Z, {
        className: '_33ksl',
        hasCloseButton: !!n,
        innerClassName: s() (g, [
          'coachBottom',
          'finalLevelBottom',
          'mistakesReviewBottom'
        ].includes(a) ? '_2Pb9t _1CzST' : '_1Hscu _1CzST'),
        onRequestClose: n,
        popperProps: l.props,
        ref: l.setPopoverRef,
        stemContainerRef: l.setArrowRef,
        zIndex: 0
      }, t))))
    },
    Ri = '_3XD6m',
    Ii = '_1aL4- EL50c _1TSHz',
    Li = parseFloat(F.Z['max-width-skill']),
    Fi = parseFloat(F.Z['max-width-skill-mobile']);
    class zi extends i.Component {
      constructor() {
        super (...arguments),
        this.getContent = () =>{
          var e;
          const {
            data: t,
            isDesktop: n
          }
          = this.props;
          switch (t.type) {
            case S.FF.Checkpoint:
              return {
                description: (0, _._i) (8298),
                header: (0, _._i) (11156),
                image: i.createElement('div', {
                  className: Ri
                }, i.createElement(Wn.Z, {
                  checkpointStatus: Vn.jF.UnlockedForCheckpoint,
                  sectionIndex: t.sectionIndex
                }))
              };
            case S.FF.CheckpointTest:
              {
                const e = (0, Vn.GZ) ({
                  course: t.course,
                  sectionEndIndex: t.treeSectionState.sectionEndIndex,
                  skills: t.skills
                });
                return {
                  description: (0, _._i) (23317),
                  header: (0, _._i) (13208, {
                    num_unlocks: e
                  }),
                  image: i.createElement('div', {
                    className: Ri
                  }, i.createElement(Wn.Z, {
                    checkpointStatus: Vn.jF.UnlockedForCheckpointTest,
                    sectionIndex: t.treeSectionState.sectionIndex
                  }))
                }
              }
            case S.FF.GlobalPractice:
              return t.isMistakesGlobalPractice ? {
                description: (0, _._i) (22180),
                header: (0, _._i) (14425),
                image: i.createElement('span', {
                  className: 'IiuYY _3KSus _1TSHz'
                })
              }
               : {
                description: (0, _._i) (9539),
                header: (0, _._i) (19683),
                image: i.createElement('span', {
                  className: Ii
                })
              };
            case S.FF.Lesson:
              return {
                description: null !== (e = t.explanation.intro) && void 0 !== e ? e : (0, _._i) (24898, {
                  skill_title: t.explanation.title
                }),
                header: (0, _._i) (16230, {
                  skillName: t.explanation.title
                }),
                image: i.createElement('span', {
                  className: 'rX6sA _1esaK _1TSHz _1G1lu'
                })
              };
            case S.FF.PlacementTest:
              return {
                description: (0, _._i) (15464),
                header: (0, _._i) (20561),
                image: i.createElement('span', {
                  className: '_2-uFo _2GUFb _1TSHz _1G1lu'
                })
              };
            case S.FF.SkillPractice:
              return (0, fs.pf) (t.skill, t.xpGains) ? {
                description: (0, _._i) (9539),
                header: (0, _._i) (19683),
                image: i.createElement('span', {
                  className: Ii
                })
              }
               : {
                description: (0, _._i) (1855),
                header: (0, _._i) (10658),
                image: i.createElement('span', {
                  className: '_1hVcF _3HGA- _1TSHz'
                })
              };
            case S.FF.SkillTest:
              return {
                description: (0, _._i) (10047),
                header: (0, _._i) (428, {
                  level: t.skill.finishedLevels + 1
                }),
                image: i.createElement('div', {
                  className: 'PpSvC'
                }, i.createElement(Ha.Z, {
                  sectionStatus: Vn.HI.Unlocked,
                  skill: t.skill,
                  width: 1.6 * (n ? Li : Fi)
                }))
              };
            default:
              throw (0, j.RJ) (t),
              Error(`Unexpected session type: ${ t.type }`)
          }
        }
      }
      componentDidMount() {
        const {
          data: e,
          via: t
        }
        = this.props;
        switch (e.type) {
          case S.FF.Checkpoint:
            (0, E.j) ('checkpoint_splash_load', {
              section_index: e.sectionIndex
            });
            break;
          case S.FF.GlobalPractice:
            e.isMistakesGlobalPractice && (0, E.j) ('mistakes_global_practice_show', {
            });
            break;
          case S.FF.Lesson:
            (0, E.j) ('explanation_ad_show', {
              is_grammar_skill: !0
            });
            break;
          case S.FF.PlacementTest:
            (0, E.j) ('placement_splash_load', {
              via: t
            })
        }
      }
      render() {
        const {
          description: e,
          header: t,
          image: n
        }
        = this.getContent();
        return i.createElement('div', {
          className: 'aUkqy'
        }, i.createElement('div', {
          className: '_4CXHr'
        }, n), i.createElement('div', {
          className: '_3DMuh'
        }, i.createElement('h2', Object.assign({
        }, (0, Ee._q) (Se.V.SessionSplashTitle), {
          className: '_2w563'
        }), t), i.createElement('p', {
          className: '_2L75s'
        }, e)))
      }
    }
    const Di = (0, d.$j) ((e=>({
      isDesktop: (0, g.$4) (e)
    }))) (zi),
    ji = ({
      disabled: e,
      learningLanguage: t,
      skillId: n,
      smartTipResource: a
    }) =>{
      var s;
      const r = (0, Z.tX) (),
      l = (0, Z.Fx) ((e=>e.player.status === pe.cS.SmartTip)),
      o = i.useRef(null),
      c = (e, t = {
      }) =>{
        t.skill_id = n,
        t.explanation_title = a.identifier,
        (0, E.j) (e, t)
      };
      return i.useEffect((() =>{
        l && r({
          timestamp: Date.now(),
          type: 'CHALLENGE_STARTED'
        })
      }), [
        l
      ]),
      i.createElement('div', {
        className: '_3tq7S'
      }, i.createElement('div', {
        className: 'lqXrN',
        ref: o
      }, i.createElement(Rs.ExplanationItems, {
        container: null !== (s = o.current) && void 0 !== s ? s : void 0,
        disabled: e,
        items: (0, xt.asMutable) (a.elements, {
          deep: !0
        }),
        learningLanguage: t,
        onAudioTap: () =>c('explanation_audio_tap'),
        onHintShown: e=>c('explanation_hint_shown', {
          hint: e
        }),
        variables: a.trigger.smart_tip.variables
      })))
    };
    var Zi = n(40387),
    Pi = function (e, t, n, a) {
      return new (n || (n = Promise)) ((function (s, i) {
        function r(e) {
          try {
            o(a.next(e))
          } catch (e) {
            i(e)
          }
        }
        function l(e) {
          try {
            o(a.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function o(e) {
          var t;
          e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
            e(t)
          }))).then(r, l)
        }
        o((a = a.apply(e, t || [
        ])).next())
      }))
    };
    const Oi = () =>{
      const e = (0, Z.tX) (),
      t = (0, Z.Fx) ((e=>(0, g.lA) (e).currentIndex)),
      n = (0, Z.Fx) (g.iH),
      a = (0, Z.Fx) (g.is),
      s = (0, Z.Fx) (g.oe),
      r = (0, Z.CC) (),
      l = (0, Z.Tb) (),
      [
        o,
        c
      ] = i.useState(!1),
      d = i.useRef([]),
      p = i.useRef(),
      m = i.useRef(),
      _ = i.useRef(),
      f = e=>(0, v.sS) ({
        challenge: e,
        hints: r.getState().player.hints[e.id],
        learningLanguage: n
      }),
      x = e=>Pi(void 0, void 0, void 0, (function * () {
        var t;
        if (!l && (null === (t = e.character) || void 0 === t ? void 0 : t.idleAnimation) && 'control' !== (0, de.j6) ('web_delight_idle_char_animations_v6', void 0)) try {
          yield We.N7(e.character.idleAnimation)
        } catch (t) {
          (0, E.j) ('lottie_download_failure', {
            offline: !navigator.onLine,
            path: e.character.idleAnimation,
            type: 'in_lesson_character_idle'
          })
        }
      })),
      b = t=>Pi(void 0, void 0, void 0, (function * () {
        (0, pe.LJ) (a.type) || void 0 !== r.getState().player.hints[t.id] || (yield e((0, we.XB) (t)))
      })),
      S = t=>Pi(void 0, void 0, void 0, (function * () {
        if (void 0 !== t) try {
          const n = yield h.s3.getExplanation(t.url);
          e({
            explanationResource: n,
            type: 'LOAD_IN_LESSON_TIP_RESOURCE',
            url: t.url
          })
        } catch (e) {
          (0, E.DT) ('fetch_explanation_failed', 'Failed to preload in-lesson tip', e)
        }
      })),
      k = e=>Pi(void 0, void 0, void 0, (function * () {
        try {
          yield h.bG.getLottieAnimation(e)
        } catch (e) {
        }
      })),
      y = e=>{
        const t = [
        ];
        return f(e).forEach((e=>{
          d.current.includes(e.url) || (t.push(Pi(void 0, void 0, void 0, (function * () {
            try {
              yield(0, U.IZ) (e.url)
            } catch (t) {
              (0, U.N$) (e)
            }
          }))), d.current.push(e.url))
        })),
        Promise.all(t)
      },
      w = e=>{
        const n = [
        ];
        if (!e) {
          const e = e=>f(e).map((e=>e.url));
          n.push(...a.challenges.slice(t).flatMap(e)),
          a.adaptiveChallenges && !(0, Zi.jJ) (a) && n.push(...a.adaptiveChallenges.flatMap(e))
        }
        const [s,
        i] = u.uK(d.current, (e=>!n.includes(e)));
        s.length && (console.log(`Unloading ${ s.length } TTS fragments`), s.forEach((e=>(0, U.Ms) (e))), d.current = i)
      };
      return i.useEffect((() =>{
        void 0 === _.current && a && Pi(void 0, void 0, void 0, (function * () {
          console.log('Preloading first challenge');
          const e = a.skillId ? s[a.skillId] : void 0,
          t = [
            S(null == e ? void 0 : e.explanation),
            S(a.challenges[0].explanation),
            b(a.challenges[0])
          ];
          yield Promise.all(t),
          y(a.challenges[0]),
          c(!0)
        }))
      })),
      i.useEffect((() =>{
        p.current === o && m.current === t || !o || Pi(void 0, void 0, void 0, (function * () {
          var e;
          w(!1);
          const n = a.challenges[t];
          console.log('Preloading (in)correct character animations'),
          (e=>{
            Pi(void 0, void 0, void 0, (function * () {
              var t,
              n;
              if (!l) {
                const a = null === (t = e.character) || void 0 === t ? void 0 : t.correctAnimation,
                s = null === (n = e.character) || void 0 === n ? void 0 : n.incorrectAnimation;
                yield Promise.all([a ? k(a) : Promise.resolve(),
                s ? k(s) : Promise.resolve()])
              }
            }))
          }) (n);
          const s = a.challenges[t + 1];
          if (s && (console.log('Preloading next challenge'), x(s), yield b(s), yield y(s), yield S(s.explanation)), 0 === t) {
            const t = null === (e = a.adaptiveChallenges) || void 0 === e ? void 0 : e[0];
            t && (console.log('Preloading first adaptive challenge'), x(t), yield b(t), yield y(t), yield S(t.explanation))
          }
        }))
      })),
      i.useEffect((() =>() =>w(!0)), [
      ]),
      i.useEffect((() =>{
        p.current = o,
        m.current = t,
        _.current = a
      })),
      {
        canStartSession: o
      }
    };
    const Ai = e=>e.player.status === pe.cS.CoachDuo || e.player.status === pe.cS.CoachDuoSliding || e.player.status === pe.cS.CoachDuoSubmitting,
    Mi = () =>{
      var e,
      t;
      const n = (0, Z.Fx) ((e=>e.player.coachDuo)),
      a = (0, Z.Fx) (Ai),
      s = (0, Z.Fx) (Aa.Rq),
      r = !a && 'coachDuo' !== s || 'dialogue' !== (null === (e = n.model) || void 0 === e ? void 0 : e.template.type) && 'top-message' !== (null === (t = n.model) || void 0 === t ? void 0 : t.template.type) ? void 0 : n.model.template.animation.url;
      i.useEffect((() =>{
        if (r) {
          let s = !1;
          return e = void 0,
          t = void 0,
          a = function * () {
            try {
              yield We.N7(r)
            } catch (e) {
            }
            s && (yield We.Od(r))
          },
          new ((n = void 0) || (n = Promise)) ((function (s, i) {
            function r(e) {
              try {
                o(a.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                o(a.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function o(e) {
              var t;
              e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                e(t)
              }))).then(r, l)
            }
            o((a = a.apply(e, t || [
            ])).next())
          })),
          () =>{
            We.Od(r),
            s = !0
          }
        }
        var e,
        t,
        n,
        a
      }), [
        r
      ])
    };
    var Hi = n(85321),
    Bi = n(77873);
    const Ui = {
      'duration-fade': '0.3s',
      'duration-slide': '0.4s',
      'height-tabbar-mobile': '90px',
      'height-topbar': '70px',
      'height-topbar-mobile': '58px',
      'juicy-bee': '#ffc800',
      'juicy-length': '8px',
      'juicy-margin': '24px',
      'margin-popover': '8px',
      'margin-popover-stem': '15px',
      'margin-popover-text': '5px',
      'max-width-skill': '106px',
      'max-width-skill-mobile': '96px',
      'size-checkpoint': '90px',
      'z-index-popover': '150',
      'z-index-topbar': '210',
      wrap: '_3x0ok',
      'loading-screen': '_3IGQx',
      player: 'mQ0GW',
      'player-padded': 'Yf5zL mQ0GW',
      'with-popover': '_2TZ02',
      'header-wrap': '_3FiYg',
      '_main-wrap': '_3VXxf',
      'main-wrap': '_3yOsW _3VXxf',
      'main-wrap-without-header': 'eGCMg',
      'main-wrap-without-footer': '_316OW',
      'footer-wrap': '_2Fc1K',
      'player-footer': '_3iFZd',
      'final-level-duo': '_3am8c',
      'mistakes-review-duo': '_3my7S'
    };
    var Gi = n(88394),
    qi = n(51748),
    Wi = n(59815),
    Vi = n(50548),
    $i = n(88268),
    Xi = n(68826),
    Ki = n(89803),
    Yi = n(88868),
    Ji = n(45212),
    Qi = n(20028),
    er = function (e, t, n, a) {
      return new (n || (n = Promise)) ((function (s, i) {
        function r(e) {
          try {
            o(a.next(e))
          } catch (e) {
            i(e)
          }
        }
        function l(e) {
          try {
            o(a.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function o(e) {
          var t;
          e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
            e(t)
          }))).then(r, l)
        }
        o((a = a.apply(e, t || [
        ])).next())
      }))
    };
    const tr = e=>e.player.sessionSubmitError && (e.player.status === pe.cS.CoachDuoSubmitting || e.player.status === pe.cS.Submitting),
    nr = e=>e.player.sessionSubmitted && (e.player.status === pe.cS.CoachDuoSubmitting || e.player.status === pe.cS.Submitting),
    ar = e=>{
      const {
        history: t,
        location: n,
        match: {
          params: a
        }
      }
      = e,
      s = (0, Z.tX) (),
      r = (0, Z.Fx) (g.jv),
      l = (0, Z.Fx) (Aa.Y_),
      c = (0, Z.Fx) (g.iM),
      d = (0, Z.Fx) (g.Oz),
      p = (0, Z.Fx) (g.MY),
      m = (0, Z.Fx) (g.B8),
      v = (0, Z.Fx) (g.SJ),
      _ = (0, Z.Fx) (g.__),
      x = (0, Z.Fx) (g.$4),
      S = (0, Z.Fx) (g.lA),
      k = (0, Z.Fx) ((t=>(0, Aa.RB) (t, e))),
      y = (0, Z.Fx) (g.oe),
      w = (0, Z.Fx) (Aa.QQ),
      C = (0, Z.Fx) (g.np),
      {
        isListenEnabled: N,
        isSpeakEnabled: T
      }
      = (0, Hi.Z) (),
      [
        ,
        R
      ] = n.pathname.split('/'),
      {
        fromLanguage: I,
        learningLanguage: L
      }
      = C,
      F = i.useRef(new oe.$B),
      z = (0, de.j6) ('web_delight_fullscreen_loading_v4', 'view'),
      [
        D
      ] = i.useState((() =>'control' === z ? void 0 : (0, Xi.F) ({
        course: d,
        isPlacementTest: 'placement' === R,
        skill: k,
        skills: y
      }))),
      {
        canStartSession: j
      }
      = Oi();
      Mi();
      const P = () =>{
        var e;
        (0, U.IZ) (U.Tc.BONUS),
        (0, U.IZ) (U.Tc.CORRECT),
        (0, U.IZ) (U.Tc.FAILED),
        (0, U.IZ) (U.Tc.INCORRECT),
        (0, U.IZ) (U.Tc.PASSED),
        (0, U.IZ) (U.Tc.TEST),
        (0, U.IZ) (U.Tc.TIMER),
        x && (null === (e = d.smartTips) || void 0 === e || e.forEach((e=>er(void 0, void 0, void 0, (function * () {
          try {
            const t = yield h.s3.getSmartTip(e.url);
            s({
              smartTipId: e.smartTipId,
              smartTipResource: t,
              type: 'LOAD_SMART_TIP_RESOURCE'
            })
          } catch (t) {
            console.warn(`Failed to download Smart Tip ${ e.smartTipId }.`)
          }
        }))))),
        Promise.all(u.VO(wi).map((e=>{
          return t = void 0,
          n = void 0,
          s = function * () {
            try {
              yield h.bG.getLottieAnimation(e)
            } catch (e) {
            }
          },
          new ((a = void 0) || (a = Promise)) ((function (e, i) {
            function r(e) {
              try {
                o(s.next(e))
              } catch (e) {
                i(e)
              }
            }
            function l(e) {
              try {
                o(s.throw(e))
              } catch (e) {
                i(e)
              }
            }
            function o(t) {
              var n;
              t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) {
                e(n)
              }))).then(r, l)
            }
            o((s = s.apply(t, n || [
            ])).next())
          }));
          var t,
          n,
          a,
          s
        })))
      };
      return i.useEffect((() =>(s({
        type: 'SET_SESSION_START_ACHIEVEMENTS'
      }), s({
        type: 'SET_SESSION_START_ACHIEVEMENTS_V3'
      }), P(), er(void 0, void 0, void 0, (function * () {
        try {
          const e = 'mistakes-review' === R ? (yield h.wO.getMistakes(d.id, C.id, N, T && (0, f.V7) (C.learningLanguage))).map((e=>e.challengeIdentifier)) : void 0;
          if (F.current.isCancelled()) throw new Wi.$K;
          const t = (0, pe.CN) ({
            browserSettings: r,
            currentCourseHistory: m,
            fromLanguage: I,
            isDesktop: x,
            isListenEnabled: N,
            learningLanguage: L,
            mistakeGeneratorIds: e,
            params: Object.assign(Object.assign({
            }, a), {
              type: R
            }),
            skill: k,
            timestamp: (0, qt.Zo) (),
            user: C
          });
          yield s((0, we.vP) (t, F.current))
        } catch (e) {
          e instanceof Wi.$K ? console.warn(e.message) : (e instanceof Wi.w ? (0, b.Kp) (e) : (0, b.vU) (e), 'alphabets' === R ? t.push('/characters') : t.push('/learn'))
        }
      })), () =>{
        F.current.cancel(),
        s({
          type: 'PLAYER_RESET'
        }),
        Ve.Z.remove('welcome_fork_to_session_start')
      })), [
      ]),
      i.useEffect((() =>{
        switch (R) {
          case 'practice':
            (0, Ki.o7) (n);
            break;
          case 'preview':
            (0, E.j) ('preview_session_start', {
            })
        }
      }), [
        R
      ]),
      i.useEffect((() =>{
        switch (R) {
          case 'checkpoint':
            s({
              id: (0, Vn.qG) (parseInt(a.index, 10)),
              section: 'tree',
              type: 'SET_HOME_PAGE_POPOVER'
            });
            break;
          case 'skill':
            s({
              id: k.id,
              section: 'tree',
              type: 'SET_HOME_PAGE_POPOVER'
            })
        }
      }), [
        R
      ]),
      i.createElement(o.Z, {
        className: 'control' === z ? void 0 : Ui['loading-screen'],
        delay: 'control' === z ? 0 : 500,
        message: 'control' === z ? void 0 : D,
        minDuration: 'control' === z ? 0 : 3000,
        ready: j,
        type: 'control' === z ? 'medium-white' : 'large'
      }, i.createElement(sr, Object.assign({
      }, e, {
        browserSettings: r,
        challengeToggleState: l,
        correctChallenges: c,
        course: d,
        currentChallenge: p,
        currentCourseHistory: m,
        dispatch: s,
        isDesktop: x,
        isModalOpen: v,
        items: _,
        player: S,
        skill: k,
        skills: y,
        treeSectionStates: w,
        user: C
      })))
    };
    class sr extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          currentSessionEndSlide: 0,
          userJustRegistered: 1000 * this.props.user.creationDate >= Date.now() - Gi.g3
        },
        this.shouldWarnBeforeQuitting = !0,
        this.goBack = () =>{
          this.props.player.session.type === S.FF.AlphabetLesson ? this.props.history.push('/characters') : this.props.history.push('/learn')
        },
        this.isSubmittable = () =>{
          const {
            currentChallenge: e,
            challengeToggleState: t,
            player: {
              challengeStates: n,
              currentIndex: a,
              session: s,
              smartTipToShow: i,
              status: r
            }
          }
          = this.props,
          l = n[a];
          switch (r) {
            case pe.cS.Guessing:
              return e && (0, v.w4) ({
                challenge: e,
                challengeState: l,
                challengeToggleState: t,
                session: s
              });
            case pe.cS.PriorProficiencySplash:
              return !!s.askPriorProficiency && void 0 !== s.priorProficiency;
            case pe.cS.SmartTip:
              return void 0 !== (null == i ? void 0 : i.guess);
            default:
              return !1
          }
        },
        this.handleKeydown = e=>{
          var t;
          const {
            player: n,
            player: {
              inLessonTipShowing: a
            }
          }
          = this.props,
          {
            currentSessionEndSlide: s
          }
          = this.state;
          if (e.isComposing) return;
          ((0, $i.b) (e, 'slowTts') || (0, $i.b) (e, 'tts')) && e.preventDefault();
          const i = n.status === pe.cS.EndCarousel ? null === (t = n.slideData[s]) || void 0 === t ? void 0 : t.type : void 0;
          if ('plus-ad' !== i && 'trial-wall' !== i && !a) switch (e.key) {
            case 'Backspace':
              if (!e.target.matches('input[type=text], textarea')) return e.preventDefault(),
              e.stopPropagation(),
              !1;
              break;
            case 'Enter':
              return e.preventDefault(),
              e.stopPropagation(),
              this.handleNextButtonClick(),
              !1
          }
        },
        this.handleKeyup = e=>{
          ((0, $i.b) (e, 'slowTts') || (0, $i.b) (e, 'tts')) && e.preventDefault()
        },
        this.handleLeftButtonClick = () =>{
          var e,
          t,
          n,
          a;
          const {
            dispatch: s,
            player: i,
            user: r
          }
          = this.props,
          {
            currentSessionEndSlide: l
          }
          = this.state;
          switch (i.status) {
            case pe.cS.EndCarousel:
              if ('mistakesInbox' === i.slideData[l].type) {
                if (s({
                  type: 'sessionEnd/DISMISSED'
                }), (0, E.j) ('mistakes_inbox_plus_se_dismiss', {
                  mistakes_inbox_counter: null !== (t = null === (e = r.mistakeCountInfo) || void 0 === e ? void 0 : e.mistakeCount) && void 0 !== t ? t : - 1
                }), this.nextSessionEndSlide()) break;
                this.goBack()
              } else if ('mistakesInboxPrompt' === i.slideData[l].type) {
                if (s({
                  type: 'sessionEnd/DISMISSED'
                }), (0, E.j) ('premium_ad_dismiss', {
                  iap_context: 'mistakes_inbox_session_end'
                }), (0, E.j) ('mistakes_inbox_free_se_dismiss', {
                  mistakes_inbox_counter: null !== (a = null === (n = r.mistakeCountInfo) || void 0 === n ? void 0 : n.mistakeCount) && void 0 !== a ? a : - 1
                }), this.nextSessionEndSlide()) break;
                this.goBack()
              }
          }
        },
        this.handleNextButtonClick = () =>er(this, void 0, void 0, (function * () {
          var e,
          t,
          n,
          a,
          s;
          const {
            dispatch: i,
            history: r,
            onRemount: l,
            player: o,
            user: c
          }
          = this.props,
          {
            currentSessionEndSlide: d
          }
          = this.state,
          u = window.performance.now();
          switch (i({
              id: void 0,
              type: 'SET_POPOVER'
            }), o.status) {
            case pe.cS.Blaming:
            case pe.cS.CoachDuo:
            case pe.cS.HardModeDuo:
            case pe.cS.PartialXpDuo:
            case pe.cS.SmartTipBlaming:
              Ve.Z.start('challenge_continue', {
                startTime: u
              }),
              this.advanceSession();
              break;
            case pe.cS.SpeakRetryBlaming:
              i({
                status: pe.cS.Guessing,
                type: 'SET_PLAYER_STATUS'
              });
              break;
            case pe.cS.CheckpointSplash:
              o.session.askPriorProficiency ? i({
                status: pe.cS.PriorProficiencySplash,
                type: 'SET_PLAYER_STATUS'
              }) : this.sessionStart();
              break;
            case pe.cS.EndCarousel:
              {
                const s = o.slideData[d].type;
                switch (s) {
                  case 'achievements-champion':
                  case 'achievements-completion':
                  case 'achievements-conqueror':
                  case 'achievements-friendly':
                  case 'achievements-gold-skills':
                  case 'achievements-legendary':
                  case 'achievements-overtime':
                  case 'achievements-perfect':
                  case 'achievements-photogenic':
                  case 'achievements-regal':
                  case 'achievements-sage':
                  case 'achievements-scholar':
                  case 'achievements-sharpshooter':
                  case 'achievements-social':
                  case 'achievements-spending':
                  case 'achievements-strategist':
                  case 'achievements-streak':
                  case 'achievements-time':
                  case 'achievements-wildfire':
                  case 'achievements-winner':
                  case 'achievements-xp':
                  case 'checkpoint':
                  case 'final-level-partial-xp':
                  case 'final-level-promotion':
                  case 'hoots':
                  case 'leveledUpSkill':
                  case 'lingot':
                  case 'lingot-reward':
                  case 'mistakesInboxEmpty':
                  case 'placementTestFailed':
                  case 'placementTestPassed':
                  case 'podcast':
                  case 'progress-quiz-ad':
                  case 'progress-quiz-reminder':
                  case 'stories':
                  case 'stories-unlock':
                  case 'story-set-unlock':
                  case 'streak':
                  case 'streakWager':
                  case 'streak-freeze-reward':
                  case 'testedOutSkill':
                  case 'testedOutSkills':
                  case 'weekend-amulet':
                  case 'xp':
                    i({
                      type: 'sessionEnd/DISMISSED'
                    });
                    break;
                  case 'final-level-failed':
                  case 'mistakesInbox':
                  case 'mistakesInboxPrompt':
                  case 'progress-quiz-results':
                  case 'streak-freeze-gift':
                    i({
                      type: 'sessionEnd/CTA_CLICK'
                    });
                    break;
                  case 'immersive-plus-ad':
                  case 'plus-ad':
                  case 'plus-new-years-ad':
                  case 'trial-wall':
                    break;
                  default:
                    (0, j.RJ) (s)
                }
                if ('mistakesInbox' === s) (0, E.j) ('mistakes_inbox_plus_se_tap', {
                  mistakes_inbox_counter: null !== (t = null === (e = c.mistakeCountInfo) || void 0 === e ? void 0 : e.mistakeCount) && void 0 !== t ? t : - 1
                }),
                l();
                 else if ('mistakesInboxPrompt' === s) (0, E.j) ('mistakes_inbox_free_se_tap', {
                  mistakes_inbox_counter: null !== (a = null === (n = c.mistakeCountInfo) || void 0 === n ? void 0 : n.mistakeCount) && void 0 !== a ? a : - 1
                }),
                (0, E.j) ('premium_ad_click', {
                  iap_context: 'mistakes_inbox_session_end'
                }),
                (0, ua.Tn) ({
                  customStartStep: H.K.Mistakes,
                  trackingProps: {
                    iap_context: 'mistakes_inbox_session_end'
                  }
                }, i);
                 else {
                  if (this.nextSessionEndSlide()) break;
                  'progress-quiz-results' === s ? r.push('/progress-quiz') : o.sessionParams.isFinalLevel && !o.endedEarly && (0, qa.Re) (this.props.skill) !== qa.sJ.FINALIZED ? (o.session.failed && (0, E.j) ('final_level_failure_screen_try_again_tap', {
                    lesson_index: o.sessionParams.lessonIndex,
                    total_lessons: this.props.skill.lessons
                  }), i({
                    options: {
                      name: x.tl.FinalLevelSplash,
                      onClose: () =>{
                        setTimeout((() =>this.goBack()))
                      },
                      origin: 'session_end',
                      skill: this.props.skill
                    },
                    type: 'TOGGLE_MODAL'
                  })) : this.goBack()
                }
                break
              }
            case pe.cS.Guessing:
              if (!this.isSubmittable()) return void console.log('Challenge cannot be submitted.');
              Ve.Z.start('challenge_grade', {
                startTime: u
              }),
              o.session.type === S.FF.Checkpoint ? (yield i((0, we.YK) (!1, Date.now())), this.advanceSession()) : i((0, we.YK) (!1, Date.now()));
              break;
            case pe.cS.GrammarSkillSplash:
              i({
                shouldShow: !0,
                type: 'TOGGLE_IN_LESSON_TIP'
              }),
              (0, E.j) ('explanation_ad_start', {
                is_grammar_skill: !0
              });
              break;
            case pe.cS.PlacementSplash:
              (0, E.j) ('placement_splash_tap', {
                target: 'start',
                via: null === (s = r.location.state) || void 0 === s ? void 0 : s.via
              }),
              this.sessionStart();
              break;
            case pe.cS.GlobalPracticeSplash:
              (0, E.j) ('mistakes_global_practice_start_tap', {
              }),
              this.sessionStart();
              break;
            case pe.cS.CheckpointTestSplash:
            case pe.cS.FinalLevelDuo:
            case pe.cS.MistakesReviewDuo:
            case pe.cS.PriorProficiencySplash:
            case pe.cS.SkillTestSplash:
              this.sessionStart();
              break;
            case pe.cS.Showing:
              i({
                type: 'CONTINUE_CURRENT_CHALLENGE'
              });
              break;
            case pe.cS.SmartTip:
              if (!this.isSubmittable()) return void console.log('Smart tip cannot be submitted.');
              i((0, Bi.C) (Date.now()));
              break;
            case pe.cS.CoachDuoSliding:
            case pe.cS.CoachDuoSubmitting:
            case pe.cS.Grading:
            case pe.cS.HardModeDuoSliding:
            case pe.cS.PartialXpDuoSliding:
            case pe.cS.Sliding:
            case pe.cS.SmartTipSliding:
            case pe.cS.Submitting:
              break;
            default:
              throw (0, j.RJ) (o.status),
              Error(`Unexpected player status: ${ o.status }`)
          }
        })),
        this.handleSkipButtonClick = () =>er(this, void 0, void 0, (function * () {
          const {
            currentChallenge: e,
            dispatch: t,
            isDesktop: n,
            player: {
              challengeStates: a,
              currentIndex: s,
              session: i,
              sessionParams: r
            }
          }
          = this.props,
          l = a[s],
          o = (0, pe.yn) ({
            challenge: e,
            challengeState: l,
            isDesktop: n,
            session: i,
            sessionParams: r
          });
          switch (o) {
            case 'broken-tts':
              (0, E.j) ('skipped_broken_tts', {
                challenge_id: e.id,
                challenge_type: e.type
              });
              break;
            case 'cant-listen':
              (0, E.j) ('listen_skipped', {
              }),
              t({
                listenDisabledUntil: (0, qt.Zo) () + (0, qt.dz) ({
                  hours: 1
                }),
                shouldReplaceListenChallenges: 'experiment' === (0, de.j6) ('gen_sess_web_listen_speak_replacements', void 0),
                type: 'DISABLE_LISTEN'
              });
              break;
            case 'cant-speak':
              {
                const e = 'experiment' === (0, de.j6) ('media_shorten_cant_speak_web', void 0) ? (0, qt.dz) ({
                  minutes: 10
                }) : (0, qt.dz) ({
                  hours: 1
                });
                (0, E.j) ('speak_skipped', {
                }),
                t({
                  shouldReplaceSpeakChallenges: 'experiment' === (0, de.j6) ('gen_sess_web_listen_speak_replacements', void 0),
                  speakDisabledUntil: (0, qt.Zo) () + e,
                  type: 'DISABLE_SPEAK'
                });
                break
              }
          }
          yield t((0, we.YK) (!0, Date.now())),
          'broken-tts' === o && this.advanceSession()
        })),
        this.handleShowInLessonTipClick = () =>{
          const {
            dispatch: e
          }
          = this.props;
          e({
            shouldShow: !0,
            type: 'TOGGLE_IN_LESSON_TIP'
          })
        },
        this.nextSessionEndSlide = () =>{
          const e = this.state.currentSessionEndSlide + 1;
          return e < this.props.player.slideData.length && (this.setCurrentSessionEndSlide(e), !0)
        },
        this.setCurrentSessionEndSlide = e=>this.setState({
          currentSessionEndSlide: e
        }),
        this.advanceSession = () =>{
          const {
            dispatch: e,
            player: t,
            player: {
              session: n
            }
          }
          = this.props;
          if ((0, U.Ap) (), !(0, pe.l$) (n.type)) {
            const n = (0, Zi.hM) (t);
            n && e({
              challenges: n,
              type: 'REPLACE_WITH_ADAPTIVE_CHALLENGES'
            })
          }
          e((0, we.Z3) ())
        },
        this.sessionStart = () =>{
          var e,
          t;
          const {
            course: n,
            currentCourseHistory: a,
            dispatch: s,
            history: i,
            player: {
              currentIndex: r,
              inLessonTipResources: l,
              session: o,
              sessionParams: c
            }
          }
          = this.props;
          if (c.isGrammarSkill) {
            const e = o.challenges[r],
            t = e.explanation ? l[e.explanation.url] : void 0;
            t && s({
              explanationResource: t,
              type: 'SET_IN_LESSON_TIP'
            })
          }
          const d = (0, Ss.cy) (this.props.items);
          !c.isFinalLevel || this.props.user.hasPlus || (0, Qi.d1) (this.props.user) ? o.type === S.FF.SkillTest && (0, Ji.a) (s, this.props.items, this.props.user) : d && s(oa.xD(d, 'final_level'));
          const u = (0, qt.Zo) ();
          s({
            courseId: n.id,
            session: o,
            sessionParams: c,
            startTime: u,
            type: 'START_SESSION'
          }),
          (0, E.j) ('session_start', {
            num_placement_starts: null !== (e = null == a ? void 0 : a.globalPlacementSessionStarts) && void 0 !== e ? e : 0,
            session_is_legendary: c.isFinalLevel,
            speak_ineligible: !c.challengeTypes.some((e=>(0, pe.bc) ().includes(e))),
            speak_ineligible_reasons: c.speakIneligibleReasons,
            via: null === (t = i.location.state) || void 0 === t ? void 0 : t.via
          })
        },
        this.sessionSubmitFailed = () =>{
          const {
            history: e,
            location: t,
            player: {
              sessionSubmitError: n
            }
          }
          = this.props;
          if (n instanceof Wi.$K) console.warn(n.message);
           else if (n instanceof Wi.Di) console.warn(n.message),
          (0, Yi.Zs) ('/learn');
           else {
            n && (0, b.vU) (n);
            const [,
            a] = t.pathname.split('/');
            'alphabets' === a ? e.push('/characters') : e.push('/learn')
          }
        },
        this.sessionSubmitted = () =>{
          var e;
          const {
            browserSettings: t,
            currentCourseHistory: n,
            dispatch: a,
            history: s,
            player: i,
            player: {
              session: r
            }
          }
          = this.props;
          a({
            status: pe.cS.EndCarousel,
            type: 'SET_PLAYER_STATUS'
          }),
          (0, U.GN) (r.failed ? U.Tc.FAILED : U.Tc.PASSED),
          (0, pe.p1) ({
            browserSettings: t,
            currentCourseHistory: n,
            player: i,
            via: null === (e = s.location.state) || void 0 === e ? void 0 : e.via
          }),
          Ve.Z.finish('session_end_grade')
        }
      }
      componentDidMount() {
        const {
          dispatch: e,
          player: t,
          player: {
            challengeStates: n,
            currentIndex: a,
            inLessonTipResources: s,
            session: {
              challenges: i
            }
          },
          skill: r
        }
        = this.props,
        l = i[a],
        o = n[a];
        if (ue.U.addListener(document, 'keydown', this.handleKeydown), ue.U.addListener(document, 'keyup', this.handleKeyup), t.status === (0, pe.ct) (l, o)) this.sessionStart();
         else if (t.status === pe.cS.GrammarSkillSplash) {
          const t = r.explanation ? s[r.explanation.url] : void 0;
          t ? e({
            explanationResource: t,
            type: 'SET_IN_LESSON_TIP'
          }) : ((0, b.vU) ('No in-lesson tip was available on grammar skill splash screen'), this.sessionStart())
        }
        Ve.Z.has('welcome_fork_to_session_start') ? Ve.Z.finish('welcome_fork_to_session_start') : Ve.Z.finish('lesson_start')
      }
      componentDidUpdate(e) {
        var t;
        const {
          player: {
            session: n,
            status: a
          }
        }
        = e,
        {
          currentChallenge: s,
          dispatch: i,
          player: r,
          player: {
            coachDuo: l,
            coachDuo: {
              model: o
            },
            session: c,
            sessionParams: d,
            sessionSubmitError: u,
            sessionSubmitted: p
          }
        }
        = this.props;
        if ((u || p) && (this.shouldWarnBeforeQuitting = !1), !tr(e) && tr(this.props) && this.sessionSubmitFailed(), !nr(e) && nr(this.props) && this.sessionSubmitted(), a !== r.status) switch (r.status) {
          case pe.cS.CoachDuo:
            if (void 0 === o) break;
            (0, E.j) ('lesson_coach_shown', {
              cause: o.showReason,
              character_animations: 'dialogue' === o.template.type || 'top-message' === o.template.type,
              message_index: null !== (t = o.template.trackingIndex) && void 0 !== t ? t : - 1,
              session_type: r.session.type,
              specific_cause: (() =>{
                switch (o.showReason) {
                  case qi.w.AfterThirdMistakeCheckpointTest:
                    return 'after_third_mistake_checkpoint_test';
                  case qi.w.BigRightStreak:
                  case qi.w.BigRightStreakCheckpointTest:
                  case qi.w.BigRightStreakPlacement:
                  case qi.w.BigRightStreakPlacementExperiment:
                  case qi.w.PerfectLesson:
                  case qi.w.MediumRightStreakCheckpointTest:
                  case qi.w.MediumRightStreakPlacement:
                  case qi.w.SmallRightStreak:
                  case qi.w.SmallRightStreakPlacement:
                  case qi.w.SmallRightStreakPlacementExperiment:
                    return `${ l.currentCorrectStreak }_right`;
                  case qi.w.FirstCorrectCheckpointTest:
                  case qi.w.FirstCorrectPlacement:
                    return 'first_question_correct';
                  case qi.w.MidPointCheckpointTest:
                    return 'mid_point_checkpoint_test';
                  case qi.w.TwentyQuestionsPlacement:
                    return 'twenty_questions';
                  case qi.w.FirstWrongCheckpointTest:
                  case qi.w.FirstWrongPlacement:
                    return 'first_question_wrong';
                  case qi.w.FourQuestionsLeftCheckpointTest:
                    return 'four_questions_left_checkpoint_test';
                  case qi.w.WrongStreak:
                  case qi.w.WrongStreakPlacement:
                  case qi.w.WrongStreakPlacementEnd:
                  case qi.w.WrongStreakPlacementExperiment:
                    return `${ l.currentIncorrectStreak }_wrong`;
                  default:
                    return (0, j.RJ) (o.showReason),
                    ''
                }
              }) ()
            });
            break;
          case pe.cS.SpeakRetryBlaming:
          case pe.cS.Blaming:
            Ve.Z.finish('challenge_grade'),
            s.type === S.Sm.Speak && Ve.Z.finish('speech_grade'),
            d.isFinalLevel && n.heartsLeft !== c.heartsLeft && (0, E.j) ('final_level_subtract_heart', {
              deactivated_hearts: 3 - c.heartsLeft
            }),
            r.status === pe.cS.SpeakRetryBlaming && i((0, we.v1) ());
            break;
          case pe.cS.Guessing:
          case pe.cS.Showing:
            a === pe.cS.Sliding && Ve.Z.finish('challenge_continue');
            break;
          case pe.cS.PartialXpDuo:
            (0, E.j) ('final_level_partial_xp_show', {
            })
        }
      }
      componentWillUnmount() {
        const {
          dispatch: e,
          isModalOpen: t,
          player: {
            session: n
          }
        }
        = this.props;
        void 0 !== n && void 0 === n.endTime && e((0, we.wZ) ()),
        ue.U.removeListener(document, 'keydown', this.handleKeydown),
        ue.U.removeListener(document, 'keyup', this.handleKeyup),
        t && e({
          options: void 0,
          type: 'TOGGLE_MODAL'
        })
      }
      render() {
        var e,
        t,
        n,
        a,
        r,
        o,
        d,
        u,
        p,
        m,
        g,
        h;
        const {
          course: v,
          correctChallenges: f,
          currentChallenge: x,
          challengeToggleState: b,
          dispatch: E,
          history: k,
          isDesktop: y,
          onRemount: w,
          player: N,
          player: {
            coachDuo: T,
            coachDuo: {
              model: R
            },
            currentIndex: I,
            session: L,
            sessionParams: F,
            smartTipToShow: z
          },
          skill: D = {
          },
          skills: Z,
          treeSectionStates: P,
          user: O,
          user: {
            learningLanguage: A
          }
        }
        = this.props,
        {
          currentSessionEndSlide: H,
          userJustRegistered: B
        }
        = this.state,
        U = N.challengeStates[I],
        G = N.status === pe.cS.EndCarousel ? null === (e = N.slideData[H]) || void 0 === e ? void 0 : e.type : void 0,
        q = (e=>{
          switch (e.status) {
            case pe.cS.CoachDuo:
            case pe.cS.CoachDuoSliding:
            case pe.cS.CoachDuoSubmitting:
            case pe.cS.FinalLevelDuo:
            case pe.cS.HardModeDuo:
            case pe.cS.HardModeDuoSliding:
            case pe.cS.MistakesReviewDuo:
            case pe.cS.SmartTip:
            case pe.cS.SmartTipBlaming:
            case pe.cS.SmartTipSliding:
            case pe.cS.SpeakRetryBlaming:
            case pe.cS.Blaming:
            case pe.cS.Grading:
            case pe.cS.Guessing:
            case pe.cS.PartialXpDuo:
            case pe.cS.PartialXpDuoSliding:
            case pe.cS.Showing:
            case pe.cS.Sliding:
            case pe.cS.Submitting:
              return i.createElement(mi, {
                key: - 1,
                player: e
              });
            case pe.cS.CheckpointSplash:
            case pe.cS.CheckpointTestSplash:
            case pe.cS.EndCarousel:
            case pe.cS.GlobalPracticeSplash:
            case pe.cS.GrammarSkillSplash:
            case pe.cS.PlacementSplash:
            case pe.cS.PriorProficiencySplash:
            case pe.cS.SkillTestSplash:
              return null;
            default:
              return (0, j.RJ) (e.status),
              null
          }
        }) (N);
        let W = null,
        V = !0;
        switch (N.status) {
          case pe.cS.CoachDuo:
          case pe.cS.CoachDuoSliding:
          case pe.cS.CoachDuoSubmitting:
            W = i.createElement(Ja, {
              className: 'static' === (null == R ? void 0 : R.template.type) ? Ui['with-popover'] : void 0,
              slideElementKey: `COACH_DUO_${ I }`
            }, N.status !== pe.cS.CoachDuoSliding && R ? 'static' === R.template.type ? i.createElement(Ti, {
              animate: !0,
              type: y ? 'coachBottom' : 'coachLeft'
            }, R.template.message) : 'dialogue' === R.template.type ? i.createElement(Fn, {
              isPlaying: N.status === pe.cS.CoachDuo || N.status === pe.cS.CoachDuoSubmitting,
              template: R.template
            }) : 'top-message' === R.template.type ? i.createElement(jn, {
              isPlaying: N.status === pe.cS.CoachDuo || N.status === pe.cS.CoachDuoSubmitting,
              streak: T.currentCorrectStreak,
              template: R.template
            }) : null : null);
            break;
          case pe.cS.FinalLevelDuo:
          case pe.cS.PartialXpDuo:
          case pe.cS.PartialXpDuoSliding:
            W = i.createElement(Ja, {
              className: Ui['with-popover'],
              slideElementKey: `FINAL_LEVEL_DUO_${ I }`
            }, i.createElement(Ti, {
              type: y ? 'finalLevelBottom' : 'finalLevelLeft'
            }, i.createElement('span', {
              className: Ui['final-level-duo']
            }, N.status === pe.cS.FinalLevelDuo ? (0, _._i) (30164, {
              num: N.maxHearts
            }) : (0, _._i) (28126, {
              xp: fs.zm
            }))));
            break;
          case pe.cS.HardModeDuo:
          case pe.cS.HardModeDuoSliding:
            W = B || 'control' === (0, de.j6) ('web_delight_mid_lesson_animation_P2', void 0) ? i.createElement(Ja, {
              className: Ui['with-popover'],
              slideElementKey: `HARD_MODE_DUO_${ I }`
            }, N.status === pe.cS.HardModeDuo ? i.createElement(Ti, {
              animate: !0,
              type: 'hardModeLeft'
            }, N.session.type === S.FF.AlphabetLesson ? (0, _._i) (26296) : (0, _._i) (1316)) : null) : i.createElement(Ja, {
              slideElementKey: `HARD_MODE_DUO_${ I }`
            }, N.status === pe.cS.HardModeDuo ? i.createElement(Fn, {
              isPlaying: N.status === pe.cS.HardModeDuo,
              template: {
                animation: Gi.R4,
                character: 'duo',
                message: N.session.type === S.FF.AlphabetLesson ? (0, _.H8) (26296) : (0, _.H8) (1316),
                type: 'dialogue'
              }
            }) : null);
            break;
          case pe.cS.MistakesReviewDuo:
            W = i.createElement(Ja, {
              className: Ui['with-popover'],
              slideElementKey: `MISTAKES_REVIEW_DUO_${ I }`
            }, i.createElement(Ti, {
              type: y ? 'mistakesReviewBottom' : 'mistakesReviewLeft'
            }, i.createElement('span', {
              className: Ui['mistakes-review-duo']
            }, (0, _._i) (25566, {
              mistakesCount: L.challenges.length
            }))));
            break;
          case pe.cS.SmartTip:
          case pe.cS.SmartTipBlaming:
          case pe.cS.SmartTipSliding:
            W = i.createElement(Ja, {
              slideElementKey: `SMART_TIP_${ I }`
            }, void 0 === z ? null : i.createElement(ji, {
              disabled: N.status !== pe.cS.SmartTip,
              dispatch: E,
              learningLanguage: A,
              skillId: D.id,
              smartTipResource: z
            }));
            break;
          case pe.cS.SpeakRetryBlaming:
          case pe.cS.Blaming:
          case pe.cS.Grading:
          case pe.cS.Guessing:
          case pe.cS.Showing:
          case pe.cS.Sliding:
          case pe.cS.Submitting:
            W = i.createElement(Ja, {
              slideElementKey: I
            }, i.createElement(Tn, {
              index: I
            }));
            break;
          case pe.cS.EndCarousel:
            ('leveledUpSkill' === G && F.isFinalLevel || 'final-level-promotion' === G) && (V = !1),
            W = i.createElement(Cs, {
              currentSlide: H,
              hasNativeAd: N.hasNativeAd,
              isPadded: V,
              onNextClick: this.handleNextButtonClick,
              skill: D,
              slideData: N.slideData
            });
            break;
          case pe.cS.CheckpointSplash:
            W = i.createElement(Di, {
              data: {
                sectionIndex: null !== (n = null === (t = N.sessionParams) || void 0 === t ? void 0 : t.checkpointIndex) && void 0 !== n ? n : 0,
                type: S.FF.Checkpoint
              },
              key: 1,
              via: null === (a = k.location.state) || void 0 === a ? void 0 : a.via
            });
            break;
          case pe.cS.CheckpointTestSplash:
            W = i.createElement(Di, {
              data: {
                course: v,
                skills: Z,
                treeSectionState: P[null !== (o = null === (r = N.sessionParams) || void 0 === r ? void 0 : r.checkpointIndex) && void 0 !== o ? o : 0],
                type: S.FF.CheckpointTest
              },
              key: 1,
              via: null === (d = k.location.state) || void 0 === d ? void 0 : d.via
            });
            break;
          case pe.cS.GlobalPracticeSplash:
            W = [
              i.createElement(Di, {
                data: {
                  isMistakesGlobalPractice: L.isMistakesGlobalPractice,
                  type: S.FF.GlobalPractice
                },
                key: 1,
                via: null === (u = k.location.state) || void 0 === u ? void 0 : u.via
              })
            ];
            break;
          case pe.cS.GrammarSkillSplash:
            W = [
              x.explanation ? i.createElement(Di, {
                data: {
                  explanation: x.explanation,
                  type: S.FF.Lesson
                },
                key: 1,
                via: null === (p = k.location.state) || void 0 === p ? void 0 : p.via
              }) : null
            ];
            break;
          case pe.cS.PlacementSplash:
            W = i.createElement(Di, {
              data: {
                type: S.FF.PlacementTest
              },
              key: 1,
              via: null === (m = k.location.state) || void 0 === m ? void 0 : m.via
            });
            break;
          case pe.cS.PriorProficiencySplash:
            W = i.createElement(fi, {
              dispatch: E,
              key: 1,
              learningLanguage: A,
              priorProficiency: L.priorProficiency
            });
            break;
          case pe.cS.SkillTestSplash:
            W = i.createElement(Di, {
              data: {
                skill: D,
                type: S.FF.SkillTest
              },
              key: 1,
              via: null === (g = k.location.state) || void 0 === g ? void 0 : g.via
            });
            break;
          default:
            (0, j.RJ) (N.status)
        }
        const $ = 'immersive-plus-ad' === G || 'plus-ad' === G || 'plus-new-years-ad' === G || 'trial-wall' === G || 'leveledUpSkill' === G && N.sessionParams.isFinalLevel || 'final-level-promotion' === G ? null : i.createElement(oi, {
          challenge: x,
          challengeState: U,
          challengeToggleState: b,
          className: Ui['player-footer'],
          coachDuoModel: R,
          currentCourse: v,
          currentSessionEndSlideType: G,
          currentSkillLevel: D.finishedLevels,
          dispatch: E,
          inLessonTipAvailable: void 0 !== N.inLessonTip,
          isDesktop: y,
          isGrammar: null !== (h = N.sessionParams.isGrammarSkill) && void 0 !== h && h,
          isSubmittable: this.isSubmittable,
          onLeftButtonClick: this.handleLeftButtonClick,
          onNextButtonClick: this.handleNextButtonClick,
          onSessionStart: this.sessionStart,
          onShowInLessonTipClick: this.handleShowInLessonTipClick,
          onSkipButtonClick: this.handleSkipButtonClick,
          remount: w,
          session: L,
          sessionParams: F,
          skill: D,
          smartTip: z,
          status: N.status,
          user: O
        });
        return i.createElement('div', {
          className: Ui.wrap
        }, i.createElement(l.Z, {
          message: () =>!this.shouldWarnBeforeQuitting || !f.length || (0, _.H8) (6472)
        }), i.createElement('div', {
          className: Ui['player' + (V ? '-padded' : '')]
        }, q ? i.createElement('div', {
          className: Ui['header-wrap']
        }, q) : null, i.createElement('div', {
          className: s() ({
            [
              Ui['main-wrap']
            ]: !0,
            [
              Ui['main-wrap-without-header']
            ]: !q,
            [
              Ui['main-wrap-without-footer']
            ]: !$
          })
        }, W), $ ? i.createElement('div', {
          className: Ui['footer-wrap']
        }, $) : null), i.createElement(c.Z, null), i.createElement(Is, {
          onSessionStart: this.sessionStart
        }), i.createElement(C, null), i.createElement(M, null))
      }
    }
    const ir = e=>{
      var t,
      n,
      a;
      const s = (0, Z.Fx) (g.is),
      [
        l,
        o
      ] = i.useState(void 0 !== s),
      [
        c,
        d
      ] = i.useState(e.location.pathname),
      [
        u,
        p
      ] = i.useState(null === (t = e.location.state) || void 0 === t ? void 0 : t.sessionRetry),
      m = i.useCallback((() =>{
        o(!0)
      }), [
      ]);
      i.useEffect((() =>{
        l && void 0 === s && o(!1)
      }));
      const h = (0, Z.tX) ();
      return (0, Vi.Z) (i.useCallback((() =>h((0, we.DR) ())), [
      ])),
      e.location.pathname !== c && (m(), d(e.location.pathname)),
      (null === (n = e.location.state) || void 0 === n ? void 0 : n.sessionRetry) !== u && (m(), p(null === (a = e.location.state) || void 0 === a ? void 0 : a.sessionRetry)),
      l ? 'control' === (0, de.j6) ('web_delight_fullscreen_loading_v4', 'view') ? i.createElement(r.Z, {
        type: 'screen-white'
      }) : null : i.createElement(ar, Object.assign({
      }, e, {
        onRemount: m
      }))
    }
  },
  65637: (e, t, n) =>{
    n.r(t),
    n.d(t, {
    default:
      () =>d
    });
    var a = n(27378),
    s = n(42659),
    i = n(83936),
    r = n(60610),
    l = n(74245),
    o = n(88868),
    c = n(785);
    const d = ({
      children: e,
      history: t,
      location: n,
      match: {
        params: {
          languageAbbrev: d,
          urlName: u
        }
      }
    }) =>{
      const p = (0, r.Fx) ((e=>e.user.hasPlus)),
      m = (0, r.Fx) (s.iH),
      g = (0, r.Fx) ((e=>(0, i.RB) (e, {
        location: n
      }))),
      h = a.useRef();
      let v = n.pathname;
      if (h.current !== n.pathname) {
        h.current = n.pathname;
        const [,
        e,
        t] = n.pathname.split('/'),
        a = t && t !== m && (0, l.Py) (t) !== m;
        switch (e) {
          case 'alphabets':
            a && (v = '/characters');
            break;
          case 'checkpoint':
          case 'placement':
            a && (v = o.B6);
            break;
          case 'progress-quiz':
            !a && p || (v = o.B6);
            break;
          case 'skill':
            {
              const e = g ? g.finishedLessons + 1 : void 0;
              v = void 0 === e ? o.B6 : `/skill/${ d }/${ u }/${ e }`;
              break
            }
        }
      }
      const _ = n.pathname !== v;
      return a.useEffect((() =>{
        _ && ((0, c.mh) (window.location.href, v, 'soft'), t.replace(Object.assign(Object.assign({
        }, n), {
          pathname: v
        })))
      }), [
        v,
        _
      ]),
      _ ? null : a.createElement(a.Fragment, null, e)
    }
  },
  41898: (e, t, n) =>{
    n.r(t),
    n.d(t, {
    default:
      () =>g
    });
    var a = n(27378),
    s = n(42659),
    i = n(83936),
    r = n(59273),
    l = n(60610),
    o = n(89803),
    c = n(88868),
    d = n(51551),
    u = n(17251),
    p = n(785),
    m = n(20028);
    const g = ({
      children: e,
      history: t,
      location: n,
      match: g
    }) =>{
      const h = (0, l.Fx) ((e=>(0, i.RB) (e, {
        location: n
      }))),
      v = (0, l.Fx) (s.np),
      _ = (0, l.Fx) (s.__),
      f = (0, d.cy) (_),
      [
        x
      ] = a.useState((() =>{
        if ((0, r.gQ) ('levelIndex')) return !0;
        if (!h) return console.error('User tried to access nonexistent skill'),
        !1;
        if (!h.accessible) return console.error('User tried to access locked skill.', h),
        !1;
        const e = Object.assign(Object.assign({
        }, g.params), {
          type: n.pathname.split('/') [1]
        });
        return !('skill' === e.type && !isNaN(parseInt(e.lesson, 10)) && (0, u.uL) (h) && !v.hasPlus && !(0, m.d1) (v) && f && v.lingots < f.price && (console.error('(Non-plus) user tried to access a final level without having enough lingots to purchase an attempt', h), 1))
      }));
      return a.useEffect((() =>{
        x || ((0, p.mh) (window.location.href, c.B6, 'soft'), t.replace(c.B6))
      }), [
        x
      ]),
      a.useEffect((() =>{
        (0, o.o7) (n)
      }), [
      ]),
      x ? a.createElement(a.Fragment, null, e) : null
    }
  },
  71084: (e, t, n) =>{
    n.r(t),
    n.d(t, {
    default:
      () =>r
    });
    var a = n(27378),
    s = n(60610),
    i = n(88868);
    const r = ({
      children: e,
      location: t
    }) =>{
      const n = (0, i.o_) (t).pathname !== t.pathname;
      return (0, s.$h) (n, `${ t.pathname }/1`),
      n ? null : a.createElement(a.Fragment, null, e)
    }
  },
  82116: (e, t, n) =>{
    n.r(t),
    n.d(t, {
    default:
      () =>c
    });
    var a = n(27378),
    s = n(42659),
    i = n(60610),
    r = n(88868),
    l = n(45212),
    o = n(785);
    const c = ({
      children: e,
      history: t
    }) =>{
      const n = (0, i.CC) (),
      [
        c
      ] = a.useState((() =>{
        const e = (0, s.__) (n.getState()),
        t = (0, s.np) (n.getState());
        return (0, l.O) (e, t)
      }));
      return a.useEffect((() =>{
        c && ((0, o.mh) (window.location.href, r.B6, 'soft'), t.replace(r.B6))
      }), [
      ]),
      c ? null : a.createElement(a.Fragment, null, e)
    }
  },
  86505: (e, t, n) =>{
    n.d(t, {
      Z: () =>u
    });
    var a = n(27378),
    s = n(89956),
    i = n(42659),
    r = n(60610),
    l = n(13840),
    o = n(87477),
    c = n(11811),
    d = n(97106);
    const u = ({
      secondsLeft: e
    }) =>{
      const t = (0, r.Fx) ((e=>[c.FF.GlobalPractice,
      c.FF.Lesson,
      c.FF.MistakesReview,
      c.FF.SectionPractice,
      c.FF.SkillPractice].includes(e.player.session.type))),
      n = (0, r.Fx) (i.$4),
      u = (0, r.Fx) ((e=>e.player.sessionParams.isFinalLevel)),
      p = (0, r.Fx) ((e=>e.player.session.type === c.FF.MistakesReview)),
      m = u,
      g = (0, r.Fx) ((e=>t ? e.player.currentInLessonStreak : 0)),
      h = (0, r.Fx) ((t=>(({
        player: e,
        secondsLeft: t,
        usePartialXp: n
      }) =>{
        const {
          confidence: a,
          session: s,
          session: {
            challenges: i
          },
          strength: r,
          useHearts: l
        }
        = e;
        return (0, o.l$) (s.type) ? a : void 0 !== t || n ? r : l || s.type === c.FF.Checkpoint ? i.filter((e=>{
          var t;
          return void 0 !== (null === (t = e.gradingResult) || void 0 === t ? void 0 : t.correct)
        })).length / i.length : r
      }) ({
        player: t.player,
        secondsLeft: e,
        usePartialXp: m
      }))),
      v = (0, r.Fx) ((e=>g > 1 && e.player.status === o.cS.Blaming && !e.player.session.challenges[e.player.currentIndex].skipped && (!m || n)));
      return a.createElement(s.Z, {
        checkpoints: m ? [
          {
            label: `${ d.zm }`,
            numerator: 0.5
          },
          {
            label: `${ d.Lb }`,
            numerator: 1
          }
        ] : void 0,
        color: u ? 'starling' : p ? 'humpback' : t ? (0, o.SB) (g) : 'owl',
        denominator: 1,
        height: 16,
        numerator: h,
        preloadSparkles: !t || p || u ? void 0 : (0, o.SB) (g + 1),
        sparkleOnIncrease: t,
        text: v ? (0, l.H8) (29391, {
          num: g
        }) : void 0
      })
    }
  },
  37575: (e, t, n) =>{
    n.d(t, {
      L: () =>o,
      Z: () =>p
    });
    var a = n(60042),
    s = n.n(a),
    i = n(27378),
    r = n(80254);
    const l = JSON.parse('{"ca0":["à","é","è","í","ï","ó","ò","ú","ü","ç","·"],"ca1":["À","É","È","Í","Ï","Ó","Ò","Ú","Ü","Ç","·"],"cs0":["á","č","ď","é","ě","í","ň","ó","ř","š","ť","ú","ů","ý","ž"],"cs1":["Á","Č","Ď","É","Ě","Í","Ň","Ó","Ř","Š","Ť","Ú","Ů","Ý","Ž"],"cy0":["â","ê","î","ô","ŵ","ŷ","ï"],"cy1":["Â","Ê","Î","Ô","Ŵ","Ŷ","Ï"],"da0":["æ","ø","å","é"],"da1":["Æ","Ø","Å","É"],"de0":["ä","ö","ü","ß"],"de1":["Ä","Ö","Ü","ß"],"eo0":["ĉ","ĝ","ĥ","ĵ","ŝ","ŭ"],"eo1":["Ĉ","Ĝ","Ĥ","Ĵ","Ŝ","Ŭ"],"es0":["á","é","í","ó","ú","ü","ñ","¿","¡"],"es1":["Á","É","Í","Ó","Ú","Ü","Ñ","¿","¡"],"fi0":["ä","ö"],"fi1":["Ä","Ö"],"fr0":["à","â","æ","è","é","ê","ë","î","ï","ô","ù","û","ü","ç","œ"],"fr1":["À","Â","Æ","È","É","Ê","Ë","Î","Ï","Ô","Ù","Û","Ü","Ç","Œ"],"ga0":["á","é","í","ó","ú"],"ga1":["Á","É","Í","Ó","Ú"],"gd0":["à","è","ì","ò","ù"],"gd1":["À","È","Ì","Ò","Ù"],"gn0":["ã","ẽ","ĩ","õ","ũ","ỹ","g̃","ñ","á","é","í","ó","ú","ý"],"gn1":["Ã","Ẽ","Ĩ","Õ","Ũ","Ỹ","G̃","Ñ","Á","É","Í","Ó","Ú","Ý"],"hu0":["á","é","í","ö","ó","ő","ü","ú","ű"],"hu1":["Á","É","Í","Ö","Ó","Ő","Ü","Ú","Ű"],"hv0":["ā","ē","ī","ō","ū","ȳ","ñ"],"hv1":["Ā","Ē","Ī","Ō","Ū","Ȳ","Ñ"],"hw0":["ā","ē","ī","ō","ū","ʻ"],"hw1":["Ā","Ē","Ī","Ō","Ū","ʻ"],"it0":["à","á","è","é","ì","í","ò","ó","ù","ú"],"it1":["À","Á","È","É","Ì","Í","Ò","Ó","Ù","Ú"],"nl-NL0":["á","é","è","ë","ï"],"nl-NL1":["Á","É","È","Ë","Ï"],"no-BO0":["æ","ø","å","é"],"no-BO1":["Æ","Ø","Å","É"],"nv0":["ł","á","ą","ą́","é","ę","ę́","í","į","į́","ó","ǫ","ǫ́","ú","ų","ų́"],"nv1":["Ł","Á","Ą","Ą́","É","Ę","Ę́","Í","Į","Į́","Ó","Ǫ","Ǫ́","Ú","Ų","Ų́"],"pl0":["ą","ć","ę","ł","ń","ó","ś","ź","ż"],"pl1":["Ą","Ć","Ę","Ł","Ń","Ó","Ś","Ź","Ż"],"pt0":["ã","á","â","à","é","ê","í","õ","ó","ô","ú","ü","ç"],"pt1":["Ã","Á","Â","À","É","Ê","Í","Õ","Ó","Ô","Ú","Ü","Ç"],"ro0":["ă","â","î","ș","ț"],"ro1":["Ă","Â","Î","Ș","Ț"],"sv0":["å","ä","ö","é"],"sv1":["Å","Ä","Ö","É"],"tr0":["ç","ğ","ı","i","ö","ş","ü"],"tr1":["Ç","Ğ","I","İ","Ö","Ş","Ü"]}'),
    o = r.XP(l).map((e=>e.slice(0, - 1)));
    var c;
    !function (e) {
      e[e.Lower = 0] = 'Lower',
      e[e.Upper = 1] = 'Upper'
    }(c || (c = {
    }));
    const d = ({
      character: e,
      disabled: t,
      onClick: n,
      type: a = 'submit'
    }) =>e ? i.createElement('button', {
      className: '_3f9XI _3HHNB _2A7uO _2gwtT _1nlVc _2fOC9 t5wFJ _3dtSu _25Cnc _3yAjN _3Ev3S _1figt',
      disabled: t,
      onClick: n,
      type: a
    }, e) : i.createElement('noscript', null);
    class u extends i.Component {
      constructor() {
        super (...arguments),
        this.state = {
          casing: c.Upper,
          isCasingSetByUser: !1
        },
        this.handleLetterClick = (e, t) =>{
          const {
            disabled: n,
            inputElement: a,
            onChange: s,
            value: i
          }
          = this.props;
          if (n) return;
          const r = i;
          if (a) {
            const n = null === a.selectionStart ? r.length : a.selectionStart,
            i = null === a.selectionEnd ? n : a.selectionEnd;
            s(e, `${ r.slice(0, n) }${ t }${ r.slice(i, r.length) }`),
            a.focus()
          } else s(e, `${ r }${ t }`)
        },
        this.handleShiftClick = e=>{
          this.props.disabled || this.setState({
            casing: '↑' === e ? c.Upper : c.Lower,
            isCasingSetByUser: !0
          })
        }
      }
      render() {
        var e;
        const {
          buttonType: t,
          className: n,
          disabled: a,
          language: r,
          value: u
        }
        = this.props;
        if (!o.includes(r)) return i.createElement('noscript', null);
        const p = (null === (e = this.state) || void 0 === e ? void 0 : e.isCasingSetByUser) ? this.state.casing : u.length ? c.Lower : c.Upper,
        m = l[`${ r }${ p }`].slice();
        return m.unshift(p === c.Upper ? '↓' : '↑'),
        i.createElement('div', {
          className: s() ('gcfYU', n)
        }, m.map(((e, n) =>i.createElement('div', {
          className: '_1OCDB',
          key: n
        }, i.createElement(d, {
          character: e,
          disabled: a,
          onClick: t=>'↓' === e || '↑' === e ? this.handleShiftClick(e) : this.handleLetterClick(t, e),
          type: t
        })))))
      }
    }
    const p = u
  },
  85321: (e, t, n) =>{
    n.d(t, {
      Z: () =>d
    });
    var a = n(27378),
    s = n(83936),
    i = n(21061),
    r = n(60610),
    l = n(35160),
    o = n(68564),
    c = function (e, t, n, a) {
      return new (n || (n = Promise)) ((function (s, i) {
        function r(e) {
          try {
            o(a.next(e))
          } catch (e) {
            i(e)
          }
        }
        function l(e) {
          try {
            o(a.throw(e))
          } catch (e) {
            i(e)
          }
        }
        function o(e) {
          var t;
          e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
            e(t)
          }))).then(r, l)
        }
        o((a = a.apply(e, t || [
        ])).next())
      }))
    };
    const d = () =>{
      const e = (0, r.tX) (),
      t = (0, r.Fx) (s.wc),
      n = !1 !== t && t < (0, i.Zo) (),
      d = (0, r.Fx) (s.yj),
      u = !1 !== d && d < (0, i.Zo) (),
      [
        p,
        m
      ] = a.useState();
      return a.useEffect((() =>{
        if (o.c) {
          let e;
          const t = () =>{
            m('granted' === (null == e ? void 0 : e.state))
          };
          return c(void 0, void 0, void 0, (function * () {
            try {
              e = yield navigator.permissions.query({
                name: 'microphone'
              }),
              e.addEventListener('change', t),
              t()
            } catch (e) {
            }
          })),
          () =>null == e ? void 0 : e.removeEventListener('change', t)
        }
      }), [
      ]),
      {
        hasMicrophonePermission: p,
        isListenEnabled: n,
        isSpeakEnabled: u,
        requestMicrophonePermission: () =>c(void 0, void 0, void 0, (function * () {
          try {
            (yield navigator.mediaDevices.getUserMedia({
              audio: !0
            })).getTracks().forEach((e=>e.stop()))
          } catch (t) {
            e({
              options: {
                name: l.tl.AllowMicrophone
              },
              type: 'TOGGLE_MODAL'
            })
          }
        })),
        resetListenDisabledTemporarily: () =>{
          e({
            type: 'ENABLE_LISTEN'
          })
        },
        resetSpeakDisabledTemporarily: () =>{
          e({
            type: 'ENABLE_SPEAK'
          })
        },
        showMicrophoneSetting: o.c
      }
    }
  },
  68826: (e, t, n) =>{
    n.d(t, {
      F: () =>m,
      K: () =>h
    });
    var a = n(80388),
    s = n(13840),
    i = n(74245),
    r = n(80254);
    class l {
      constructor(e) {
        this.items = e
      }
      [
        Symbol.iterator
      ]() {
        let e = r.MX(0, this.items.length);
        return {
          next: () =>(e = (e + 1) % this.items.length, {
            done: !1,
            value: this.items[e]
          })
        }
      }
    }
    const o = l,
    c = [
      14703,
      7361,
      21198,
      23458,
      4000,
      241,
      15499,
      4977,
      1999,
      2378,
      8526,
      23039,
      10747,
      13766
    ];
    const d = (() =>{
      const e = new o(['我们的使命是让学习有趣、有效、免费。',
      '在多邻国，学习爱尔兰语的人比母语为爱尔兰语的人多。',
      '在瑞典，多邻国上最受欢迎的语言是瑞典语（学习者多为难民）。',
      '每日 15 分钟就可以学习一种语言了，花 15 分钟刷社交网站又能学到什么呢？',
      '多邻国拥有超过三亿用户，是全世界最大的语言学习平台。',
      '无论你的水平是初级、中级或高级，在多邻国你总能找到适合自己的课程！',
      '小提示：每学完一个单元，写下能记得的短语，越多越好。',
      '多邻国根据全球三亿用户的学习数据和规律，不断优化并打造出色的教学方式。',
      '学语言可以变聪明哦！',
      '多邻国推崇潜意识学习法，让你在不知不觉中掌握语言规则。',
      '学习语言最大的窍门就是坚持，多邻国让你每天在快乐中进步！',
      '多邻国的课程基于国际语言标准设计。']) [Symbol.iterator]();
      return {
        next: () =>{
          const t = e.next();
          return Object.assign(Object.assign({
          }, t), {
            value: {
              text: t.value
            }
          })
        }
      }
    }) (),
    u = (() =>{
      const e = [
        new o(c.slice(0, 7)) [Symbol.iterator](),
        new o(c.slice(7)) [Symbol.iterator]()
      ];
      return {
        getResourceIds: () =>c,
        next: ({
          fromLanguage: t,
          learningLanguage: n,
          rowIndex: a
        }) =>{
          const i = Math.floor(a / 5) % e.length,
          r = e[i].next();
          return Object.assign(Object.assign({
          }, r), {
            value: {
              text: (0, s._i) (19999, {
                message: (0, s.H8) (r.value, {
                }, {
                  lang: n
                }),
                translation: (0, s.H8) (r.value, {
                }, {
                  lang: t
                })
              })
            }
          })
        }
      }
    }) (),
    p = (() =>{
      const e = new o([{
        id: 26751,
        trackingId: 'fun_fact_0'
      },
      {
        id: 8079,
        trackingId: 'fun_fact_1'
      },
      {
        id: 18902,
        trackingId: 'fun_fact_4'
      },
      {
        id: 18136,
        trackingId: 'fun_fact_5'
      },
      {
        id: 17842,
        trackingId: 'fun_fact_10'
      },
      {
        id: 2336,
        trackingId: 'fun_fact_12'
      },
      {
        id: 7587,
        trackingId: 'fun_fact_14'
      },
      {
        id: 9625,
        trackingId: 'fun_fact_21'
      },
      {
        id: 15292,
        trackingId: 'fun_fact_16'
      },
      {
        id: 8445,
        trackingId: 'fun_fact_17'
      },
      {
        id: 'Duolingo teaches as much as 4 semesters of university classes in half the time!',
        shouldUse: ({
          fromLanguage: e,
          learningLanguage: t
        }) =>'en' === e && ('es' === t || 'fr' === t),
        trackingId: 'fun_fact_22'
      }
      ]) [Symbol.iterator]();
      return {
        next: t=>{
          let n = e.next();
          for (; void 0 !== n.value.shouldUse && !n.value.shouldUse(t); ) n = e.next();
          return Object.assign(Object.assign({
          }, n), {
            value: {
              text: 'string' == typeof n.value.id ? n.value.id : (0, s._i) (n.value.id),
              trackingId: n.value.trackingId
            }
          })
        }
      }
    }) (),
    m = ({
      course: e,
      course: {
        fromLanguage: t,
        learningLanguage: n
      },
      isPlacementTest: a,
      skill: s,
      skills: r
    }) =>{
      if ((0, i.OK) (t) && (0, i.OK) (n) && g({
        fromLanguage: t,
        isPlacementTest: a,
        learningLanguage: n
      }) && s) {
        const a = e.skills.filter(((e, t) =>t < s.row && !e.some((e=>r[e].bonus)))),
        i = a.reduce(((e, t) =>e + t.length), 0) + e.skills[s.row].indexOf(s.id) < 3 ? 0 : a.length >= 5 ? 0.75 : 0.5;
        if (Math.random() < i) return u.next({
          fromLanguage: t,
          learningLanguage: n,
          rowIndex: a.length
        }).value
      }
      return v({
        fromLanguage: t,
        learningLanguage: n
      })
    },
    g = ({
      fromLanguage: e,
      isPlacementTest: t,
      learningLanguage: n
    }) =>{
      var a;
      if (t) return !1;
      if ('rtl' === (0, i.Ux) (e) || 'rtl' === (0, i.Ux) (n)) return !1;
      const s = Object.keys(null !== (a = window.duo.l10n.strings[n]) && void 0 !== a ? a : {
      });
      return u.getResourceIds().every((e=>s.includes(`${ e }`)))
    },
    h = ({
      learningLanguage: e
    }) =>{
      const t = u.getResourceIds(),
      n = (0, s.sS) (e, t);
      return () =>{
        return a = void 0,
        s = void 0,
        l = function * () {
          var a;
          if (yield n, e !== i.h9) for (const n of t) null === (a = window.duo.l10n.strings[e]) || void 0 === a || delete a[n]
        },
        new ((r = void 0) || (r = Promise)) ((function (e, t) {
          function n(e) {
            try {
              o(l.next(e))
            } catch (e) {
              t(e)
            }
          }
          function i(e) {
            try {
              o(l.throw(e))
            } catch (e) {
              t(e)
            }
          }
          function o(t) {
            var a;
            t.done ? e(t.value) : (a = t.value, a instanceof r ? a : new r((function (e) {
              e(a)
            }))).then(n, i)
          }
          o((l = l.apply(a, s || [
          ])).next())
        }));
        var a,
        s,
        r,
        l
      }
    },
    v = ({
      fromLanguage: e,
      learningLanguage: t
    }) =>_({
      fromLanguage: e
    }) ? d.next().value : p.next({
      fromLanguage: e,
      learningLanguage: t
    }).value,
    _ = ({
      fromLanguage: e
    }) =>(0, a.J9) () && 'zh' === e
  },
  45212: (e, t, n) =>{
    n.d(t, {
      a: () =>s,
      O: () =>i
    });
    var a = n(9249);
    const s = (e, t, n) =>{
      if (n.hasPlus) return;
      const s = t.shop.misc.skill_test_lingots_5;
      s && e(a.xD(s, 'store'))
    },
    i = (e, t) =>{
      if (t.hasPlus) return !1;
      const n = e.shop.misc.skill_test_lingots_5;
      return !(n && t.lingots >= n.price)
    }
  },
  30326: (e, t, n) =>{
    n.d(t, {
      l: () =>i
    });
    var a = n(74245);
    const s = {
      hi: 'aditi',
      ja: 'mizuki',
      ko: 'hyejin',
      zh: 'jiaoling'
    },
    i = (e, t) =>{
      const n = t.toLowerCase(),
      i = (0, a.D3) (e);
      return s[e] ? [
        'https://d7mj4aqfscim2.cloudfront.net/tts',
        i,
        s[e],
        'token',
        encodeURIComponent(n)
      ].join('/') : `https://s3.amazonaws.com/duolingo-data/tts/${ i }/token/${ n }`
    }
  },
  882: (e, t, n) =>{
    e.exports = n.p + 'images/a5a2ee66cff210ccdb79df7b1ae2ec85.svg'
  },
  1855: (e, t, n) =>{
    e.exports = n.p + 'images/d01837d668b592b96aa33ecce8459d77.svg'
  },
  75962: (e, t, n) =>{
    e.exports = n.p + 'images/crowns/6047910c37f2ea0b3dde35e78b31324b.svg'
  },
  14074: (e, t, n) =>{
    e.exports = n.p + 'images/d958e67f7f0425538efe27163f949bfe.svg'
  },
  33175: (e, t, n) =>{
    e.exports = n.p + 'images/3c7ccca32c32ffcc193e31bb0e3794e7.svg'
  },
  8835: (e, t, n) =>{
    e.exports = n.p + 'images/0c01e460533469dc9db51f9ae8beec98.svg'
  },
  45342: (e, t, n) =>{
    e.exports = n.p + 'images/5bc1dd6b146c2a46a564e72aed686c31.svg'
  },
  49473: (e, t, n) =>{
    e.exports = n.p + 'images/owls/f2806513861c6ce007530661f200c7a0.svg'
  },
  50794: (e, t, n) =>{
    e.exports = n.p + 'images/19274b858990906f73617c8a88058050.svg'
  },
  50483: (e, t, n) =>{
    e.exports = n.p + 'images/e45f8004a6ad113bc8b8782354ab6a55.svg'
  },
  20978: (e, t, n) =>{
    e.exports = n.p + 'images/dcf3451bf2c449fcdd9e0ec5206fbc96.svg'
  },
  34865: (e, t, n) =>{
    e.exports = n.p + 'images/f754af1bf4bf03790cc2a70fe3c5a245.svg'
  },
  69347: (e, t, n) =>{
    e.exports = n.p + 'images/179d5bc2e8e94948132990c37746bd15.svg'
  },
  59425: (e, t, n) =>{
    e.exports = n.p + 'images/3e328e1ef2b1935fbb8e4b1d30423949.svg'
  },
  12516: (e, t, n) =>{
    e.exports = n.p + 'images/043997ca38e0f046701150786edcdf5e.svg'
  },
  40193: (e, t, n) =>{
    e.exports = n.p + 'images/13f32c8c089121aab2c72a82fa8ec93d.svg'
  },
  90500: (e, t, n) =>{
    e.exports = n.p + 'images/398e4298a3b39ce566050e5c041949ef.svg'
  },
  28723: (e, t, n) =>{
    e.exports = n.p + 'images/ee80276a6691815f08f3ae12b3c4e1c3.svg'
  },
  14747: (e, t, n) =>{
    e.exports = n.p + 'images/d36b5e77c07ab3eb62cd90cefb96d50e.svg'
  },
  84774: (e, t, n) =>{
    e.exports = n.p + 'lottie/6897b216e6f372aecf56382b48fb7a9b.json'
  },
  14889: (e, t, n) =>{
    e.exports = n.p + 'lottie/681e3b6084394d09df2af15f9d12d51c.json'
  },
  99621: (e, t, n) =>{
    e.exports = n.p + 'lottie/7f1370b3f1d802951f0cab013ecb05c2.json'
  },
  59824: (e, t, n) =>{
    e.exports = n.p + 'lottie/6f4525b361ab4ef04c92af8f42cdcec6.json'
  }
}
]);
