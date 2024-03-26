{{Short description|Mathematical entity to describe the probability of each possible measurement on a system}}
{{Quantum mechanics|cTopic=Fundamental concepts}}
In [[quantum physics]], a '''quantum state''' is a mathematical entity that embodies the knowledge of a quantum system. [[Quantum mechanics]] specifies the construction, evolution, and [[measurement in quantum mechanics|measurement]] of a quantum state. The result is a quantum-mechanical prediction for the system represented by the state. Knowledge of the quantum state, and the quantum mechanical rules for the system's evolution in time, exhausts all that can be known about a quantum system.

Quantum states may be defined differently for different kinds of systems or problems. Two broad categories are
* [[wave functions]] describing quantum systems using position or momentum variables and
* the more abstract [[#Formalism in quantum physics|vector quantum states]].
Historical, educational, and application-focused problems typically feature wave functions; modern professional physics uses the abstract vector states. In both categories, quantum states divide into [[#Pure state|pure]] versus [[#Mixed state|mixed states]], or into [[coherent state]]s and incoherent states. Categories with special properties include [[stationary state]]s for time independence and [[quantum vacuum state]]s in [[quantum field theory]].

== From the states of classical mechanics ==
As a tool for physics, quantum states grew out of states in [[classical mechanics]]. A classical dynamical state consists of a set of dynamical variables with well-defined [[real numbers|real]] values at each instant of time.<ref name=messiah />{{rp|3}} For example, the state of a cannon ball would consist of its position and velocity. The state values evolve under equations of motion and thus remain strictly determined. If we know the position of a cannon and the exit velocity of its projectiles, then we can use equations containing the force of gravity to predict the trajectory of a cannon ball precisely.

Similarly, quantum states consist of sets of dynamical variables that evolve under equations of motion. However, the values derived from quantum states are [[complex numbers]], quantized, limited by [[uncertainty principle|uncertainty relations]],<ref name=messiah>{{Cite book|last=Messiah|first=Albert|title=Quantum Mechanics|date=1966|publisher=North Holland, John Wiley & Sons|isbn=0486409244|language=en}}</ref>{{rp|159}} and only provide a [[probability distribution]] for the outcomes for a system. These constraints alter the nature of quantum dynamic variables. For example, the quantum state of an electron in a [[double-slit experiment]] would consist of complex values over the detection region and, when squared, only predict the probability distribution of electron counts across the detector.

== Role in quantum mechanics ==
The process of describing a quantum system with quantum mechanics begins with identifying a set of variables defining the quantum state of the system.<ref name=messiah />{{rp|204}}  The set will contain [[Observable#Compatible and incompatible of observables in quantum mechanics|compatible and incompatible variables]]. Simultaneous measurement of a complete set of compatible variables prepares the system in a unique state. The state then evolves deterministically according to the [[equations of motion]]. Subsequent measurement of the state produces a sample from a probability distribution predicted by the quantum mechanical [[Operator (physics)#Operators in quantum mechanics|operator]] corresponding to the measurement.

The fundamentally statistical or probabilisitic nature of quantum measurements changes the role of quantum states in quantum mechanics compared to classical states in classical mechanics. In classical mechanics the initial state of one or more bodies is measured; the state evolves according to the equations of motion; measurements of the final state are compared to predictions. In quantum mechanics, ensembles of identically prepared quantum states evolve according to the equations of motion and many repeated measurements are compared to predicted probability distributions.<ref name=messiah />{{rp|204}}

== Measurements ==
<!-- summary only -->
{{main | Measurement in quantum mechanics}}

Measurements, a macroscopic operation on a quantum state, filter the state.<ref name=messiah />{{rp|196}} Whatever the input quantum state might be, repeated identical measurements give consistent values. For this reason, measurements 'prepare' quantum states for experiments, placing the system in a partially defined state. Subsequent measurements may either further prepare the system – these are compatible measurements – or it may alter the state, redefining it – these are called incompatible or complementary measurements. For example, we may measure the momentum of a state along the <math>x</math> axis any number of times and get the same result, but if we measure the position after once measuring the momentum, subsequent measurements of momentum are changed. The quantum state appears unavoidably altered by incompatible measurements. This is known as the [[uncertainty principle]].

== Eigenstates and pure states ==
{{further|Eigenvalues and eigenvectors}}
{{anchor| Eigenstate}}
<!-- no equations or "observables" in this section -->
The quantum state after a measurement is in an '''eigenstate''' corresponding to that measurement and the value measured.<ref name=messiah />{{rp|202}} Other aspects of the state may be unknown. Repeating the measurement will not alter the state. In some cases, compatible measurements can further refine the state, causing it to be an eigenstate corresponding to all these measurements.<ref>{{cite book |first1=Claude |last1=Cohen-Tannoudji |first2=Bernard |last2=Diu |first3=Franck |last3=Laloë |title=Quantum Mechanics |pages=231–235 |publisher=Wiley |date=1977}}</ref> A full set of compatible measurements produces a '''pure state'''.  Any state that is not pure is called a '''mixed state'''<ref name=messiah />{{rp|204}} (See [[#Mixed_states_of_wave_functions|mixed states]] below).

The eigenstate solutions to the [[Schrödinger equation]] can be formed into pure states.  Experiments rarely produce pure states. Therefore statistical mixtures of solutions must be compared to experiments.<ref name=messiah />{{rp|204}}

== Representations ==
<!-- a short summary to foreshadow the main sections below; no details here -->
The same physical quantum state can be expressed mathematically in different ways called '''representations'''.<ref name=messiah /> The position wave function is one representation often seen first in introductions to quantum mechanics. The equivalent momentum wave function is another wave function based representation. Representations are analogous to coordinate systems<ref name=messiah />{{rp|244}} or similar mathematical devices like [[parametric equation]]s. Selecting a representation will make some aspects of a problem easier at the cost of making other things difficult.

In formal quantum mechanics (see [[#Formalism_in_quantum_physics|below]]) the theory develops in terms of abstract '[[vector space]]', avoiding any particular representation. This allows many elegant concepts of quantum mechanics to be expressed and to be applied even in cases where no classical analog exists.<ref name=messiah />{{rp|244}}

==Wave function representations==
{{main|Wave function}}
[[Wave function]]s represent quantum states, particularly when they are  functions of position or of [[momentum]].  Historically definitions of quantum states used wavefunctions before the more formal methods were developed.<ref name="Whittaker">{{cite book | last=Whittaker | first=Sir Edmund | title=A History of the Theories of Aether and Electricity | publisher=Courier Dover Publications | date=1989-01-01 | isbn=0-486-26126-3 | volume=2 |  page=87}}</ref>{{rp|268}} The wave function is a complex-valued function of any complete set of commuting or compatible [[degrees of freedom]]. For example, one set could be the <math>x,y,z</math> spatial coordinates of an electron. 
Preparing a system by measuring the complete set of compatible  produces a '''pure quantum state'''. More common, incomplete preparation produces a '''mixed quantum state'''. Wave function solutions of [[Schrödinger equation|Schrödinger's equations of motion]] for operators corresponding to measurements can readily be expressed as pure states; they must be combined with statistical weights matching experimental preparation to compute the expected probability distribution.<ref name=messiah />{{rp|205}}

==={{vanchor|Pure state}}s of wave functions===
<!-- This Anchor tag serves to provide a permanent target for incoming section links. Please do not remove it, nor modify it, except to add another appropriate anchor.  If you modify the section title, please anchor the old title. It is always best to anchor an old section header that has been changed so that links to it will not be broken. See [[Template:Anchor]] for details. This text is produced using {{subst:Anchor comment}} -->
[[File:Hydrogen Density Plots.png|thumb|450px|[[Probability density|Probability densities]] for the electron of a hydrogen atom in different quantum states.]]
Numerical or analytic solutions in quantum mechanics can be expressed as '''pure states'''. These solution states, called [[Introduction to eigenstates|eigenstates]], are labeled with quantized values, typically [[quantum numbers]].
For example, when dealing with the [[Spectrum#Energy spectrum|energy spectrum]] of the [[electron]] in a [[hydrogen atom]], the relevant pure states are identified by the [[principal quantum number]] {{math|''n''}}, the [[angular momentum quantum number]] {{math|''ℓ''}}, the [[magnetic quantum number]] {{math|''m''}}, and the [[Spin (physics)|spin]] ''z''-component {{math|''s''<sub>''z''</sub>}}. For another example, if the spin of an electron is measured in any direction, e.g. with a [[Stern–Gerlach experiment]], there are two possible results: up or down. A pure state here is represented by a two-dimensional [[Complex number|complex]] vector <math>(\alpha, \beta)</math>, with a length of one; that is, with
<math display="block">|\alpha|^2 + |\beta|^2 = 1,</math>
where <math>|\alpha|</math> and <math>|\beta|</math> are the [[Complex number#Modulus and argument|absolute values]] of <math>\alpha</math> and <math>\beta</math>.

The [[mathematical formulation of quantum mechanics|postulates of quantum mechanics]] state that pure states, at a given time {{math|'' t''}},  correspond to [[vector space|vectors]] in a [[Separable space|separable]] [[complex number|complex]] [[Hilbert space#In quantum mechanics|Hilbert space]], while each measurable physical quantity (such as the energy or momentum of a [[particle]]) is associated with a mathematical [[Operator (physics)|operator]] called the '''[[observable]]'''. The operator serves as a [[Linear mapping|linear function]] that acts on the states of the system. The [[eigenvalue]]s of the operator correspond to the possible values of the observable. For example, it is possible to observe a particle with a momentum of 1&nbsp;kg&sdot;m/s if and only if one of the eigenvalues of the momentum operator is 1&nbsp;kg&sdot;m/s. The corresponding [[eigenvector]] (which physicists call an '''eigenstate''') with eigenvalue 1&nbsp;kg&sdot;m/s would be a quantum state with a definite, well-defined value of momentum of 1&nbsp;kg&sdot;m/s, with no [[Heisenberg uncertainty principle|quantum uncertainty]]. If its momentum were measured, the result is guaranteed to be 1&nbsp;kg&sdot;m/s.

On the other hand, a system in a superposition of multiple different eigenstates ''does'' in general have quantum uncertainty for the given observable. Using [[bra–ket notation]],  this [[linear combination]] of eigenstates can be represented as:
<math display="block">|\Psi(t)\rangle = \sum_n C_n(t) |\Phi_n\rang.</math>
The coefficient that corresponds to a particular state in the linear combination is a complex number, thus allowing interference effects between states. The coefficients are time dependent. How a quantum state changes in time is governed by the [[Hamiltonian (quantum mechanics)#Schrödinger equation|time evolution operator]].

=== Mixed states of wave functions===
A mixed quantum state corresponds to a probabilistic mixture of pure states; however, different distributions of pure states can generate equivalent (i.e., physically indistinguishable) mixed states. A [[mixture distribution|mixture]] of quantum states is again a quantum state.

A mixed state for electron spins, in the density-matrix formulation, has the structure of a <math>2 \times 2</math> matrix that is [[Hermitian matrix|Hermitian]] and positive semi-definite, and has [[Trace (linear algebra)|trace]] 1.<ref name="rieffel">{{Cite book|title-link= Quantum Computing: A Gentle Introduction |title=Quantum Computing: A Gentle Introduction| last1=Rieffel|first1=Eleanor G.| last2=Polak|first2=Wolfgang H.| date=2011-03-04| publisher=MIT Press| isbn=978-0-262-01506-6| language=en| author-link=Eleanor Rieffel}}</ref> A more complicated case is given (in [[bra–ket notation]]) by the [[singlet state]], which exemplifies [[quantum entanglement]]:
<math display="block">\left|\psi\right\rang = \frac{1}{\sqrt{2}}\bigl(\left|\uparrow\downarrow\right\rang - \left|\downarrow\uparrow\right\rang \bigr),</math>
which involves [[quantum superposition|superposition]] of joint spin states for two particles with spin {{frac|1|2}}. The singlet state satisfies the property that if the particles' spins are measured along the same direction then either the spin of the first particle is observed up and the spin of the second particle is observed down, or the first one is observed down and the second one is observed up, both possibilities occurring with equal probability.

A pure quantum state can be represented by a [[ray (quantum theory)|ray]] in a [[projective Hilbert space]] over the [[complex number]]s, while mixed states are represented by [[density matrix|density matrices]], which are [[Definiteness of a matrix|positive semidefinite operator]]s that act on Hilbert spaces.<ref name="holevo">{{Cite book|last=Holevo |first=Alexander S. |author-link=Alexander Holevo |title=Statistical Structure of Quantum Theory |publisher=Springer |series=Lecture Notes in Physics |year=2001 |isbn=3-540-42082-7|oclc=318268606}}</ref><ref name="peres">{{Cite book| last=Peres|first=Asher|title=[[Quantum Theory: Concepts and Methods]]| publisher=Kluwer Academic Publishers| year=1995| isbn=0-7923-2549-4|author-link=Asher Peres}}</ref>
The [[Schrödinger–HJW theorem]] classifies the multitude of ways to write a given mixed state as a [[convex combination]] of pure states.<ref>{{Cite journal |last=Kirkpatrick |first=K. A. |date=February 2006 |title=The Schrödinger-HJW Theorem |journal=[[Foundations of Physics Letters]] |volume=19 |issue=1 |pages=95–102 |doi=10.1007/s10702-006-1852-1 |issn=0894-9875 |arxiv=quant-ph/0305068 |bibcode=2006FoPhL..19...95K |s2cid=15995449 }}</ref> 
Before a particular [[measurement in quantum mechanics|measurement]] is performed on a quantum system, the theory gives only a [[probability distribution]] for the outcome, and the form that this distribution takes is completely determined by the quantum state and the [[linear operator]]s describing the measurement. Probability distributions for different measurements exhibit tradeoffs exemplified by the [[uncertainty principle]]: a state that implies a narrow spread of possible outcomes for one experiment necessarily implies a wide spread of possible outcomes for another.

Statistical mixtures of states are a different type of linear combination. A statistical mixture of states is a [[Quantum statistical mechanics|statistical ensemble]] of independent systems. Statistical mixtures represent the degree of knowledge whilst the uncertainty within quantum mechanics is fundamental. Mathematically, a statistical mixture is not a combination using complex coefficients, but rather a combination using real-valued, positive probabilities of different states <math>\Phi_n</math>. A number <math>P_n</math> represents the probability of a randomly selected system being in the state <math>\Phi_n</math>. Unlike the linear combination case each system is in a definite eigenstate.<ref>{{cite web| url=http://xbeams.chem.yale.edu/~batista/vaa/node4.html |title=Statistical Mixture of States |access-date=November 9, 2021 |url-status=dead |archive-url=https://web.archive.org/web/20190923005726/xbeams.chem.yale.edu/~batista/vaa/node4.html |archive-date=September 23, 2019 }}</ref><ref>{{cite web|url=http://electron6.phys.utk.edu/qm1/modules/m6/statistical.htm |title=The Density Matrix |access-date=January 24, 2012 |url-status=dead |archive-url=https://web.archive.org/web/20120115220044/http://electron6.phys.utk.edu/qm1/modules/m6/statistical.htm |archive-date=January 15, 2012 }}</ref>

The expectation value <math>{\langle A \rangle}_\sigma</math> of an observable {{math|''A''}} is a statistical mean of measured values of the observable. It is this mean, and the distribution of probabilities, that is predicted by physical theories.

There is no state that is simultaneously an eigenstate for ''all'' observables. For example, we cannot prepare a state such that both the position measurement {{math|''Q''(''t'')}} and the momentum measurement {{math|''P''(''t'')}} (at the same time {{mvar|t}}) are known exactly; at least one of them will have a range of possible values.{{efn|To avoid misunderstandings: Here we mean that {{math|''Q''(''t'')}} and {{math|''P''(''t'')}} are measured in the same state, but ''not'' in the same run of the experiment.}} This is the content of the [[Uncertainty principle|Heisenberg uncertainty relation]].

Moreover, in contrast to classical mechanics, it is unavoidable that ''performing a measurement on the system generally changes its state''.<ref>[[Werner Heisenberg|Heisenberg, W.]] (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik, ''Z. Phys.'' '''43''': 172–198. Translation as [https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19840008978.pdf 'The actual content of quantum theoretical kinematics and mechanics']. Also translated as 'The physical content of quantum kinematics and mechanics' at pp.&nbsp;62–84 by editors John Wheeler and Wojciech Zurek, in ''Quantum Theory and Measurement'' (1983), Princeton University Press, Princeton NJ.</ref><ref>[[Niels Bohr|Bohr, N.]] (1927/1928). The quantum postulate and the recent development of atomic theory, [http://www.nature.com/nature/journal/v121/n3050/abs/121580a0.html ''Nature'' Supplement April 14 1928, '''121''': 580–590].</ref>{{efn|{{named ref|name=Dirac (1958)}} p.&nbsp;4: [https://archive.org/stream/DiracPrinciplesOfQuantumMechanics/Dirac%20-%20Principles%20of%20quantum%20mechanics#page/n15/mode/1up "If a system is small, we cannot observe it without producing a serious disturbance."]}} More precisely: After measuring an observable ''A'', the system will be in an eigenstate of ''A''; thus the state has changed, unless the system was already in that eigenstate. This expresses a kind of logical consistency: If we measure ''A'' twice in the same run of the experiment, the measurements being directly consecutive in time,{{efn|i.e. separated by a zero delay. One can think of it as stopping the time, then making the two measurements one after the other, then resuming the time. Thus, the measurements occurred at the same time, but it is still possible to tell which was first.}} then they will produce the same results. This has some strange consequences, however, as follows.

Consider two [[incompatible observables]], {{math|''A''}} and {{math|''B''}}, where {{math|''A''}} corresponds to a measurement earlier in time than {{math|''B''}}.{{efn|1=For concreteness' sake, suppose that {{math|1=''A'' = ''Q''(''t''<sub>1</sub>)}} and {{math|1=''B'' = ''P''(''t''<sub>2</sub>)}} in the above example, with {{math|''t''<sub>2</sub> > ''t''<sub>1</sub> > 0}}.}} 
Suppose that the system is in an eigenstate of {{math|''B''}} at the experiment's beginning. If we measure only {{math|''B''}}, all runs of the experiment will yield the same result.
If we measure first {{math|''A''}} and then {{math|''B''}} in the same run of the experiment, the system will transfer to an eigenstate of {{math|''A''}} after the first measurement, and we will generally notice that the results of {{math|''B''}} are statistical. Thus: ''Quantum mechanical measurements influence one another'', and the order in which they are performed is important.

Another feature of quantum states becomes relevant if we consider a physical system that consists of multiple subsystems; for example, an experiment with two particles rather than one. Quantum physics allows for certain states, called ''entangled states'', that show certain statistical correlations between measurements on the two particles which cannot be explained by classical theory. For details, see [[Quantum entanglement|entanglement]]. These entangled states lead to experimentally testable properties ([[Bell's theorem]])
that allow us to distinguish between quantum theory and alternative classical (non-quantum) models.

===Schrödinger picture vs. Heisenberg picture===

One can take the observables to be dependent on time, while the state ''σ'' was fixed once at the beginning of the experiment. This approach is called the [[Heisenberg picture]]. (This approach was taken in the later part of the discussion above, with time-varying observables {{math|''P''(''t'')}}, {{math|''Q''(''t'')}}.) One can, equivalently, treat the observables as fixed, while the state of the system depends on time; that is known as the [[Schrödinger picture]]. (This approach was taken in the earlier part of the discussion above, with a time-varying state <math display="inline">|\Psi(t)\rangle = \sum_n C_n(t) |\Phi_n\rang</math>.) Conceptually (and mathematically), the two approaches are equivalent; choosing one of them is a matter of convention.

Both viewpoints are used in quantum theory. While non-relativistic [[quantum mechanics]] is usually formulated in terms of the Schrödinger picture, the Heisenberg picture is often preferred in a relativistic context, that is, for [[quantum field theory]]. Compare with [[Dirac picture]].<ref name="Gottfried (2013)">{{cite book
 | last1 =Gottfried
 | first1 =Kurt
 | author-link1 =Kurt Gottfried
 | last2 =Yan
 | first2 =Tung-Mow
 | author-link2 =Tung-Mow Yan
 | title =Quantum Mechanics: Fundamentals
 | publisher =Springer
 | edition =2nd, illustrated
 | year =2003
 | isbn =9780387955766
}}</ref>{{rp|1=[https://books.google.com/books?id=8gFX-9YcvIYC&pg=PA65 65]}}

==Formalism in quantum physics==

{{See also|Mathematical formulation of quantum mechanics}}

===Pure states as rays in a complex Hilbert space===
{{see also|Wigner's theorem#Rays and ray space}}
Quantum physics is most commonly formulated in terms of [[linear algebra]], as follows. Any given system is identified with some finite- or infinite-dimensional [[Hilbert space]]. The pure states correspond to vectors of [[normed vector space|norm]] 1. Thus the set of all pure states corresponds to the [[unit sphere]] in the Hilbert space, because the unit sphere is defined as the set of all vectors with norm 1.

Multiplying a pure state by a [[Scalar (mathematics)|scalar]] is physically inconsequential (as long as the state is considered by itself). If a vector in a complex Hilbert space <math>H</math> can be obtained from another vector by multiplying by some non-zero complex number, the two vectors in <math>H</math> are said to correspond to the same [[ray (quantum theory)|ray]] in the [[projective Hilbert space]] <math>\mathbf{P}(H)</math>  of <math>H</math>. Note that although the word ''ray'' is used, properly speaking, a point the projective Hilbert space corresponds to a ''line'' passing through the origin of the Hilbert space, rather than a [[Line (geometry)#Ray|half-line]], or ''ray'' in the [[Line (geometry)#Ray|geometrical sense]].

===Bra–ket notation===
{{Main|Bra–ket notation}}

Calculations in quantum mechanics make frequent use of [[linear operator]]s, scalar products, [[dual space]]s and [[Hermitian conjugation]]. In order to make such calculations flow smoothly, and to make it unnecessary (in some contexts) to fully understand the underlying linear algebra, [[Paul Dirac]] invented a notation to describe quantum states, known as ''[[bra–ket notation]]''. Although the details of this are beyond the scope of this article, some consequences of this are:
*The expression used to denote a state vector (which corresponds to a pure quantum state) takes the form <math>|\psi\rangle</math> (where the "<math>\psi</math>" can be replaced by any other symbols, letters, numbers, or even words). This can be contrasted with the usual ''mathematical'' notation, where vectors are usually lower-case Latin letters, and it is clear from the context that they are indeed vectors.
*Dirac defined two kinds of vector, ''bra'' and ''ket'', dual to each other.{{efn|{{named ref|name=Dirac (1958)|[[Paul Adrien Maurice Dirac|Dirac, P.A.M.]] (1958). ''The Principles of Quantum Mechanics'', 4th edition, Oxford University Press, Oxford UK.}} p.&nbsp;20: "The bra vectors, as they have been here introduced, are quite a different kind of vector from the kets, and so far there is no connexion between them except for the existence of a scalar product of a bra and a ket."}}
*Each ket <math>|\psi\rangle</math> is uniquely associated with a so-called ''bra'', denoted <math>\langle\psi|</math>, which corresponds to the same physical quantum state. Technically, the bra is the [[Hermitian adjoint|adjoint]] of the ket. It is an element of the [[dual space]], and related to the ket by the [[Riesz representation theorem]]. In a finite-dimensional space with a chosen orthonormal basis, writing <math>|\psi\rangle</math> as a column vector, <math>\langle\psi|</math> is a row vector; to obtain it just take the [[transpose]] and entry-wise [[complex conjugate]] of <math>|\psi\rangle</math>.
*Scalar products{{efn|{{named ref|name=Dirac (1958)}} p.&nbsp;19: "A scalar product {{math|{{bra-ket|''B''|''A''}}}} now appears as a complete bracket expression."}}{{efn|1={{named ref|name=Gottfried (2013)}} [https://books.google.com/books?id=8gFX-9YcvIYC&pg=PA31&vq=%22to%20define%20the%20scalar%20products%20as%20being%20between%20bras%20and%20kets.%22 p.&nbsp;31]: "to define the scalar products as being between bras and kets."}} (also called ''brackets'') are written so as to look like a bra and ket next to each other: {{nowrap|<math>\lang \psi_1|\psi_2\rang</math>.}} (The phrase "bra-ket" is supposed to resemble "bracket".)

===Spin===
{{Main|Mathematical formulation of quantum mechanics #Spin}}
The [[angular momentum]] has the same dimension ([[mass|M]]·[[length|L]]{{sup|2}}·[[time|T]]{{sup|−1}}) as the [[Planck constant]] and, at quantum scale, behaves as a ''discrete'' degree of freedom of a quantum system. Most particles possess a kind of intrinsic angular momentum that does not appear at all in classical mechanics and arises from Dirac's relativistic generalization of the theory. Mathematically it is described with [[spinor]]s. In non-relativistic quantum mechanics the [[representation theory of SU(2)|group representations]] of the [[Lie group]] SU(2) are used to describe this additional freedom. For a given particle, the choice of representation (and hence the range of possible values of the spin observable) is specified by a non-negative number {{math|''S''}} that, in units of [[Planck's reduced constant]] {{math|''ħ''}}, is either an [[integer]] (0, 1, 2 ...) or a [[half-integer]] (1/2, 3/2, 5/2 ...). For a [[rest mass|massive]] particle with spin {{math|''S''}}, its [[spin quantum number]] {{math|''m''}} always assumes one of the 2''S'' + 1 possible values in the set 
<math display="block">\{ -S, -S+1, \ldots, S-1, S \}</math>

As a consequence, the quantum state of a particle with spin is described by a [[vector space|vector]]-valued wave function with values in [[complex coordinate space|'''C'''<sup>2''S''+1</sup>]]. Equivalently, it is represented by a [[complex-valued function]] of four variables: one discrete [[quantum number]] variable (for the spin) is added to the usual three continuous variables (for the position in space).

===Many-body states and particle statistics===
{{Further|Particle statistics}}
The quantum state of a system of ''N'' particles, each potentially with spin, is described by a complex-valued function with four variables per particle, corresponding to 3 [[spatial coordinates]] and [[Spin (physics)|spin]], e.g.
<math display="block">|\psi (\mathbf r_1,\, m_1;\; \dots;\; \mathbf r_N,\, m_N)\rangle.</math>

Here, the spin variables ''m<sub>ν</sub>'' assume values from the set 
<math display="block">\{-S_\nu,\, -S_\nu + 1,\, \ldots,\, S_\nu - 1,\, S_\nu \}</math>
where <math>S_\nu</math> is the spin of ''&nu;''-th particle. <math>S_\nu = 0</math> for a particle that does not exhibit spin.

The treatment of [[identical particles]] is very different for [[boson]]s (particles with integer spin) versus [[fermion]]s (particles with half-integer spin). The above ''N''-particle function must either be symmetrized (in the bosonic case) or anti-symmetrized (in the fermionic case) with respect to the particle numbers. If not all ''N'' particles are identical, but some of them are, then the function must be (anti)symmetrized separately over the variables corresponding to each group of identical variables, according to its statistics (bosonic or fermionic).

Electrons are fermions with {{math|1=''S'' = 1/2}}, [[photon]]s (quanta of light) are bosons with {{math|1=''S'' = 1}} (although in the [[vacuum]] they are [[massless particle|massless]] and can't be described with Schrödinger mechanics).

When symmetrization or anti-symmetrization is unnecessary, ''N''-particle spaces of states can be obtained simply by [[Tensor product of Hilbert spaces|tensor product]]s of one-particle spaces, to which we will return later.

===Basis states of one-particle systems===
As with any [[Hilbert space]], if a [[basis (linear algebra)|basis]] is chosen for the Hilbert space of a system, then any ket can be expanded as a [[linear combination]] of those basis elements. Symbolically, given basis kets <math>|{k_i}\rang</math>, any ket <math>|\psi\rang</math> can be written
<math display="block">| \psi \rang = \sum_i c_i |{k_i}\rangle</math>
where {{math|''c<sub>i</sub>''}} are [[complex number]]s. In physical terms, this is described by saying that <math>|\psi\rang</math> has been expressed as a ''quantum superposition'' of the states <math>|{k_i}\rang</math>. If the basis kets are chosen to be [[orthonormal basis|orthonormal]] (as is often the case), then <math>c_i = \lang {k_i} | \psi \rang</math>.

One property worth noting is that the ''normalized'' states <math>|\psi\rang</math> are characterized by
<math display="block">\lang\psi|\psi\rang = 1,</math>
and for orthonormal basis this translates to
<math display="block">\sum_i \left | c_i \right | ^2 = 1.</math>

Expansions of this sort play an important role in measurement in quantum mechanics. In particular, if the <math>| {k_i} \rang</math> are [[eigenvector|eigenstates]] (with [[eigenvalue]]s {{math|''k<sub>i</sub>''}}) of an observable, and that observable is measured on the normalized state <math>|\psi\rang</math>, then the probability that the result of the measurement is {{math|''k<sub>i</sub>''}} is {{math|{{!}}''c<sub>i</sub>''{{!}}<sup>2</sup>}}. (The normalization condition above mandates that the total sum of probabilities is equal to one.)

A particularly important example is the [[Position Operator|''position basis'']], which is the basis consisting of eigenstates <math>|\mathbf{r}\rang</math> with eigenvalues <math>\mathbf{r}</math> of the observable which corresponds to measuring position.{{efn|Note that a state <math>|\psi\rang</math> is a superposition of different basis states <math>|\mathbf{r}\rang</math>, so <math>|\psi\rang</math> and <math>|\mathbf{r}\rang</math> are elements of the same Hilbert space. A particle in state <math>|\mathbf{r}\rang</math> is located precisely at position <math>\mathbf{r} = (x,y,z)</math>, while a particle in state <math>|\psi\rang</math> can be found at different positions with corresponding probabilities.}} If these eigenstates are nondegenerate (for example, if the system is a single, [[Spin (physics)|spinless]] particle), then any ket <math>|\psi\rang</math> is associated with a complex-valued function of three-dimensional space
<math display="block">\psi(\mathbf{r}) \equiv \lang \mathbf{r} | \psi \rang. </math>{{efn|In the continuous case, the basis kets <math>|\mathbf{r}\rang</math> are not unit kets (unlike the state <math>|\psi\rang</math>): They are normalized according to <math display="inline"> \int d^3\mathbf{r}' \, \lang \mathbf{r} | \mathbf{r}' \rang = 1,</math>{{efn|{{named ref|name=Landau (1965)}} p. 17: "{{math|1=∫ Ψ{{sub|{{var|f}}&prime;}} Ψ{{sub|{{var|f}}}}* ''dq'' = ''δ''({{var|f}}&prime; − {{var|f}})}}" (the left side corresponds to {{math|{{bra-ket|{{var|f}}|{{var|f}}&prime;}}}}), "{{math|1=∫ ''δ''({{var|f}}&prime; − {{var|f}}) ''df&prime;'' = 1}}".}} i.e., <math>\lang \mathbf{r} | \mathbf{r}' \rang = \delta(\mathbf{r}' - \mathbf{r})</math> (a [[Dirac delta function]]), which means that <math>\lang \mathbf{r} | \mathbf{r} \rang = \infty.</math>}}
This function is called the '''[[wave function]]''' corresponding to <math>|\psi\rang</math>. Similarly to the discrete case above, the [[probability density|probability ''density'']] of the particle being found at position <math>\mathbf{r}</math> is <math>|\psi(\mathbf{r})|^2</math> and the normalized states have 
<math display="block">\int d^3 \mathbf{r} \, |\psi(\mathbf{r})|^2 = 1.</math>
In terms of the continuous set of position basis <math>|\mathbf{r}\rang</math>, the state <math>|\psi \rang</math> is:
<math display="block">|\psi \rang = \int d^3 \mathbf{r} \, \psi (\mathbf{r}) |\mathbf{r}\rang .</math>

===Pure states vs. bound states ===
{{see also|Decomposition of spectrum (functional analysis) #Quantum mechanics}}
Though closely related, pure states are not the same as bound states belonging to the [[Spectrum (functional analysis)#Point spectrum|pure point spectrum]] of an observable with no quantum uncertainty. A particle is said to be in a '''[[bound state]]''' if it remains localized in a bounded region of space for all times. A pure state <math>|\phi\rangle</math> is called a bound state ''if and only if'' for every <math>\varepsilon >0</math> there is a [[compact set]] <math>K\subset \mathbb{R}^3</math> such that <math display="block">\int_K |\phi(\mathbf{r},t)|^2\,\mathrm{d}^3 \mathbf{r} \geq 1- \varepsilon </math>
for all <math>t\in\mathbb{R}</math>.<ref>{{cite book | last=Blanchard | first=Philippe | last2=Brüning | first2=Erwin | title=Mathematical Methods in Physics | publisher=Birkhäuser | date=2015 | isbn=978-3-319-14044-5|p=431}}</ref> The integral represents the probability that a particle is found in a bounded region <math>K</math> at any time <math>t</math>. If the probability remains arbitrarily close to <math>1</math> then the particle is said to remain in <math>K</math>.

===Superposition of pure states===
{{Main|Quantum superposition}}
As mentioned above, quantum states may be [[superposition principle|superposed]]. If <math>|\alpha\rangle</math> and <math>|\beta\rangle</math> are two kets corresponding to quantum states, the ket
<math display="block">c_\alpha|\alpha\rang + c_\beta|\beta\rang</math>
is a different quantum state (possibly not normalized). Note that both the amplitudes and phases ([[Argument (complex analysis)|arguments]]) of <math>c_\alpha</math> and <math>c_\beta</math> will influence the resulting quantum state. In other words, for example, even though <math>|\psi\rang</math> and <math>e^{i\theta}|\psi\rang</math> (for real {{mvar|θ}}) correspond to the same physical quantum state, they are ''not interchangeable'', since <math>|\phi\rang + |\psi\rang</math> and <math>|\phi\rang + e^{i\theta} |\psi\rang</math> will ''not'' correspond to the same physical state for all choices of <math>|\phi\rang</math>. However, <math>|\phi\rang+|\psi\rang</math> and <math>e^{i\theta}(|\phi\rang+|\psi\rang)</math> ''will'' correspond to the same physical state. This is sometimes described by saying that "global" phase factors are unphysical, but "relative" phase factors are physical and important.

One example of superposition is the [[double-slit experiment]], in which superposition leads to [[Interference (wave propagation)#Quantum interference|quantum interference]]. The quantum state of the two slit experiment is a superposition of two single-slit quantum states, one corresponding to the left slit, and the other corresponding to the right slit. In the detector plane, the relative phase of those two single-slit states depends on the difference of the distances from the two slits. Depending on that relative phase, the interference is constructive at some locations and destructive in others, creating the interference pattern. We may say that superposed states are in ''coherent superposition'', by analogy with [[coherence (physics)|coherence]] in other wave phenomena.

Another example of the importance of relative phase in quantum superposition is [[Rabi oscillation]]s, where the relative phase of two states varies in time due to the [[Schrödinger equation]]. The resulting superposition ends up oscillating back and forth between two different states.

===Mixed states===
{{Main|Density matrix}}

A ''pure quantum state'' is a state which can be described by a single ket vector, as described above. A ''mixed quantum state'' is a [[statistical ensemble]] of pure states (see [[quantum statistical mechanics]]).

Mixed states arise in quantum mechanics in two different situations: first, when the preparation of the system is not fully known, and thus one must deal with a [[statistical ensemble]] of possible preparations; and second, when one wants to describe a physical system which is [[Quantum entanglement|entangled]] with another, as its state cannot be described by a pure state. In the first case, there could theoretically be another person who knows the full history of the system, and therefore describe the same system as a pure state; in this case, the density matrix is simply used to represent the limited knowledge of a quantum state. In the second case, however, the existence of quantum entanglement theoretically prevents the existence of complete knowledge about the subsystem, and it's impossible for any person to describe the subsystem of an entangled pair as a pure state.

Mixed states inevitably arise from pure states when, for a composite quantum system <math>H_1 \otimes H_2</math> with an [[quantum entanglement|entangled]] state on it, the part <math>H_2</math> is inaccessible to the observer. The state of the part <math>H_1</math> is expressed then as the [[partial trace]] over <math>H_2</math>.

A mixed state ''cannot'' be described with a single ket vector. Instead, it is described by its associated ''density matrix'' (or ''density operator''), usually denoted ''ρ''. Note that density matrices can describe both mixed ''and'' pure states, treating them on the same footing. Moreover, a mixed quantum state on a given quantum system described by a Hilbert space <math>H</math> can be always represented as the partial trace of a pure quantum state (called a [[purification of quantum state|purification]]) on a larger bipartite system <math>H \otimes K</math> for a sufficiently large Hilbert space <math>K</math>.

The density matrix describing a mixed state is defined to be an operator of the form
<math display="block">\rho = \sum_s p_s | \psi_s \rangle \langle \psi_s |</math>
where <math>p_s</math> is the fraction of the ensemble in each pure state <math>|\psi_s\rangle.</math> The density matrix can be thought of as a way of using the one-particle [[Formalism (mathematics)|formalism]] to describe the behavior of many similar particles by giving a probability distribution (or ensemble) of states that these particles can be found in.

A simple criterion for checking whether a density matrix is describing a pure or mixed state is that the [[trace (linear algebra)|trace]] of ''ρ''<sup>2</sup> is equal to 1 if the state is pure, and less than 1 if the state is mixed.{{efn|Note that this criterion works when the density matrix is normalized so that the trace of ρ is 1, as it is for the standard definition given in this section. Occasionally a density matrix will be normalized differently, in which case the criterion is <math>\operatorname{Tr}(\rho^2) = (\operatorname{Tr} \rho)^2</math>}}<ref>[https://books.google.com/books?id=kl-pMd9Qx04C&pg=PA39 Blum, ''Density matrix theory and applications'', page 39].</ref> Another, equivalent, criterion is that the [[von Neumann entropy]] is 0 for a pure state, and strictly positive for a mixed state.

{{anchor|expectation}}The rules for measurement in quantum mechanics are particularly simple to state in terms of density matrices. For example, the ensemble average ([[expectation value (quantum mechanics)|expectation value]]) of a measurement corresponding to an observable {{math|''A''}} is given by
<math display="block">\langle A \rangle = \sum_s p_s \langle \psi_s | A | \psi_s \rangle = \sum_s \sum_i p_s a_i | \langle \alpha_i | \psi_s \rangle |^2 = \operatorname{tr}(\rho A)</math>
where <math>|\alpha_i\rangle</math> and <math>a_i</math> are eigenkets and eigenvalues, respectively, for the operator {{math|''A''}}, and "{{math|tr}}" denotes trace. It is important to note that two types of averaging are occurring, one being a weighted quantum superposition over the basis kets <math>|\psi_s\rangle</math> of the pure states, and the other being a statistical (said ''incoherent'') average with the probabilities {{math|''p<sub>s</sub>''}} of those states.

According to [[Eugene Wigner]],<ref>{{cite book | author=Eugene Wigner | author-link= Eugene Wigner |contribution=Remarks on the mind-body question | pages=284&ndash;302 | editor=I.J. Good | title=The Scientist Speculates | location=London | publisher=Heinemann | year=1962 |contribution-url=http://www.phys.uu.nl/igg/jos/foundQM/wigner.pdf}} Footnote 13 on p.180</ref> the concept of mixture was put forward by [[Lev Landau]].<ref>{{cite journal | author=Lev Landau |title=Das Dämpfungsproblem in der Wellenmechanik (The Damping Problem in Wave Mechanics)| journal=Zeitschrift für Physik | volume=45 | issue=5&ndash;6 |pages=430&ndash;441 | year=1927 |doi=10.1007/bf01343064 |bibcode = 1927ZPhy...45..430L |s2cid=125732617}} English translation reprinted in: {{cite book | editor=D. Ter Haar | title=Collected papers of L.D. Landau | location=Oxford | publisher=Pergamon Press | year=1965 }} p.8&ndash;18</ref><ref name="Landau (1965)">{{cite book | author1=Lev Landau |author2= Evgeny Lifshitz | author1-link=Lev Landau| author2-link=Evgeny Lifshitz |title=Quantum Mechanics &mdash; Non-Relativistic Theory | location=London | publisher=Pergamon Press | series=Course of Theoretical Physics | volume=3 | url=https://archive.org/download/QuantumMechanics_104/LandauLifshitz-QuantumMechanics_text.pdf | edition=2nd | year=1965 }}</ref>{{rp|38&ndash;41}}

==Mathematical generalizations==
States can be formulated in terms of observables, rather than as vectors in a vector space. These are [[State (functional analysis)|positive normalized linear functionals]] on a [[C*-algebra]], or sometimes other classes of algebras of observables.
See [[State (functional analysis)|State on a C*-algebra]] and [[Gelfand–Naimark–Segal construction]] for more details.

==See also==
{{cols|colwidth=26em}}
* [[Atomic electron transition]]
* [[Bloch sphere]]
* [[Greenberger–Horne–Zeilinger state]]
* [[Ground state]]
* [[Introduction to quantum mechanics]]
* [[No-cloning theorem]]
* [[Orthonormal basis]]
* [[PBR theorem]]
* [[Quantum harmonic oscillator]]
* [[Quantum logic gate]]
* [[Stationary state]]
* [[Wave function collapse]]
* [[W state]]
{{colend}}

==Notes==
{{Notelist}}

==References==
{{Reflist}}

==Further reading==
The concept of quantum states, in particular the content of the section [[#Formalism in quantum physics|Formalism in quantum physics]] above, is covered in most standard textbooks on quantum mechanics.

For a discussion of conceptual aspects and a comparison with classical states, see:
* {{cite book | last = Isham | first = Chris J | title = Lectures on Quantum Theory: Mathematical and Structural Foundations | publisher = [[Imperial College Press]] | year = 1995 | url = https://archive.org/details/lecturesonquantu0000isha | isbn = 978-1-86094-001-9 | url-access = registration }}

For a more detailed coverage of mathematical aspects, see:
* {{cite book |last1=Bratteli |first1=Ola |author-link=Ola Bratteli |author-link2=Derek W. Robinson |last2=Robinson |first2=Derek W |title=Operator Algebras and Quantum Statistical Mechanics 1 |publisher=Springer |year=1987 |id=2nd edition |isbn=978-3-540-17093-8}} In particular, see Sec. 2.3.

For a discussion of purifications of mixed quantum states, see Chapter 2 of John Preskill's lecture notes for [http://www.theory.caltech.edu/~preskill/ph229/ Physics 219 ] at Caltech.

For a discussion of geometric aspects see:
* {{cite book |title=Geometry of Quantum States|publisher=Cambridge University Press |location=Cambridge |year=2006|author1 = Bengtsson I|author2 = Życzkowski K|author-link2=Karol Życzkowski}}, [http://chaos.if.uj.edu.pl/~karol/geometry.htm second, revised edition (2017)]

{{Quantum mechanics topics}}
{{Authority control}}

{{DEFAULTSORT:Quantum State}}
[[Category:Quantum states| ]]
