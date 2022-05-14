/* eslint-disable */
class heap {
  constructor(comparator) {
    let i,
    a,
    u,
    s,
    l,
    c,
    f,
    d,
    p,
    h,
    m,
    v,
    y,
    g,
    b;
    u = Math.floor,
    h = Math.min,
    a = function (e, t) {
      return e < t ? - 1 : e > t ? 1 : 0
    },
    p = function (e, t, n, r, o) {
      var i;
      if (null == n && (n = 0), null == o && (o = a), n < 0) throw new Error('lo must be non-negative');
      for (null == r && (r = e.length); n < r; ) o(t, e[i = u((n + r) / 2)]) < 0 ? r = i : n = i + 1;
      return [].splice.apply(e, [
        n,
        n - n
      ].concat(t)),
      t
    },
    c = function (e, t, n) {
      return null == n && (n = a),
      e.push(t),
      g(e, 0, e.length - 1, n)
    },
    l = function (e, t) {
      var n,
      r;
      return null == t && (t = a),
      n = e.pop(),
      e.length ? (r = e[0], e[0] = n, b(e, 0, t)) : r = n,
      r
    },
    d = function (e, t, n) {
      var r;
      return null == n && (n = a),
      r = e[0],
      e[0] = t,
      b(e, 0, n),
      r
    },
    f = function (e, t, n) {
      var r;
      return null == n && (n = a),
      e.length && n(e[0], t) < 0 && (t = (r = [
        e[0],
        t
      ]) [0], e[0] = r[1], b(e, 0, n)),
      t
    },
    s = function (e, t) {
      var n,
      r,
      o,
      i,
      s,
      l;
      for (null == t && (t = a), s = [
      ], r = 0, o = (i = function () {
        l = [
        ];
        for (var t = 0, n = u(e.length / 2); 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--) l.push(t);
        return l
      }.apply(this).reverse()).length; r < o; r++) n = i[r],
      s.push(b(e, n, t));
      return s
    },
    y = function (e, t, n) {
      var r;
      if (null == n && (n = a), - 1 !== (r = e.indexOf(t))) return g(e, 0, r, n),
      b(e, r, n)
    },
    m = function (e, t, n) {
      var r,
      o,
      i,
      u,
      l;
      if (null == n && (n = a), !(o = e.slice(0, t)).length) return o;
      for (s(o, n), i = 0, u = (l = e.slice(t)).length; i < u; i++) r = l[i],
      f(o, r, n);
      return o.sort(n).reverse()
    },
    v = function (e, t, n) {
      var r,
      o,
      i,
      u,
      c,
      f,
      d,
      m,
      v;
      if (null == n && (n = a), 10 * t <= e.length) {
        if (!(i = e.slice(0, t).sort(n)).length) return i;
        for (o = i[i.length - 1], u = 0, f = (d = e.slice(t)).length; u < f; u++) n(r = d[u], o) < 0 && (p(i, r, 0, null, n), i.pop(), o = i[i.length - 1]);
        return i
      }
      for (s(e, n), v = [
      ], c = 0, m = h(t, e.length); 0 <= m ? c < m : c > m; 0 <= m ? ++c : --c) v.push(l(e, n));
      return v
    },
    g = function (e, t, n, r) {
      var o,
      i,
      u;
      for (null == r && (r = a), o = e[n]; n > t && r(o, i = e[u = n - 1 >> 1]) < 0; ) e[n] = i,
      n = u;
      return e[n] = o
    },
    b = function (e, t, n) {
      var r,
      o,
      i,
      u,
      s;
      for (null == n && (n = a), o = e.length, s = t, i = e[t], r = 2 * t + 1; r < o; ) (u = r + 1) < o && !(n(e[r], e[u]) < 0) && (r = u),
      e[t] = e[r],
      r = 2 * (t = r) + 1;
      return e[t] = i,
      g(e, s, t, n)
    };

    this.cmp = null != comparator ? comparator : a;
    this.nodes = [];
    this.push = c;
    this.pop = l;
    this.replace = d;
    this.pushpop = f;
    this.heapify = s;
    this.updateItem = y;
    this.nlargest = m;
    this.nsmallest = v;
    this.prototype = {};
    this.prototype.push = function (e) {
      return c(this.nodes, e, this.cmp)
    };
    this.prototype.pop = function () {
      return l(this.nodes, this.cmp)
    };
    this.prototype.peek = function () {
      return this.nodes[0]
    };
    this.prototype.contains = function (e) {
      return - 1 !== this.nodes.indexOf(e)
    };
    this.prototype.replace = function (e) {
      return d(this.nodes, e, this.cmp)
    };
    this.prototype.pushpop = function (e) {
      return f(this.nodes, e, this.cmp)
    };
    this.prototype.heapify = function () {
      return s(this.nodes, this.cmp)
    };
    this.prototype.updateItem = function (e) {
      return y(this.nodes, e, this.cmp)
    };
    this.prototype.clear = function () {
      return this.nodes = [
      ]
    };
    this.prototype.empty = function () {
      return 0 === this.nodes.length
    };
    this.prototype.size = function () {
      return this.nodes.length
    };
    this.prototype.clone = function () {
      var t;
      return (t = new e).nodes = this.nodes.slice(0),
      t
    };
    this.prototype.toArray = function () {
      return this.nodes.slice(0)
    };
    this.prototype.insert =this.prototype.push;
    this.prototype.top =this.prototype.peek;
    this.prototype.front =this.prototype.peek;
    this.prototype.has =this.prototype.contains;
    this.prototype.copy =this.prototype.clone;
  }
};

