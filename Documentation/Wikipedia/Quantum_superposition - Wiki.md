{{Short description|Principle of quantum mechanics}}
{{broader|Superposition principle}}
{{Use dmy dates|date=April 2020}}
[[File:Quantum superposition of states and decoherence.ogv|thumb|upright=1.5|Quantum superposition of states and decoherence]]
{{Quantum mechanics|cTopic=Fundamental concepts}}

'''Quantum superposition''' is a fundamental principle of [[quantum mechanics]] that states that linear combinations of solutions to the [[Schrödinger equation]] are also solutions of the Schrödinger equation. This follows from the fact that the Schrödinger equation is a [[linear differential equation]] in time and position. More precisely, the state of a system is given by a linear combination of all the eigenfunctions of the Schrödinger equation governing that system.  

An example is a [[qubit]] used in [[quantum information processing]]. A qubit state is most generally a superposition of the basis states <math>|0 \rangle </math> and <math>|1 \rangle </math>:

<math>|\Psi \rangle = c_0|0\rangle + c_1|1\rangle</math>

Where <math>|\Psi \rangle</math> is the [[quantum state]] of the qubit and <math>|0 \rangle</math>, <math>|1 \rangle</math> denote particular solutions to the Schrödinger equation in [[Bra–ket notation|Dirac notation]] weighted by the complex numbers <math>c_0</math> and <math>c_1</math>. Here <math>|0 \rangle </math> corresponds to the classical 0 [[bit]] and<math>|1 \rangle </math> to the classical 1 bit. The probabilities of measuring the system in the <math>|0 \rangle</math> or <math>|1 \rangle</math> state are given by <math> {\mid} c_0 {\mid}^2 </math> and <math> {\mid} c_1 {\mid}^2 </math> respectively (see the [[Born rule|Born's rule]]). 

The interference fringes in the [[double-slit experiment]] provide another example of the superposition principle.

==Background==
[[Paul Dirac]] described the superposition principle as follows:

<blockquote>The general principle of superposition of quantum mechanics applies to the states [that are theoretically possible without mutual interference or contradiction] ... of any one dynamical system. It requires us to assume that between these states there exist peculiar relationships such that whenever the system is definitely in one state we can consider it as being partly in each of two or more other states. The original state must be regarded as the result of a kind of superposition of the two or more new states, in a way that cannot be conceived on classical ideas. Any state may be considered as the result of a superposition of two or more other states, and indeed in an infinite number of ways. Conversely, any two or more states may be superposed to give a new state...</blockquote>

<blockquote>The non-classical nature of the superposition process is brought out clearly if we consider the superposition of two states, ''A'' and ''B'', such that there exists an observation which, when made on the system in state ''A'', is certain to lead to one particular result, ''a'' say, and when made on the system in state ''B'' is certain to lead to some different result, ''b'' say. What will be the result of the observation when made on the system in the superposed state? The answer is that the result will be sometimes ''a'' and sometimes ''b'', according to a probability law depending on the relative weights of ''A'' and ''B'' in the superposition process. It will never be different from both ''a'' and ''b'' [i.e., either ''a'' or ''b'']. ''The intermediate character of the state formed by superposition thus expresses itself through the probability of a particular result for an observation being intermediate between the corresponding probabilities for the original states, not through the result itself being intermediate between the corresponding results for the original states.''<ref name="Dirac1947">{{cite book|author=P.A.M. Dirac|title=The Principles of Quantum Mechanics|year=1947|publisher=Clarendon Press|page=12|edition=2nd}}</ref></blockquote>

[[Anton Zeilinger]], referring to the prototypical example of the [[double-slit experiment]], has elaborated regarding the creation and destruction of quantum superposition:

<blockquote>"[T]he superposition of amplitudes ... is only valid if there is no way to know, even in principle, which path the particle took. It is important to realize that this does not imply that an observer actually takes note of what happens. It is sufficient to destroy the interference pattern, if the path information is accessible in principle from the experiment or even if it is dispersed in the environment and beyond any technical possibility to be recovered, but in principle still ‘‘out there.’’ The absence of any such information is ''the essential criterion'' for quantum interference to appear.<ref name=Zeilinger>{{cite journal | author = Zeilinger A | year = 1999 | title = Experiment and the foundations of quantum physics | journal = Rev. Mod. Phys. | volume = 71 | issue = 2 | pages = S288–S297 | doi=10.1103/revmodphys.71.s288|bibcode = 1999RvMPS..71..288Z }}</ref></blockquote>

==Theory==

=== General Formalism ===
Any state can be expanded as a sum of the eigenstates of an Hermitian operator, like the Hamiltonian, because the eigenstates form a complete basis:

:<math>
|\alpha\rangle = \sum_x c_n |n\rangle
</math>

where <math>
|n\rangle
</math> are the energy eigenstates of the Hamiltonian. For continuous variables like position eigenstates, <math>
|x\rangle
</math>:

<math>
|\alpha \rangle = \int dx' |x'\rangle \langle x'|\alpha \rangle
</math>

where:

<math>
\phi_{\alpha}(x) = \langle x| \alpha \rangle
</math>

is the projection of the state into the <math>
|x\rangle
</math> basis and is called the wave function of the particle. In both instances we notice that <math>
|\alpha\rangle
</math> can be expanded as a superposition of an infinite number of basis states.

===Example===
Given the Schrödinger equation:

<math> \hat H |n \rangle = {E_n}|n\rangle </math>

where <math> |n \rangle </math> indexes the set of eigenstates of the Hamiltonian with energy eigenvalues <math> E_n </math> we see immediately that:

<math> \hat H (|n \rangle + |n' \rangle) = {E_n}|n\rangle + {E_{n'}}|n'\rangle </math>

where:

<math> |\Psi\rangle = |n \rangle + |n' \rangle </math>

is a solution of the Schrödinger equation but is not generally an eigenstate because <math> E_n </math> and <math> E_{n'} </math> are not generally equal. We say that <math> | \Psi \rangle </math> is made up of a superposition of energy eigenstates. Now consider the more concrete case of an [[electron]] that is either [[Spin (physics)|spin]] up or down. We now index the eigenstates with the [[Spinor|spinors]] in the <math>\hat z</math> basis:

:<math>|\Psi \rangle = c_1 {\mid} {\uparrow} \rangle + c_2 {\mid} {\downarrow} \rangle</math>

where <math>{\mid} {\uparrow} \rangle</math> and <math>{\mid} {\downarrow} \rangle</math> denote spin up and spin down respectively. As previously discussed the magnitudes of the complex coefficients give the probability of finding the electron in either definite spin state:

:<math> P({\mid} {\uparrow} \rangle) = {\mid} c_1 {\mid}^2  </math>
:<math> P({\mid} {\downarrow} \rangle) = {\mid} c_2 {\mid}^2  </math>
:<math> P_{\text{total}} = P({\mid} {\uparrow} \rangle) + P({\mid} {\downarrow} \rangle) = {\mid} c_1 {\mid}^2 + {\mid} c_2 {\mid}^2 = 1   </math>

Where the probability of finding the particle in either spin up or down is normalized to 1. Notice that <math> c_1 </math> and <math> c_2 </math> are complex numbers so that:

:<math>|\Psi \rangle = {3\over 5} i {\mid}{\uparrow}\rangle + {4\over 5} {\mid}{\downarrow}\rangle.</math>

is an allowed state. We now get:

<math>P({\mid} {\uparrow} {\mid}) = \left|\frac{3i}{5}\right|^2=\frac{9}{25}</math>.

<math>P({\mid} {\downarrow} {\mid}) = \left|\frac{4}{5}\right|^2=\frac{16}{25}</math>

<math>P_{\text{total}} = P({\mid} {\uparrow} \rangle) + P({\mid} {\downarrow} \rangle) = \frac{9}{25}+\frac{16}{25}=1</math>.

If we consider a qubit with both position and spin, the state is a superposition of all possibilities for both:

:<math>
\Psi =  \psi_+(x)\otimes|{\uparrow}\rangle + \psi_-(x)\otimes|{\downarrow}\rangle
</math>

where we have a general state <math>
\Psi
</math> is the sum of the [[tensor products]] of the position space wave functions and spinors. 

===Hamiltonian evolution===
{{very long section|nosplit=1|date=December 2022}}
The numbers that describe the amplitudes for different possibilities define the [[kinematics]], the space of different states. The dynamics describes how these numbers change with time. For a particle that can be in any one of infinitely many discrete positions, a particle on a lattice, the superposition principle tells you how to make a state:

:<math>
\sum_n \psi_n |n\rangle
\,</math>

So that the infinite list of amplitudes <math display="inline">(\ldots, \psi_{-2}, \psi_{-1}, \psi_0, \psi_1, \psi_2, \ldots) </math> completely describes the quantum state of the particle. This list is called the '''state vector''', and formally it is an element of a [[Hilbert space]], an infinite-dimensional complex [[vector space]]. It is usual to represent the state so that the sum of the [[absolute square]]s of the amplitudes is one:
:<math>
\sum \psi_n^*\psi_n = 1
</math>

For a particle described by probability theory random walking on a line, the analogous thing is the list of probabilities <math display="inline">(\ldots,P_{-2},P_{-1},P_0,P_1,P_2,\ldots)</math>, which give the probability of any position. The quantities that describe how they change in time are the transition probabilities <math>\scriptstyle K_{x\rightarrow y}(t)</math>, which gives the probability that, starting at x, the particle ends up at y time t later. The total probability of ending up at y is given by the sum over all the possibilities

:<math>
P_y(t_0+t) = \sum_x P_x(t_0) K_{x\rightarrow y}(t)
\,</math>

The condition of conservation of probability states that starting at any x, the total probability to end up ''somewhere'' must add up to 1:

:<math>
\sum_y K_{x\rightarrow y} = 1
\,</math>

So that the total probability will be preserved, K is what is called a [[stochastic matrix]].

When no time passes, nothing changes: for 0 elapsed time <math>\scriptstyle K{x\rightarrow y}(0) = \delta_{xy} </math>, the K matrix is zero except from a state to itself. So in the case that the time is short, it is better to talk about the rate of change of the probability instead of the absolute change in the probability.

:<math>
P_y(t+dt) = P_y(t) + dt \, \sum_x P_x R_{x\rightarrow y}
\,</math>

where <math>\scriptstyle R_{x\rightarrow y}</math> is the time derivative of the K matrix:

:<math>
R_{x\rightarrow y} = {K_{x\rightarrow y} \, dt - \delta_{xy} \over dt}.
\,</math>

The equation for the probabilities is a differential equation that is sometimes called the '''master equation''':

:<math>
{dP_y \over dt} = \sum_x P_x R_{x\rightarrow y}
\,</math>

The R matrix is the probability per unit time for the particle to make a transition from x to y. The condition that the K matrix elements add up to one becomes the condition that the R matrix elements add up to zero:

:<math>
\sum_y R_{x\rightarrow y} = 0
\,</math>

One simple case to study is when the R matrix has an equal probability to go one unit to the left or to the right, describing a particle that has a constant rate of random walking. In this case <math>\scriptstyle R_{x\rightarrow y}</math> is zero unless y is either ''x''&nbsp;+&nbsp;1, ''x'', or ''x''&nbsp;−&nbsp;1, when ''y'' is ''x''&nbsp;+&nbsp;1 or ''x''&nbsp;−&nbsp;1, the ''R'' matrix has value ''c'', and in order for the sum of the ''R'' matrix coefficients to equal zero, the value of <math>R_{x\rightarrow x}</math> must be −2''c''. So the probabilities obey the '''discretized diffusion equation''':

:<math>
{dP_x \over dt } = c(P_{x+1} - 2P_x + P_{x-1})
\,</math>

which, when c is scaled appropriately and the P distribution is smooth enough to think of the system in a [[continuum limit]] becomes:

:<math>
{\partial P(x,t) \over \partial t} = c {\partial^2 P \over \partial x^2 }
\,</math>

Which is the '''[[diffusion equation]]'''.

Quantum amplitudes give the rate at which amplitudes change in time, and they are mathematically exactly the same except that they are complex numbers. The analog of the finite time K matrix is called the U matrix:

:<math>
\psi_n(t) = \sum_m U_{nm}(t) \psi_m
\,</math>

Since the sum of the absolute squares of the amplitudes must be constant, <math>U</math> must be [[Unitary matrix|unitary]]:

:<math>
\sum_n U^*_{nm} U_{np} = \delta_{mp}
\,</math>
or, in matrix notation,
:<math>
U^\dagger U = I
\,</math>

The rate of change of ''U'' is called the [[Hamiltonian (quantum mechanics)|Hamiltonian]] ''H'', up to a traditional factor of ''i'':

:<math>
H_{mn} = i{d \over dt} U_{mn}
</math>

The Hamiltonian gives the rate at which the particle has an amplitude to go from m to n. The reason it is multiplied by i is that the condition that U is unitary translates to the condition:

:<math>
(I + i H^\dagger \, dt )(I - i H \, dt ) = I
</math>
:<math>
H^\dagger - H = 0
\,</math>
which says that H is [[Hermitian]]. The eigenvalues of the Hermitian matrix ''H'' are real quantities, which have a physical interpretation as energy levels. If the factor ''i'' were absent, the H matrix would be antihermitian and would have purely imaginary eigenvalues, which is not the traditional way quantum mechanics represents observable quantities like the energy.

For a particle that has equal amplitude to move left and right, the Hermitian matrix H is zero except for nearest neighbors, where it has the value ''c''. If the coefficient is everywhere constant, the condition that ''H'' is Hermitian demands that the amplitude to move to the left is the complex conjugate of the amplitude to move to the right. The equation of motion for <math>\psi</math> is the time differential equation:

:<math>
i{d \psi_n \over dt} = c^* \psi_{n+1} + c \psi_{n-1}
</math>

In the case in which left and right are symmetric, ''c'' is real. By redefining the phase of the wavefunction in time, <math> \psi\rightarrow \psi e^{i2ct}</math>, the amplitudes for being at different locations are only rescaled, so that the physical situation is unchanged. But this phase rotation introduces a linear term.
:<math>
i{d \psi_n \over dt} = c \psi_{n+1} - 2c\psi_n + c\psi_{n-1},
</math>
which is the right choice of phase to take the continuum limit. When <math>c</math> is very large and <math>\psi</math> is slowly varying so that the lattice can be thought of as a line, this becomes the free [[Schrödinger equation]]:
:<math>
i{ \partial \psi \over \partial t } = - {\partial^2 \psi \over \partial x^2}
</math>

If there is an additional term in the H matrix that is an extra phase rotation that varies from point to point, the continuum limit is the Schrödinger equation with a potential energy:
:<math>
i{ \partial \psi \over \partial t} = - {\partial^2 \psi \over \partial x^2} + V(x) \psi
</math>

These equations describe the motion of a single particle in non-relativistic quantum mechanics.

===Quantum mechanics in imaginary time===
The wave functions of quantum mechanics are probability amplitudes for particular states, and so quantum mechanics lends itself to a statistical description. In a statistical system in discrete time, t=1,2,3, described by a transition matrix for one time step <math>\scriptstyle K_{m\rightarrow n}</math>, the probability to go between two points after a finite number of time steps can be represented as a sum over all paths of the probability of taking each path:
:<math>
K_{x\rightarrow y}(T) = \sum_{x(t)} \prod_t K_{x(t)x(t+1)}
\,</math>
where the sum extends over all paths <math>x(t)</math> with the property that <math>x(0)=0</math> and <math>x(T)=y</math>. The analogous expression in quantum mechanics is the [[Path integral formulation|path integral]].

A generic transition matrix in probability has a stationary distribution, which is the eventual probability to be found at any point no matter what the starting point. If there is a nonzero probability for any two paths to reach the same point at the same time, this stationary distribution does not depend on the initial conditions. In probability theory, the probability m for the stochastic matrix obeys [[detailed balance]] when the stationary distribution <math>\rho_n</math> has the property:

:<math>
\rho_n K_{n\rightarrow m} = \rho_m K_{m\rightarrow n}
\,</math>

Detailed balance says that the total probability of going from m to n in the stationary distribution, which is the probability of starting at m <math>\rho_m</math> times the probability of hopping from m to n, is equal to the probability of going from n to m, so that the total back-and-forth flow of probability in equilibrium is zero along any hop. The condition is automatically satisfied when n=m, so it has the same form when written as a condition for the transition-probability R matrix.

:<math>
\rho_n R_{n\rightarrow m} = \rho_m R_{m\rightarrow n}
\,</math>

When the R matrix obeys detailed balance, the scale of the probabilities can be redefined using the stationary distribution so that they no longer sum to 1:

:<math>
p'_n = \sqrt{\rho_n}\;p_n
\,</math>

In the new coordinates, the R matrix is rescaled as follows:

:<math>
\sqrt{\rho_n} R_{n\rightarrow m} {1\over \sqrt{\rho_m}} = H_{nm}
\,</math>

and H is symmetric
:<math>
H_{nm} = H_{mn}
\,</math>

This matrix H defines a quantum mechanical system:

:<math>
i{d \over dt} \psi_n = \sum H_{nm} \psi_m
\,</math>

whose Hamiltonian has the same eigenvalues as those of the R matrix of the statistical system. The [[eigenvectors]] are the same too, except expressed in the rescaled basis. The stationary distribution of the statistical system is the ''ground state'' of the Hamiltonian and it has energy exactly zero, while all the other energies are positive. If H is exponentiated to find the U matrix:

:<math>
U(t) = e^{-iHt}
\,</math>

and t is allowed to take on complex values, the K' matrix is found by taking [[imaginary time|time imaginary]].

:<math>
K'(t) = e^{-Ht}
\,</math>

For quantum systems which are invariant under [[T-symmetry|time reversal]] the Hamiltonian can be made real and symmetric, so that the action of time-reversal on the wave-function is just complex conjugation. If such a Hamiltonian has a unique lowest energy state with a positive real wave-function, as it often does for physical reasons, it is connected to a stochastic system in imaginary time. This relationship between stochastic systems and quantum systems sheds much light on [[supersymmetry]].

==Experiments and applications==
Successful experiments involving superpositions of [[mesoscopic|relatively large]] (by the standards of quantum physics) objects have been performed.<ref>{{cite web|url=http://physics.stackexchange.com/questions/3309/what-is-the-worlds-biggest-schrodinger-cat|title=What is the world's biggest Schrodinger cat?}}</ref>

* A "[[cat state]]" has been achieved with [[photon]]s.<ref>{{cite web|url=http://www.science20.com/news_articles/schr%C3%B6dingers_cat_now_made_light|title=Schrödinger's Cat Now Made Of Light|date=27 August 2014}}</ref>
* A [[beryllium]] [[ion]] has been trapped in a superposed state.<ref>C. Monroe, et al. [http://www.quantumsciencephilippines.com/seminar/seminar-topics/SchrodingerCatAtom.pdf ''A "Schrodinger Cat" Superposition State of an Atom'']</ref>
* A [[double slit experiment]] has been performed with molecules as large as [[Buckminsterfullerene|buckyballs]] and functionalized oligoporphyrins with up to 2000 atoms.<ref>{{cite web|url=http://www.quantum.at/research/molecule-interferometry-foundations/wave-particle-duality-of-c60.html |title=Wave-particle duality of C60 |date=31 March 2012 |url-status=bot: unknown |archive-url=https://web.archive.org/web/20120331115055/http://www.quantum.at/research/molecule-interferometry-foundations/wave-particle-duality-of-c60.html |archive-date=31 March 2012 }}</ref><ref>{{cite web|url=http://www.univie.ac.at/qfp/research/matterwave/stehwelle/standinglightwave.html|title=standinglightwave|first=Olaf|last=Nairz}}{{cite journal |title=Quantum superposition of molecules beyond 25 kDa |author=Yaakov Y. Fein |author2=Philipp Geyer |author3=Patrick Zwick |author4=Filip Kiałka |author5=Sebastian Pedalino |author6=Marcel Mayor |author7=Stefan Gerlich |author8=Markus Arndt |journal=Nature Physics |volume=15 |pages=1242–1245 |date=September 2019 |issue=12 |doi=10.1038/s41567-019-0663-9|bibcode=2019NatPh..15.1242F |s2cid=203638258 }}</ref>
* A 2013 experiment superposed molecules containing 15,000 each of protons, neutrons and electrons. The molecules were of compounds selected for their good thermal stability, and were evaporated into a beam at a temperature of 600&nbsp;K. The beam was prepared from highly purified chemical substances, but still contained a mixture of different molecular species. Each species of molecule interfered only with itself, as verified by mass spectrometry.<ref>Eibenberger, S., Gerlich, S., Arndt, M., Mayor, M., Tüxen, J. (2013). "Matter-wave interference with particles selected from a molecular library with masses exceeding 10 000 amu", ''Physical Chemistry Chemical Physics'', '''15''': 14696-14700. {{ArXiv|1310.8343}}</ref>
* An experiment involving a [[superconducting quantum interference device]] ("SQUID") has been linked to the theme of the "cat state" thought experiment.<ref>Leggett,  A. J. (1986). "The superposition principle in macroscopic systems", pp. 28–40 in ''Quantum Concepts of Space and Time'', edited by R. Penrose and C.J. Isham, {{ISBN|0-19-851972-9}}.</ref>

:By use of very low temperatures, very fine experimental arrangements were made to protect in near isolation and preserve the coherence of intermediate states, for a duration of time, between preparation and detection, of SQUID currents. Such a SQUID current is a coherent physical assembly of perhaps billions of electrons. Because of its coherence, such an assembly may be regarded as exhibiting "collective states" of a macroscopic quantal entity. For the principle of superposition, after it is prepared but before it is detected, it may be regarded as exhibiting an intermediate state. It is not a single-particle state such as is often considered in discussions of interference, for example by Dirac in his famous dictum stated above.<ref name="Dirac 9">[[Paul Dirac|Dirac, P. A. M.]] (1930/1958), p. 9.</ref> Moreover, though the 'intermediate' state may be loosely regarded as such, it has not been produced as an output of a secondary quantum analyser that was fed a pure state from a primary analyser, and so this is not an example of superposition as strictly and narrowly defined.

:Nevertheless, after preparation, but before measurement, such a SQUID state may be regarded in a manner of speaking as a "pure" state that is a superposition of a clockwise and an anti-clockwise current state. In a SQUID, collective electron states can be physically prepared in near isolation, at very low temperatures, so as to result in protected coherent intermediate states. What is remarkable here is that there are two well-separated self-coherent collective states that exhibit such [[metastability]]. The crowd of electrons tunnels back and forth between the clockwise and the anti-clockwise states, as opposed to forming a single intermediate state in which there is no definite collective sense of current flow.<ref>[http://physicsworld.com/cws/article/news/2815 Physics World: ''Schrodinger's cat comes into view'']</ref><ref>Friedman, J. R., Patel, V., Chen, W., Tolpygo, S. K., Lukens, J. E. (2000).[http://www.nature.com/nature/journal/v406/n6791/pdf/406043a0.pdf "Quantum superposition of distinct macroscopic states"], ''Nature'' '''406''': 43–46.</ref>

* An experiment involving a [[flu virus]] has been proposed.<ref>[http://www.technologyreview.com/blog/arxiv/24101/ "How to Create Quantum Superpositions of Living Things"] {{Webarchive|url=https://web.archive.org/web/20120111141000/http://www.technologyreview.com/blog/arxiv/24101/ |date=11 January 2012 }}></ref>
* A [[piezoelectric]] "[[tuning fork]]" has been constructed, which can be placed into a superposition of vibrating and non-vibrating states. The resonator comprises about 10 trillion atoms.<ref>Scientific American: [http://www.scientificamerican.com/article.cfm?id=quantum-microphone ''Macro-Weirdness: "Quantum Microphone" Puts Naked-Eye Object in 2 Places at Once: A new device tests the limits of Schrödinger's cat'']</ref>
* Recent research indicates that [[chlorophyll]] within [[plants]] appears to exploit the feature of quantum superposition to achieve greater efficiency in transporting energy, allowing pigment proteins to be spaced further apart than would otherwise be possible.<ref name="doi:10.1038/nature08811">{{Cite journal|last=Scholes|first=Gregory |author2=Elisabetta Collini |author3=Cathy Y. Wong |author4=Krystyna E. Wilk |author5=Paul M. G. Curmi |author6=Paul Brumer |author7=Gregory D. Scholes|date=4 February 2010|title=Coherently wired light-harvesting in photosynthetic marine algae at ambient temperature|journal=[[Nature (journal)|Nature]]|volume=463|issue= 7281|pages=644–647|doi=10.1038/nature08811|bibcode = 2010Natur.463..644C|pmid=20130647|s2cid=4369439 }}</ref><ref>{{Cite news|url=http://www.scientificamerican.com/article.cfm?id=quantum-entanglement-and-photo|title=Quantum Entanglement, Photosynthesis and Better Solar Cells|last=Moyer|first=Michael|date=September 2009|work=Scientific American|access-date=12 May 2010}}</ref>
* An experiment has been proposed, with a [[bacterium|bacterial cell]] cooled to 10&nbsp;mK, using an electromechanical oscillator.<ref>[http://physicsworld.com/cws/article/news/2015/sep/21/could-schrodingers-bacterium-be-placed-in-a-quantum-superposition "Could 'Schrödinger's bacterium' be placed in a quantum superposition?"]></ref> At that temperature, all metabolism would be stopped, and the cell might behave virtually as a definite chemical species. For detection of interference, it would be necessary that the cells be supplied in large numbers as pure samples of identical and detectably recognizable virtual chemical species. It is not known whether this requirement can be met by bacterial cells. They would be in a state of suspended animation during the experiment.

In [[quantum computing]] the phrase "cat state" often refers to the [[Greenberger–Horne–Zeilinger state|GHZ state]],<ref>{{cite book |author1=Nielsen, Michael A |author2=Chuang, Isaac L. |title=Quantum Computation and Quantum Information |page=490 |date=2000 |publisher=Cambridge University Press | edition=1st | isbn=0-521-63503-9 |title-link=Quantum Computation and Quantum Information (book)}}</ref> the special entangled state of [[qubit]]s wherein the qubits are in an equal superposition of all being 0 and all being 1; i.e.,

:<math> | \psi \rangle = \frac{1}{\sqrt{2}} \bigg( | 00\ldots0 \rangle + |11\ldots1 \rangle \bigg). </math>



==Quantum Computing: Uniform Quantum Superposition States==
Uniform [[quantum superposition]] states describe quantum systems that exist in a linear combination of multiple basis states, with each basis state contributing equally to the overall superposition. 

===Definition===

In the context of an  <math> n </math>-[[qubit]] system, a uniform quantum superposition state is defined as:
<math 
display="block">  |\Psi\rangle = \frac{1}{\sqrt{N}} \sum_{j=0}^{N-1} |j\rangle  </math>
Here,  <math> |j\rangle </math> represents the computational basis states of the <math> n </math>-qubit system, and  <math> N </math> is the total number of distinct states in the superposition. The normalization factor <math> \frac{1}{\sqrt{N}}</math> ensures that the total probability of finding the system in one of the basis states is equal to 1.

===Importance in Quantum Computation===

Uniform superposition states play a crucial role in quantum computation algorithms. They are often utilized as initial states or intermediate states during quantum computations. The ability to efficiently prepare uniform superposition states is essential for the implementation of various quantum algorithms (e.g., [[Grover's algorithm]], [[Quantum Fourier Transform]]),  as it impacts the overall efficiency and success of quantum computations.

===Preparation of uniform quantum superposition states when <math>N=2^n</math> ===
{{further|Quantum gate#Hadamard gate}}


For an <math>n</math>-qubit system, [[Hadamard gates]] acting on each of the <math>n</math> qubits (each initialized to the <math>|0\rangle</math>) can be used to prepare uniform quantum superposition states 
when <math>N</math> is of the form <math>N = 2^n</math>.
In this case case with <math>n</math> qubits, the combined Hadamard gate <math>H_n</math> is expressed as the tensor product of <math>n</math> Hadamard gates:
<math>H_n = \underbrace{H \otimes H \otimes \ldots \otimes H}_{n \text{ times}}</math>

The resulting uniform quantum superposition state is then:
<math> H_{n} |0\rangle^{\otimes n} =  \frac{1}{\sqrt{2^n}} \sum_{j=0}^{2^n-1} |j\rangle</math>
This generalizes the preparation of uniform quantum states using Hadamard gates for any <math>N = 2^n</math> 
<ref name="Nielsen-Chuang">{{Cite book|title=Quantum Computation and Quantum Information|last1=Nielsen|first1=Michael A.|last2=Chuang|first2=Isaac|date=2010|publisher=[[Cambridge University Press]]|isbn=978-1-10700-217-3|location=Cambridge|oclc=43641333|author-link=Michael Nielsen|author-link2=Isaac Chuang|url=https://www.cambridge.org/9781107002173}}</ref>.

[[#Measurement|Measurement]] of this uniform quantum state results in a random [[Random number generation|random]] state between <math>|0\rangle</math> and {{nowrap|<math>|N-1\rangle</math>.}} 

=== Examples: ===

==== Example 1: <math>N = 2 </math>   ====
For a system with <math>n = 1</math> qubit, the Hadamard gate is applied to the single qubit:

<math>H_1 = H</math>

Applying <math>H_1</math> to <math>|0\rangle</math> yields the uniform quantum superposition state:
<math>\frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)</math>

==== Example 2: <math>N = 4 </math>  ====

For a system with <math>n = 2</math> qubits, the combined Hadamard gate <math>H_2</math> is the tensor product of two Hadamard gates:

<math>H_2 = H \otimes H</math>

Mathematically, this is expressed as:

<math display="block">H_2 = \frac{1}{2} \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & -1 & 1 & -1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}</math>
Applying <math>H_2</math> to <math>|00\rangle</math>, yields the superposition states with equal weights.

===Preparation of uniform quantum superposition states in the general case, <math>N </math> ≠  <math>2^n</math> ===

An efficient and deterministic approach for preparing the superposition state 
<math 
display="block">  |\Psi\rangle = \frac{1}{\sqrt{N}} \sum_{j=0}^{N-1} |j\rangle  </math>
with a gate complexity and circuit depth of only <math> O(\log_2 N)</math> for all <math>N</math> was recently presented  <ref name="shukla2024efficient">
{{cite journal
  | author = Alok Shukla and Prakash Vedula
  | title = An efficient quantum algorithm for preparation of uniform quantum superposition states
  | journal = Quantum Information Processing
  | volume = 23:38
  | issue = 1
  | year = 2024
  | page = 38
 | doi = 10.1007/s11128-024-04258-4
  | arxiv = 2306.11747
  | bibcode = 2024QuIP...23...38S
 }}
</ref>.  This approach requires only 
<math> n = \lceil \log_2 N \rceil</math> 
qubits. Importantly, neither ancilla qubits nor any quantum gates with multiple controls are needed in this approach for creating the uniform superposition state  <math> |\Psi\rangle </math>.


==Formal interpretation==
Applying the [[superposition principle]] to a quantum mechanical particle, the configurations of the particle are all positions, so the superpositions make a complex wave in space. The coefficients of the linear superposition are a wave which describes the particle as best as is possible, and whose amplitude [[Interference (wave propagation)|interferes]] according to the [[Huygens principle]].

For any physical property in [[quantum mechanics]], there is a list of all the states where that property has some value. These states are necessarily perpendicular to each other using the Euclidean notion of perpendicularity which comes from sums-of-squares length, except that they also must not be i multiples of each other. This list of perpendicular states has an associated value which is the value of the physical property. The superposition principle guarantees that any state can be written as a combination of states of this form with complex coefficients.{{Clarify|date=September 2017}}

Write each state with the value q of the physical quantity as a vector in some basis <math>\psi^q_n</math>, a list of numbers at each value of n for the vector which has value q for the physical quantity. Now form the outer product of the vectors by multiplying all the vector components and add them with coefficients to make the matrix
:<math>
A_{nm} = \sum_q q \psi^{*q}_n \psi^q_m
</math>
where the sum extends over all possible values of q. This matrix is necessarily symmetric because it is formed from the orthogonal states, and has eigenvalues q. The matrix A is called the observable associated to the physical quantity. It has the property that the eigenvalues and eigenvectors determine the physical quantity and the states which have definite values for this quantity.

Every physical quantity has a [[Hermitian operator|Hermitian]] [[linear operator]] associated to it, and the states where the value of this physical quantity is definite are the [[eigenstate]]s of this linear operator. The linear combination of two or more eigenstates results in quantum superposition of two or more values of the quantity. If the quantity is measured, the value of the physical quantity will be random, with a probability equal to the square of the coefficient of the superposition in the linear combination. Immediately after the measurement, the state will be given by the eigenvector corresponding to the measured eigenvalue.

==Physical interpretation==

It is natural to ask why ordinary everyday objects and events do not seem to display quantum mechanical features such as superposition. Indeed, this is sometimes regarded as "mysterious", for instance by Richard Feynman.<ref>[[Richard Feynman|Feynman, R. P.]], Leighton, R. B., Sands, M. (1965), § 1-1.</ref> In 1935, [[Erwin Schrödinger]] devised a well-known thought experiment, now known as [[Schrödinger's cat]], which highlighted this dissonance between quantum mechanics and classical physics. One modern view is that this mystery is explained by [[quantum decoherence]].{{Citation needed|date=September 2017}} A macroscopic system (such as a cat) may evolve over time into a superposition of classically distinct quantum states (such as "alive" and "dead"). The mechanism that achieves this is a subject of significant research. One mechanism suggests that the state of the cat is entangled with the state of its environment (for instance, the molecules in the atmosphere surrounding it). When averaged over the possible quantum states of the environment (a physically reasonable procedure unless the quantum state of the environment can be controlled or measured precisely), the resulting [[density matrix|mixed quantum state]] for the cat is very close to a classical probabilistic state where the cat has some definite probability to be dead or alive, just as a classical observer would expect in this situation. Another proposed class of theories is that the fundamental time evolution equation is incomplete, and requires the addition of some type of fundamental [[Lindbladian]], the reason for this addition and the form of the additional term varies from theory to theory. A popular theory is [[Objective-collapse theory|continuous spontaneous localization]], where the Lindblad term is proportional to the spatial separation of the states. This too results in a quasi-classical probabilistic state.

==See also==
{{cols}}
* [[Eigenstates]]
* [[Mach–Zehnder interferometer]]
* [[Penrose interpretation]]
* [[Pure qubit state]]
* [[Quantum computation]]
* [[Schrödinger's cat]]
* [[Superposition principle]]
* [[Wave packet]]
{{colend}}

==References==
{{Reflist|30em}}

===Bibliography of cited references===
* [[Niels Bohr|Bohr, N.]] (1927/1928). The quantum postulate and the recent development of atomic theory, [http://www.nature.com/nature/journal/v121/n3050/abs/121580a0.html ''Nature'' Supplement 14 April 1928, '''121''': 580–590].
* [[Claude Cohen-Tannoudji|Cohen-Tannoudji, C.]], Diu, B., Laloë, F. (1973/1977). ''Quantum Mechanics'', translated from the French by S. R. Hemley, N. Ostrowsky, D. Ostrowsky, second edition, volume 1, Wiley, New York, {{ISBN|0471164321}}.
* [[Paul Dirac|Dirac, P. A. M.]] (1930/1958). ''The Principles of Quantum Mechanics'', 4th edition, Oxford University Press.
* [[Albert Einstein|Einstein, A.]] (1949). Remarks concerning the essays brought together in this co-operative volume, translated from the original German by the editor, pp.&nbsp;665–688 in [[Paul Arthur Schilpp|Schilpp, P. A.]] editor (1949), [https://www.worldcat.org/oclc/311439 ''Albert Einstein: Philosopher-Scientist''], volume {{math|II}}, Open Court, La Salle IL.
* [[Richard Feynman|Feynman, R. P.]], Leighton, R.B., Sands, M. (1965). ''The Feynman Lectures on Physics'', [https://feynmanlectures.caltech.edu/III_toc.html volume 3], Addison-Wesley, Reading, MA.
* [[Eugen Merzbacher|Merzbacher, E.]] (1961/1970). ''Quantum Mechanics'', second edition, Wiley, New York.
* [[Albert Messiah|Messiah, A.]] (1961). ''Quantum Mechanics'', volume 1, translated by G.M. Temmer from the French ''Mécanique Quantique'', North-Holland, Amsterdam.
* {{cite book|first1=J. A.|last1=Wheeler|author1-link=John Archibald Wheeler|first2=W.H.|last2=Zurek|author2-link=Wojciech H. Zurek|year=1983|title=Quantum Theory and Measurement|publisher=Princeton University Press|location=Princeton NJ}}

* {{Cite book|title=Quantum Computation and Quantum Information|last1=Nielsen|first1=Michael A.|last2=Chuang|first2=Isaac|date=2000|publisher=[[Cambridge University Press]]|isbn=0521632358|location=Cambridge|oclc=43641333|author-link=Michael Nielsen|author-link2=Isaac Chuang}}
* {{cite book |author=Williams |first=Colin P. |year=2011 |title=Explorations in Quantum Computing |publisher=[[Springer Science+Business Media|Springer]] |isbn=978-1-84628-887-6 |language=en}}
* {{Cite book|title=Quantum computing for computer scientists|last1=Yanofsky|first1=Noson S.|last2=Mannucci|first2=Mirco|date=2013|publisher=[[Cambridge University Press]]|isbn=978-0-521-87996-5}}


{{Quantum mechanics topics}}

{{Authority control}}

{{DEFAULTSORT:Quantum Superposition}}
[[Category:Quantum mechanics]]
[[Category:Articles containing video clips]]
