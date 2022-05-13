/* eslint-disable */
const f = {
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
                          : (vertexWithMessage = formVertexWithMessage(vertex, f.MissingSpace), stack.push([vertexWithMessage, [vertexWithMessage.to, currLetterID]])));
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
                if (0 === typoOrWrong) vertexWithMessage = formVertexWithMessage(vertex, f.Accent),
                stack.push([vertexWithMessage,
                [
                  vertexWithMessage.to,
                  nextLetterID
                ]]);
                else if (1 === typoOrWrong) {
                  const o = this.isValidToken(currToken);
                  r = !this.allowTypoBlame || o && this.isTypingInLearningLanguage ? f.WrongWord : f.Typo;
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
          (vertexWithMessage = formVertexWithMessage(vertex, f.MissingWord), 
          this.isWhitespaceDelimited && (vertexWithMessage = this.spaceSkippingEdge(vertexWithMessage)), 
          stack.push([vertexWithMessage,
          [
            vertexWithMessage.to,
            currLetterID
          ]]), 

          currToken.length && (vertexWithMessage = formVertexWithMessage(vertex, f.WrongWord), 
          
          stack.push([vertexWithMessage,
          [
            vertexWithMessage.to,
            nextLetterID
          ]])))
        })),
        
        // Next vertices have all been pushed onto the curr stack. Return it.
        stack
      },

      this.edgeWeight = e=>void 0 === e.weight ? 0 : e.weight, this.isValidToken = e=>this.languageTokens.includes(e), 

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
    const grader = new w({
      accentedCharacterMap: e,
      allowTypoBlame: t,
      isTypingInLearningLanguage: s,
      isWhitespaceDelimited: g,
      language: d,
      submittedValue: l,
      vertices: m
    }),
    [v, f] = ((currState, endStateDetector, iterEdgesFunction, edgeWeightFunction, s) =>{
      const a = new (o()) (((e, t) =>e.weight - t.weight || e.tieBreaker - t.tieBreaker));
      a.push({
        path: [
        ],
        state: currState,
        tieBreaker: 0,
        weight: 0
      });
      const l = {
      };
      for (; a.size(); ) {
        const e = r.Fp(a.toArray().map((({
          tieBreaker: e
        }) =>e))) + 1,
        {
          path: o,
          state: s,
          weight: c
        }
        = a.pop();
        if (!l[`${ s }`]) {
          if (l[`${ s }`] = !0, c > 1) return [null,
          null];
          if (endStateDetector(s)) return [o,
          c];
          iterEdgesFunction(s).forEach((([t,
          n], r) =>{
            const l = edgeWeightFunction(t);
            if (l < 0) throw Error('Negative weight edge in solution DAG');
            a.push({
              path: [
                ...o,
                [
                  s,
                  t
                ]
              ],
              state: n,
              tieBreaker: e + r,
              weight: c + l
            })
          }))
        }
      }
      return [null,
      null]
    }) (grader.startState(), grader.isEndState, grader.iterEdges, grader.edgeWeight);
    if (null === v || null === f) return {
      correct: !1
    };
    const E = I(v);
    if (void 0 !== E) return {
      correct: !1,
      gradingMetadata: E
    };
    const S = f <= 0.5,
    T = {
    };
    let k = '';
    v.forEach((([{
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

  const accentcharactermap = {};
  const allowTypoBlame = false;
  const isTypingInLearningLanguage = true;
  const isWhitespaceDelimited = true;
  const language = 'de';
  const submittedValue = 'thanks';

  const testChallenge = {"grader":{"version":0,"vertices":[[{"to":1,"lenient":""}],[{"to":4,"lenient":"cheers","orig":"Cheers!"},{"to":4,"lenient":"ta","orig":"Ta!"},{"to":2,"lenient":"thank","orig":"Thank"},{"to":4,"lenient":"thanks","orig":"Thanks!"}],[{"to":3,"lenient":" "}],[{"to":4,"lenient":"you","orig":"you!"}],[]]}};
  
  const vertices = testChallenge.grader.vertices;
  const vertexCount = vertices.length;
  const submissionLength = submittedValue.length;

  const testGrader = new marking({accentcharactermap, allowTypoBlame, isTypingInLearningLanguage, isWhitespaceDelimited, language, submittedValue, vertices});
  const coords = [1, 0];
  const nextEdges = testGrader.iterEdges(coords);
  nextEdges.forEach(element => {
    console.log(`${JSON.stringify(element[0])}`)
  });