function o(e, t) {
  var n, r, o;
  (function () {
    var i,
    a,
    u,
    s,
    l,
    c,
    f,
    d,
    p,
    h,
    m,
    v,
    y,
    g,
    b;
    u = Math.floor,
    h = Math.min,
    a = function (e, t) {
      return e < t ? - 1 : e > t ? 1 : 0
    },
    p = function (e, t, n, r, o) {
      var i;
      if (null == n && (n = 0), null == o && (o = a), n < 0) throw new Error('lo must be non-negative');
      for (null == r && (r = e.length); n < r; ) o(t, e[i = u((n + r) / 2)]) < 0 ? r = i : n = i + 1;
      return [].splice.apply(e, [
        n,
        n - n
      ].concat(t)),
      t
    },
    c = function (e, t, n) {
      return null == n && (n = a),
      e.push(t),
      g(e, 0, e.length - 1, n)
    },
    l = function (e, t) {
      var n,
      r;
      return null == t && (t = a),
      n = e.pop(),
      e.length ? (r = e[0], e[0] = n, b(e, 0, t)) : r = n,
      r
    },
    d = function (e, t, n) {
      var r;
      return null == n && (n = a),
      r = e[0],
      e[0] = t,
      b(e, 0, n),
      r
    },
    f = function (e, t, n) {
      var r;
      return null == n && (n = a),
      e.length && n(e[0], t) < 0 && (t = (r = [
        e[0],
        t
      ]) [0], e[0] = r[1], b(e, 0, n)),
      t
    },
    s = function (e, t) {
      var n,
      r,
      o,
      i,
      s,
      l;
      for (null == t && (t = a), s = [
      ], r = 0, o = (i = function () {
        l = [
        ];
        for (var t = 0, n = u(e.length / 2); 0 <= n ? t < n : t > n; 0 <= n ? t++ : t--) l.push(t);
        return l
      }.apply(this).reverse()).length; r < o; r++) n = i[r],
      s.push(b(e, n, t));
      return s
    },
    y = function (e, t, n) {
      var r;
      if (null == n && (n = a), - 1 !== (r = e.indexOf(t))) return g(e, 0, r, n),
      b(e, r, n)
    },
    m = function (e, t, n) {
      var r,
      o,
      i,
      u,
      l;
      if (null == n && (n = a), !(o = e.slice(0, t)).length) return o;
      for (s(o, n), i = 0, u = (l = e.slice(t)).length; i < u; i++) r = l[i],
      f(o, r, n);
      return o.sort(n).reverse()
    },
    v = function (e, t, n) {
      var r,
      o,
      i,
      u,
      c,
      f,
      d,
      m,
      v;
      if (null == n && (n = a), 10 * t <= e.length) {
        if (!(i = e.slice(0, t).sort(n)).length) return i;
        for (o = i[i.length - 1], u = 0, f = (d = e.slice(t)).length; u < f; u++) n(r = d[u], o) < 0 && (p(i, r, 0, null, n), i.pop(), o = i[i.length - 1]);
        return i
      }
      for (s(e, n), v = [
      ], c = 0, m = h(t, e.length); 0 <= m ? c < m : c > m; 0 <= m ? ++c : --c) v.push(l(e, n));
      return v
    },
    g = function (e, t, n, r) {
      var o,
      i,
      u;
      for (null == r && (r = a), o = e[n]; n > t && r(o, i = e[u = n - 1 >> 1]) < 0; ) e[n] = i,
      n = u;
      return e[n] = o
    },
    b = function (e, t, n) {
      var r,
      o,
      i,
      u,
      s;
      for (null == n && (n = a), o = e.length, s = t, i = e[t], r = 2 * t + 1; r < o; ) (u = r + 1) < o && !(n(e[r], e[u]) < 0) && (r = u),
      e[t] = e[r],
      r = 2 * (t = r) + 1;
      return e[t] = i,
      g(e, s, t, n)
    },
    i = function () {
      function e(e) {
        this.cmp = null != e ? e : a,
        this.nodes = [
        ]
      }
      return e.push = c,
      e.pop = l,
      e.replace = d,
      e.pushpop = f,
      e.heapify = s,
      e.updateItem = y,
      e.nlargest = m,
      e.nsmallest = v,
      e.prototype.push = function (e) {
        return c(this.nodes, e, this.cmp)
      },
      e.prototype.pop = function () {
        return l(this.nodes, this.cmp)
      },
      e.prototype.peek = function () {
        return this.nodes[0]
      },
      e.prototype.contains = function (e) {
        return - 1 !== this.nodes.indexOf(e)
      },
      e.prototype.replace = function (e) {
        return d(this.nodes, e, this.cmp)
      },
      e.prototype.pushpop = function (e) {
        return f(this.nodes, e, this.cmp)
      },
      e.prototype.heapify = function () {
        return s(this.nodes, this.cmp)
      },
      e.prototype.updateItem = function (e) {
        return y(this.nodes, e, this.cmp)
      },
      e.prototype.clear = function () {
        return this.nodes = [
        ]
      },
      e.prototype.empty = function () {
        return 0 === this.nodes.length
      },
      e.prototype.size = function () {
        return this.nodes.length
      },
      e.prototype.clone = function () {
        var t;
        return (t = new e).nodes = this.nodes.slice(0),
        t
      },
      e.prototype.toArray = function () {
        return this.nodes.slice(0)
      },
      e.prototype.insert = e.prototype.push,
      e.prototype.top = e.prototype.peek,
      e.prototype.front = e.prototype.peek,
      e.prototype.has = e.prototype.contains,
      e.prototype.copy = e.prototype.clone,
      e
    }(),
    
    r = [],
    
    void 0 === (o = 'function' == typeof (n = function () {return i;}) ? n.apply(t, r) : n) || (e.exports = o)
  }).call(this)
}
   
