{{Short description|Requirement that quantum states' time evolution operators are unitary transformations}}
{{More citations needed|date=February 2017}}

In [[quantum physics]], '''unitarity''' is (or a '''unitary process''' has) the condition that the time evolution of a [[quantum state]] according to the [[Schrödinger equation]] is mathematically represented by a [[unitary operator]]. This is typically taken as an axiom or basic postulate of quantum mechanics, while generalizations of or departures from unitarity are part of speculations about theories that may go beyond quantum mechanics.<ref>{{cite web|last1=Ouellette|first1=Jennifer|author-link=Jennifer Ouellette |title=Alice and Bob Meet the Wall of Fire|url=https://www.quantamagazine.org/black-hole-firewalls-confound-theoretical-physicists-20121221/|website=[[Quanta Magazine]]|access-date=15 June 2023}}</ref> A '''unitarity bound'''<!--boldface per WP:R#PLA--> is any inequality that follows from the unitarity of the [[evolution operator]], i.e. from the statement that time evolution preserves [[Inner product space|inner products]] in [[Hilbert space]].

==Hamiltonian evolution==

Time evolution described by a time-independent [[Hamiltonian (quantum mechanics)|Hamiltonian]] is represented by a one-parameter family of [[unitary operator]]s, for which the Hamiltonian is a generator: <math>U(t) = e^{-i \hat{H} t/ \hbar}</math>. 
In the [[Schrödinger picture]], the unitary operators are taken to act upon the system's quantum state, whereas in the [[Heisenberg picture]], the time dependence is incorporated into the [[observable]]s instead.<ref>{{cite web|url=https://ocw.mit.edu/courses/nuclear-engineering/22-51-quantum-theory-of-radiation-interactions-fall-2012/lecture-notes/MIT22_51F12_Ch5.pdf |title=Lecture 5: Time evolution |website=22.51 Quantum Theory of Radiation Interactions |publisher=[[MIT OpenCourseWare]] |access-date=2019-08-21}}</ref>

===Implications of unitarity on measurement results===
In quantum mechanics, every state is described as a vector in [[Hilbert space]]. When a measurement is performed, it is convenient to describe this space using a [[vector basis]] in which every basis vector has a defined result of the measurement &ndash; e.g., a vector basis of defined momentum in case momentum is measured. The measurement operator is diagonal in this basis.<ref name = "Cohen-Tannoudji">Cohen-Tannoudji, C., Diu, B., Laloe, F., & Dui, B. (2006). Quantum Mechanics (2 vol. set).</ref>

The probability to get a particular measured result depends on the probability amplitude, given by the [[inner product]] of the physical state <math>|\psi\rangle</math> with the basis vectors <math>\{|\phi_i\rangle\}</math> that diagonalize the measurement operator. For a physical state that is measured after it has evolved in time, the probability amplitude can be described either by the inner product of the physical state after time evolution with the relevant basis vectors, or equivalently by the inner product of the physical state with the basis vectors that are evolved backwards in time. Using the time evolution operator <math>e^{-i\hat{H}t/\hbar}</math>, we have:<ref name = "Paris">Paris, M. G. (2012). The modern tools of quantum mechanics. The European Physical Journal Special Topics, 203(1), 61-86.</ref>
:<math>\left\langle \phi_i \left| e^{-i\hat{H}t/\hbar} \psi \right.\right\rangle = \left\langle\left. e^{-i\hat{H}(-t)/\hbar} \phi_i \right| \psi \right\rangle</math>

But by definition of [[Hermitian conjugation]], this is also:
:<math>
  \left\langle \phi_i \left| e^{-i\hat{H}t/\hbar} \psi \right.\right\rangle = 
  \left\langle\left. \phi_i \left( e^{-i\hat{H}t/\hbar}\right)^{\dagger} \right| \psi \right\rangle =
  \left\langle\left. \phi_i  e^{-i\hat{H}^{\dagger}(-t)/\hbar} \right| \psi \right\rangle
</math>

Since these equalities are true for every two vectors, we get
:<math>\hat{H}^{\dagger} = \hat{H}</math>
This means that the Hamiltonian is [[Hermitian matrix|Hermitian]] and the time evolution operator <math>e^{-i\hat{H}t/\hbar}</math> is [[unitary operator|unitary]].

Since by [[Born rule|the Born rule]] the norm determines the probability to get a particular result in a measurement, unitarity together with the Born rule guarantees the sum of probabilities is always one. Furthermore, unitarity together with the Born rule implies that the measurement operators in [[Heisenberg picture]] indeed describe how the measurement results are expected to evolve in time.

===Implications on the form of the Hamiltonian===
That the time evolution operator is unitary, is equivalent to the Hamiltonian being [[Hermitian matrix|Hermitian]]. Equivalently, this means that the possible measured energies, which are the [[eigenvalue]]s of the Hamiltonian, are always real numbers.

==Scattering amplitude and the optical theorem==

The [[S-matrix]] is used to describe how the physical system changes in a scattering process. It is in fact equal to the time evolution operator over a very long time (approaching infinity) acting on momentum states of particles (or bound complex of particles) at infinity. Thus it must be a unitary operator as well; a calculation yielding a non-unitary S-matrix often implies a bound state has been overlooked.

===Optical theorem===
{{main|Optical theorem}}

Unitarity of the S-matrix implies, among other things, the [[optical theorem]]. This can be seen as follows:<ref>Peskin, M. (2018). ''An introduction to quantum field theory'', Ch. 7.3. CRC press.</ref>

The S-matrix can be written as:
:<math>S = 1 + i T </math>
where <math>T</math> is the part of the S-matrix that is due to interactions; e.g. <math>T = 0</math> just implies the S-matrix is 1, no interaction occur and all states remain unchanged.

Unitarity of the S-matrix:
:<math>S^{\dagger} S = 1</math>

is then equivalent to:
:<math>-i\left(T - T^{\dagger}\right) = T^{\dagger}T</math>

The left-hand side is twice the imaginary part of the S-matrix. In order to see what the right-hand side is, let us look at any specific element of this matrix, e.g. between some initial state <math>|I\rangle </math> and final state <math>\langle F|</math>, each of which may include many particles. The matrix element is then:
:<math>\left\langle F \left| T^{\dagger}T \right| I\right\rangle  = \sum_i \left\langle F | T^{\dagger} | A_i  \right\rangle \left\langle A_i | T | I\right\rangle</math>

where {A<sub>i</sub>} is the set of possible on-shell states - i.e. momentum states of particles (or bound complex of particles) at infinity.

Thus, twice the imaginary part of the S-matrix, is equal to a sum representing products of contributions from all the scatterings of the initial state of the S-matrix to any other physical state at infinity, with the scatterings of the latter to the final state of the S-matrix. Since the imaginary part of the S-matrix can be calculated by [[virtual particle]]s appearing in intermediate states of the [[Feynman diagram]]s, it follows that these virtual particles must only consist of real particles that may also appear as final states. The mathematical machinery which is used to ensure this includes [[gauge symmetry]] and sometimes also [[Faddeev–Popov ghost]]s.

===Unitarity bounds===
According to the optical theorem, the probability amplitude ''M (= iT)'' for any scattering process must obey
: <math>|M|^2 = 2\operatorname{Im}(M)</math>

Similar unitarity bounds imply that the amplitudes and cross section cannot increase too much with energy or they must decrease as quickly as a certain formula{{which|date=May 2016}} dictates. For example, [[Froissart bound]] says that the total cross section of two particles scattering is bounded by <math> c \ln^2 s </math>, where <math> c </math> is a constant, and <math> s </math> is the square of the center-of-mass energy. (See [[Mandelstam variables]])

==See also==
*[[Antiunitary operator]]
*[[Born rule|the Born rule]]
*[[Probability axioms]]
*[[Quantum channel]]
*[[Stone's theorem on one-parameter unitary groups]]
*[[Wigner's theorem]]

==References==
{{reflist}}

[[Category:Quantum mechanics]]