const weightLookup = {
  Accent: [
    'accent',
    1e-12
  ],
  ExtraSpace: [
    'extra_space',
    0.002
  ],
  MissingSpace: [
    'missing_space',
    0.001
  ],
  MissingWord: [
    'missing_word',
    0.6
  ],
  Typo: [
    'typo',
    0.000001
  ],
  WrongWord: [
    'wrong_word',
    0.6
  ]
};

class marking {
    constructor({
      accentedCharacterMap: e = {
      },
      allowTypoBlame: t,
      isTypingInLearningLanguage: n,
      isWhitespaceDelimited: i = true,
      language: o,
      submittedValue: r,
      vertices: verticesInput
    }) {
      // Constructor function
      if (this.startState = () => [0, 0], 
          this.isEndState = ([vertexCount, submissionLength]) =>
            vertexCount === this.vertices.length - 1 && submissionLength === this.submittedValue.length, 

            this.iterEdges = (coords) => {
              const stack = [], 

              formVertexWithMessage = (vertex, [errorType, n]) => 
                Object.assign(
                  Object.assign({}, vertex), 
                  {
                    type: errorType,
                    weight: n + (vertex.auto ? 0.0001 : 0)
                 }),
            
              [currVertexID, currLetterID] = coords;
              if (currLetterID > this.submittedValue.length) 
              {
                throw Error('"pos" must be less than the length of "submittedValue".');
              }
            
              const submissionSinceCurrPos = this.submittedValue.slice(currLetterID);
          
              return this.vertices[currVertexID].forEach(((vertex) => {
                let nextLetterID, vertexWithMessage;
                const lenient = vertex.lenient;

                if (!lenient.length) {
                  return void stack.push([vertex, [vertex.to, currLetterID]]);
                }

                if (' ' === lenient) {
                  return void (submissionSinceCurrPos.startsWith(' ') 
                        ? stack.push([vertex, [vertex.to, currLetterID + 1]]) 
                        : '' === submissionSinceCurrPos 
                          ? stack.push([vertex, [vertex.to, currLetterID]]) 
                          : (vertexWithMessage = formVertexWithMessage(vertex, weightLookup.MissingSpace), stack.push([vertexWithMessage, [vertexWithMessage.to, currLetterID]])));
                }
                
                if (this.isWhitespaceDelimited) {
                  let currTokenChecksOut = true, distanceSinceCurrToken = 0;
                  
                  lenient.split('').some(((lenientLetter) =>
                    {
                      // Move to the next non-space letter in submission
                      for (; distanceSinceCurrToken < submissionSinceCurrPos.length && ' ' === submissionSinceCurrPos[distanceSinceCurrToken]; ) 
                        distanceSinceCurrToken += 1;
                      // Check if there is no next non-space letter, or if the next non-space letter doesn't match lenientletter
                      // If either is true, stop checking
                      return distanceSinceCurrToken === submissionSinceCurrPos.length || lenientLetter !== submissionSinceCurrPos[distanceSinceCurrToken] ? (currTokenChecksOut = false, true) : (distanceSinceCurrToken += 1, false)
                    }));
                  
                  if (currTokenChecksOut) {
                    vertexWithMessage = vertex;
                    nextLetterID = currLetterID + distanceSinceCurrToken;
                    stack.push([vertexWithMessage, [vertexWithMessage.to, nextLetterID]]);
                  }
                }

                const firstBlankPos = submissionSinceCurrPos.indexOf(' '),
                currToken = firstBlankPos === -1 ? submissionSinceCurrPos : submissionSinceCurrPos.slice(0, firstBlankPos);
                // If the current token exactly matches lenient, continue checking
                if (nextLetterID = currLetterID + currToken.length, lenient === currToken) {
                  stack.push([vertex, [vertex.to, nextLetterID]]);
                }
                // No exact match found
                else if (this.isWhitespaceDelimited && currToken.length) {
                  const typoOrWrong = (
                    (lenient, token, accentCharactermap) => 
                    ((lenient, token, accentCharacterMap = ((lenient, token) => lenient === token)) => {
                      if (Math.abs(lenient.length - token.length) > 1) 
                        return 2;
                    
                      // Make sure token is shorter than lenient
                      if (token.length > lenient.length) {
                        ([lenient, token] = [token, lenient]);
                      }
                      
                      const lenientLength = lenient.length, tokenLength = token.length;
                    
                      let tokenLetterPos = 0;
                      // Advance token letter pointer until the end or the first mismatch
                      for (; tokenLetterPos < tokenLength && accentCharacterMap(lenient[tokenLetterPos], token[tokenLetterPos]); ) 
                        tokenLetterPos += 1;
                      
                      // If we've advanced to the end, check that token and lenient are the same
                      if (tokenLetterPos === tokenLength) {
                        return lenientLength > tokenLength ? 1 : 0;
                      }
                      
                      // If the first mismatch is found before the end, search right to left for the first mismatch
                      let tokenletterPosFromEnd = 0;
                      for (; tokenletterPosFromEnd < tokenLength && accentCharacterMap(lenient[lenientLength - 1 - tokenletterPosFromEnd], token[tokenLength - 1 - tokenletterPosFromEnd]); ) {
                        tokenletterPosFromEnd += 1;
                      }
                      
                      // If the two halves can make up lenient, proceed
                      if (tokenLetterPos + tokenletterPosFromEnd + 1 >= lenientLength)
                      {
                        return 1;
                      }

                      if (lenientLength === tokenLength &&
                          tokenLetterPos + 1 < lenientLength &&
                          accentCharacterMap(lenient[tokenLetterPos], token[tokenLetterPos + 1]) &&
                          accentCharacterMap(lenient[tokenLetterPos + 1], token[tokenLetterPos]) &
                          tokenLetterPos + tokenletterPosFromEnd + 2 === lenientLength) {
                            return 1;
                          }
                        return 2;
                        })

                      (lenient, token, ((e, t) =>{
                        var i,
                        o;
                        return (null !== (i = accentCharactermap[e]) && void 0 !== i ? i : e) === (null !== (o = accentCharactermap[t]) && void 0 !== o ? o : t)
                      }))) (lenient, currToken, this.accentedCharacterMap);
                
                // Continuing the no-exact-match scenario. Is it an accent issue/typo, or incorrect?
                if (0 === typoOrWrong) vertexWithMessage = formVertexWithMessage(vertex, weightLookup.Accent),
                stack.push([vertexWithMessage,
                [
                  vertexWithMessage.to,
                  nextLetterID
                ]]);
                else if (1 === typoOrWrong) {
                  const o = this.isValidToken(currToken);
                  r = !this.allowTypoBlame || o && this.isTypingInLearningLanguage ? weightLookup.WrongWord : weightLookup.Typo;
                  return vertexWithMessage = formVertexWithMessage(vertex, r),
                  void stack.push([vertexWithMessage,
                  [
                    vertexWithMessage.to,
                    nextLetterID
                  ]])
                }
              }

          currToken.startsWith(lenient) && stack.push([vertex,
          [
            vertex.to,
            currLetterID + lenient.length
          ]]),

          !this.isWhitespaceDelimited && currToken.startsWith(lenient) || 
          (vertexWithMessage = formVertexWithMessage(vertex, weightLookup.MissingWord), 
          this.isWhitespaceDelimited && (vertexWithMessage = this.spaceSkippingEdge(vertexWithMessage)), 
          stack.push([vertexWithMessage,
          [
            vertexWithMessage.to,
            currLetterID
          ]]), 

          currToken.length && (vertexWithMessage = formVertexWithMessage(vertex, weightLookup.WrongWord), 
          
          stack.push([vertexWithMessage,
          [
            vertexWithMessage.to,
            nextLetterID
          ]])))
        })),
        
        // Next vertices have all been pushed onto the curr stack. Return it.
        stack
      },

      this.edgeWeight = e =>void 0 === e.weight ? 0 : e.weight, 
      
      this.isValidToken = e=>this.languageTokens.includes(e), 

      this.spaceSkippingEdge = e => {
        const t = Object.assign({
        }, e),
        n = this.vertices[e.to];

        return 1 === n.length && ' ' === n[0].lenient && (t.to = n[0].to, t.lenient += ' ', 'orig' in t && (t.orig += ' ')),
        t
      }, 

      vertices[vertices.length - 1].length) 
      throw Error('Malformed vertices array: Last element is not empty.');

      this.accentedCharacterMap = e,
      this.isWhitespaceDelimited = i,
      this.isTypingInLearningLanguage = n,
      this.languageTokens = o,
      this.submittedValue = r,
      this.vertices = verticesInput,
      this.allowTypoBlame = t
    }
  };

  const T = ({
    accentedCharacterMap: e,
    allowTypoBlame: t,
    compiledNormalizationData: n,
    gradingData: i,
    isTypingInLearningLanguage: s,
    submittedValue: a
  }) => {
    // let l = b(n, a);
    let l = submittedValue;
    const {
      language: d,
      version: p,
      vertices: m
    }
    = i;
    if (0 !== p) throw Error('Client-side grading version incompatible');
    let g = i.whitespaceDelimited;
    void 0 === g && (g = !0);
    const h = /\s+/;
    !g && h.exec(l) && 'experiment' === (0, u.j6) ('learning_fix_whitespace_grading', void 0) && (l = l.replace(h, ''));

    const grader = new marking({
      accentedCharacterMap: e,
      allowTypoBlame: t,
      isTypingInLearningLanguage: s,
      isWhitespaceDelimited: g,
      language: d,
      submittedValue: l,
      vertices: m
    });
    
    const [finalPath, finalWeight] = ((currState, endStateDetector, iterEdgesFunction, edgeWeightFunction, s) =>{
      // const a = new (o()) (((e, t) =>e.weight - t.weight || e.tieBreaker - t.tieBreaker));
      const heap = new heap((e, t) =>e.weight - t.weight || e.tieBreaker - t.tieBreaker);
      heap.push({
        path: [
        ],
        state: currState,
        tieBreaker: 0,
        weight: 0
      });
      const l = {
      };

      // Dijkstra?
      for (; heap.size(); ) {
        const e = r.Fp(heap.toArray().map((({
          tieBreaker: e
        }) =>e))) + 1,
        {
          path: currPath,
          state: currState,
          weight: currWeight
        }
        = heap.pop();
        if (!l[`${ currState }`]) {
          if (l[`${ currState }`] = true, currWeight > 1) {
            return [null, null];
          }
          
          if (endStateDetector(currState)) {
            return [currPath, currWeight];
          }

          // Run iteredges and get a list of possible next vertices.
          iterEdgesFunction(currState).forEach((([vertex, nextState], newTieBreaker) =>{
            const l = edgeWeightFunction(vertex);
            if (l < 0) {
              throw Error('Negative weight edge in solution DAG');
            }

            heap.push({
              path: [
                ...currPath,
                [
                  currState,
                  vertex
                ]
              ],
              state: nextState,
              tieBreaker: e + newTieBreaker,
              weight: currWeight + l
            })
          }))
        }
      };

      // Heap exhausted without reaching end. Return false.
      return [null, null];
    }) (grader.startState(), grader.isEndState, grader.iterEdges, grader.edgeWeight);

    if (null === finalPath || null === finalWeight) return {
      correct: false,
    };
    
    const E = I(finalPath);
    if (void false !== E) return {
      correct: false,
      gradingMetadata: E
    };

    const S = finalWeight <= 0.5,
    T = {
    };
    let k = '';

    finalPath.forEach((([{
    },
    e]) =>{
      var t;
      let n = e.type;
      n = void 0 === n ? 'correct' : n;
      let i = e.orig;
      if (i = void 0 === i ? e.lenient : i, 'correct' !== n) {
        const e = k.length;
        let o = e + i.length;
        n === c.Oj.MissingWord && i.endsWith(' ') && (o -= 1);
        const r = null !== (t = T[n]) && void 0 !== t ? t : [
        ];
        r.push([e,
        o]),
        T[n] = r
      }
      k += i
    }));
    
    const R = r.xb(T) ? void 0 : r.Fp(r.XP(T), (e=>y[e])),
    C = R ? T[R] : void 0;
    return {
      blameType: R,
      closestSolution: k,
      correct: S,
      highlights: C
    }
  };

  I = e=>{
    const t = e.filter((([{
    },
    e]) =>e.lenient.trim().length > 0)).map((([{
    },
    e]) =>e.metadata)),
    n = t.filter((e=>void 0 !== e));
    if (0 !== n.length && n.length === t.length) return n[0].filter((e=>n.every((t=>t.some((t=>r.Xy(e, t)))))))
  };

  const accentcharactermap = JSON.parse('{"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","×":"x","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","÷":"/","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ș":"S","ș":"s","Ț":"T","ț":"t","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ό":"Ο","Ύ":"Υ","Ώ":"Ω","ΐ":"ι","Ϊ":"Ι","Ϋ":"Υ","ά":"α","έ":"ε","ή":"η","ί":"ι","ΰ":"υ","ϊ":"ι","ϋ":"υ","ό":"ο","ύ":"υ","ώ":"ω","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}');;
  const allowTypoBlame = false;
  const isTypingInLearningLanguage = true;
  const isWhitespaceDelimited = true;
  const language = 'de';
  const submittedValue = 'than,,ks';
  
  const testChallenge = {"grader":{"version":0,"vertices":[[{"to":1,"lenient":""}],[{"to":4,"lenient":"cheers","orig":"Cheers!"},{"to":4,"lenient":"ta","orig":"Ta!"},{"to":2,"lenient":"thank","orig":"Thank"},{"to":4,"lenient":"thanks","orig":"Thanks!"}],[{"to":3,"lenient":" "}],[{"to":4,"lenient":"you","orig":"you!"}],[]]}};
  const vertices = testChallenge.grader.vertices;
  const vertexCount = vertices.length;
  const submissionLength = submittedValue.length;

  const normalizationData = JSON.parse('[["[’\\\\\\"´‘`′ʻ́̀´]","\'"],["[\\\\[\\\\]\\\\{\\\\}\\\\<\\\\>\\\\)\\\\(\\\\^\\\\~\\\\_\\\\-\\\\‐\\\\;\\\\!\\\\¡\\\\|\\\\?\\\\¿\\\\/\\\\·\\\\\\"\\\\«\\\\»\\\\“\\\\”\\\\„\\\\–\\\\:\\\\,\\\\.\\\\▶\\\\*\\\\+\\\\’\\\\。\\\\，\\\\、\\\\､\\\\‚\\\\｡\\\\；\\\\：\\\\「\\\\」\\\\『\\\\』\\\\（\\\\）\\\\？\\\\！\\\\─\\\\…\\\\《\\\\》\\\\〈\\\\〉\\\\．\\\\～\\\\،\\\\؟\\\\।\\\\—\\\\‧]",""],["\\\\s+"," "],["^ | $",""]]');
  const gradingData = {
    language: 'de',
    version: 0,
    vertices: vertices,
  };


  const testGrader = new marking({accentcharactermap, allowTypoBlame, isTypingInLearningLanguage, isWhitespaceDelimited, language, submittedValue, vertices});
  const coords = [1, 0];
  const nextEdges = testGrader.iterEdges(coords);
  nextEdges.forEach(element => {
    console.log(`${JSON.stringify(element)}`)
  });