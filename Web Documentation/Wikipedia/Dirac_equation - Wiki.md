{{Short description|Relativistic quantum mechanical wave equation}}
{{Distinguish|Dirac delta function}}
{{Use American English|date=January 2019}}
{{Use dmy dates|date=July 2019}}
{{Quantum mechanics|cTopic=Equations}}In [[particle physics]], the '''Dirac equation''' is a [[relativistic wave equation]] derived by British physicist [[Paul Dirac]] in 1928. In its [[Dirac equation#Covariant form and relativistic invariance|free form]], or including electromagnetic interactions, it describes all [[spin-½|spin-{{1/2}}]] [[massive particle]]s, called "Dirac particles", such as [[electron]]s and [[quark]]s for which [[Parity (physics)|parity]] is a [[symmetry (physics)|symmetry]]. It is consistent with both the principles of [[quantum mechanics]] and the theory of [[special relativity]],<ref>{{cite book|title = Quanta: A handbook of concepts|author = P.W. Atkins|publisher=Oxford University Press | page=52 | year = 1974|isbn = 978-0-19-855493-6}}</ref> and was the first theory to account fully for special relativity in the context of quantum mechanics. It was validated by accounting for the [[fine structure]] of the [[Hydrogen spectral series|hydrogen spectrum]] in a completely rigorous way.

The equation also implied the existence of a new form of matter, ''[[antimatter]]'', previously unsuspected and unobserved and which was experimentally confirmed several years later. It also provided a ''theoretical'' justification for the introduction of several component wave functions in [[Wolfgang Pauli|Pauli]]'s [[phenomenology (particle physics)|phenomenological]] theory of [[Spin (physics)|spin]]. The wave functions in the Dirac theory are vectors of four [[complex number]]s (known as [[bispinor]]s), two of which resemble [[Pauli equation|the Pauli wavefunction]] in the non-relativistic limit, in contrast to the [[Schrödinger equation]] which described wave functions of only one complex value. Moreover, in the limit of zero mass, the Dirac equation reduces to the [[Weyl equation]].

Although Dirac did not at first fully appreciate the importance of his results, the entailed explanation of spin as a consequence of the union of quantum mechanics and relativity—and the eventual discovery of the [[positron]]—represents one of the great triumphs of [[theoretical physics]]. This accomplishment has been described as fully on a par with the works of [[Isaac Newton|Newton]], [[James Clerk Maxwell|Maxwell]], and [[Albert Einstein|Einstein]] before him.<ref>{{cite book|title=The New Quantum Universe|author=T.Hey, P.Walters|publisher = Cambridge University Press|year=2009|page = 228|isbn = 978-0-521-56457-1}}</ref> It has been deemed by some physicists to be the "real seed of modern physics".<ref name=":2">{{Cite web |last=Zichichi |first=Antonino |author-link=Antonino Zichichi |date=2000-03-02 |title=Dirac, Einstein and physics |url=https://physicsworld.com/a/dirac-einstein-and-physics/ |access-date=2023-10-22 |website=Physics World |language=en-GB}}</ref> In the context of [[quantum field theory]], the Dirac equation is reinterpreted to describe quantum fields corresponding to spin-{{1/2}} particles.

The Dirac equation is inscribed upon a plaque on the floor of [[Westminster Abbey]]. Unveiled on 13&nbsp;November 1995, the plaque commemorates Paul Dirac's life.<ref>{{cite web|author=Gisela Dirac-Wahrenburg |url=http://www.dirac.ch/PaulDirac.html |title=Paul Dirac |publisher=Dirac.ch |access-date=2013-07-12}}</ref>

== Mathematical formulation ==

In its modern formulation for field theory, the Dirac equation is written in terms of a [[Dirac spinor]] field <math>\psi</math> taking values in a complex vector space described concretely as <math>\mathbb{C}^4</math>, defined on flat spacetime ([[Minkowski space]]) <math>\mathbb{R}^{1,3}</math>. Its expression also contains [[gamma matrices]] and a parameter <math>m > 0</math> interpreted as the mass, as well as other physical constants. Dirac first obtained his equation through a factorization of Einstein's energy-momentum-mass equivalence relation assuming a scalar product of momentum vectors determined by the metric tensor and quantized the resulting relation by associating momenta to their respective operators.

In terms of a field <math>\psi: \mathbb{R}^{1,3}\rightarrow \mathbb{C}^4</math>, the Dirac equation is then

{{Equation box 1
|title='''Dirac equation'''
|indent=:
|equation = <math>(i \hbar \gamma^\mu \partial_\mu - m c) \psi(x) = 0</math>
|border
|border colour =#50C878
|background colour = #ECFCF4
}}

and in [[natural units]], with [[Feynman slash notation]],

{{Equation box 1
|title='''Dirac equation (natural units)'''
|indent=:
|equation = <math>(i\partial \!\!\!/ - m) \psi(x) = 0</math>
|border
|border colour =#50C878
|background colour = #ECFCF4
}}

The gamma matrices are a set of four <math>4 \times 4</math> complex matrices (elements of <math>\text{Mat}_{4\times 4}(\mathbb{C})</math>) which satisfy the defining ''anti''-commutation relations:
<math display="block">\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu}I_4</math>
where <math>\eta^{\mu\nu}</math> is the Minkowski metric element, and the indices <math>\mu, \nu</math> run over 0,1,2 and 3. These matrices can be realized explicitly under a choice of representation. Two common choices are the Dirac representation
<math display="block">
\gamma^0 = \begin{pmatrix} I_2 &        0 \\         0 & -I_2 \end{pmatrix},\quad
\gamma^i = \begin{pmatrix}   0 & \sigma^i \\ -\sigma^i &    0 \end{pmatrix},
</math>
where <math>\sigma^i</math> are the [[Pauli matrices]], and the chiral representation: the <math>\gamma^i</math> are the same, but 
<math>\gamma^0 = \begin{pmatrix} 0 &  I_2 \\         I_2 & 0 \end{pmatrix}.</math>

The slash notation is a compact notation for
<math display="block">A\!\!\!/ := \gamma^\mu A_\mu</math>
where <math>A</math> is a four-vector (often it is the four-vector differential operator <math>\partial_\mu</math>). The summation over the index <math>\mu</math> is implied.

=== Dirac adjoint and the adjoint equation ===
The '''Dirac adjoint''' of the spinor field <math>\psi(x)</math> is defined as
<math display="block">\bar\psi(x) = \psi(x)^\dagger \gamma^0.</math>
Using the property of gamma matrices (which follows straightforwardly from Hermicity properties of the <math>\gamma^\mu</math>) that
<math display="block">(\gamma^\mu)^\dagger = \gamma^0\gamma^\mu\gamma^0,</math>
one can derive the adjoint Dirac equation by taking the Hermitian conjugate of the Dirac equation and multiplying on the right by <math>\gamma^0</math>:
<math display="block">\bar\psi (x)( - i\gamma^\mu \overleftarrow{\partial}_\mu - m) = 0</math>
where the partial derivative <math>\overleftarrow{\partial}_\mu</math> acts from the right on <math>\bar\psi(x)</math>: written in the usual way in terms of a left action of the derivative, we have
<math display="block">- i\partial_\mu\bar\psi (x)\gamma^\mu - m\bar\psi (x) = 0.</math>

=== Klein–Gordon equation ===
Applying <math>i\partial\!\!\!/ + m</math> to the Dirac equation gives
<math display="block">(\partial_\mu\partial^\mu + m^2)\psi(x) = 0.</math>
That is, each component of the Dirac spinor field satisfies the [[Klein–Gordon equation]].

=== Conserved current ===
A [[conserved current]] of the theory is
<math display="block">J^\mu = \bar{\psi}\gamma^\mu\psi.</math>
{{math proof | title = Proof of conservation from Dirac equation | proof =
Adding the Dirac and adjoint Dirac equations gives
<math display="block">i((\partial_\mu\bar\psi)\gamma^\mu\psi+\bar\psi\gamma^\mu \partial_\mu\psi) = 0</math>
so by Leibniz rule,
<math display="block">i\partial_\mu(\bar\psi\gamma^\mu\psi) = 0</math>
}}

Another approach to derive this expression is by variational methods, applying [[Noether's theorem]] for the global <math>\text{U}(1)</math> symmetry to derive the conserved current <math>J^\mu.</math>

{{math proof | title = Proof of conservation from Noether's theorem | proof =
Recall the Lagrangian is
<math display="block">\mathcal{L} = \bar\psi(i\gamma^\mu \partial_\mu - m)\psi.</math>
Under a <math>U(1)</math> symmetry which sends 
<math display="block">\begin{align}
\psi &\mapsto e^{i\alpha}\psi, \\
\bar\psi &\mapsto e^{-i\alpha}\bar\psi,
\end{align}</math>
we find the Lagrangian is invariant.

Now considering the variation parameter <math>\alpha</math> to be infinitesimal, we work at first order in <math>\alpha</math> and ignore <math>\mathcal{O}{\alpha^2}</math> terms. From the previous discussion we immediately see the explicit variation in the Lagrangian due to <math>\alpha</math> is vanishing, that is under the variation,
<math display="block">\mathcal{L}\mapsto \mathcal{L} + \delta\mathcal{L},</math>
where <math>\delta\mathcal{L} = 0</math>.

As part of Noether's theorem, we find the implicit variation in the Lagrangian due to variation of fields. If the equation of motion for <math>\psi, \bar\psi</math> are satisfied, then
{{NumBlk||<math display="block">\delta\mathcal{L} = \partial_\mu\left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu \psi)}\delta\psi + \frac{\partial \mathcal{L}}{\partial (\partial_\mu \bar\psi)}\delta\bar\psi\right) </math>|{{EquationRef|<nowiki>*</nowiki>}}}}
This immediately simplifies as there are no partial derivatives of <math>\bar\psi</math> in the Lagrangian. <math>\delta\psi</math> is the infinitesimal variation
<math display="block">\delta\psi(x) = i\alpha\psi(x).</math>
We evaluate
<math display="block">\frac{\partial \mathcal{L}}{\partial (\partial_\mu \psi)} = i\bar\psi\gamma^\mu.</math>
The equation ({{EquationNote|*}}) finally is
<math display="block">0 = -\alpha\partial_\mu(\bar\psi\gamma^\mu\psi)</math>
}}

=== Solutions ===
{{Further|Dirac spinor|#Hole theory}}
Since the Dirac operator acts on 4-tuples of [[square-integrable functions]], its solutions should be members of the same [[Hilbert space]]. The fact that the energies of the solutions do not have a lower bound is unexpected.

==== Plane-wave solutions ====
Plane-wave solutions are those arising from an ansatz
<math display="block">\psi(x) = u(\mathbf{p})e^{-i p \cdot x}</math>
which models a particle with definite 4-momentum <math>p = (E_\mathbf{p}, \mathbf{p})</math> where <math display="inline">E_\mathbf{p} = \sqrt{m^2 + |\mathbf{p}|^2}.</math>

For this ansatz, the Dirac equation becomes an equation for <math>u(\mathbf{p})</math>:
<math display="block">\left(\gamma^\mu p_\mu - m\right) u(\mathbf{p}) = 0.</math>
After picking a representation for the gamma matrices <math>\gamma^\mu</math>, solving this is a matter of solving a system of linear equations. It is a representation-free property of gamma matrices that the solution space is two-dimensional (see [[Gamma matrices#Other representation-free properties|here]]).

For example, in the chiral representation for <math>\gamma^\mu</math>, the solution space is parametrised by a <math>\mathbb{C}^2</math> vector <math>\xi</math>, with
<math display="block">u(\mathbf{p}) = \begin{pmatrix} \sqrt{\sigma^\mu p_\mu}\xi \\ \sqrt{\bar\sigma^\mu p_\mu}\xi \end{pmatrix}</math>
where <math>\sigma^\mu = (I_2, \sigma^i), \bar\sigma^\mu = (I_2, -\sigma^i)</math> and <math>\sqrt{\cdot}</math> is the Hermitian matrix square-root.

These plane-wave solutions provide a starting point for canonical quantization.

=== Lagrangian formulation ===
Both the Dirac equation and the Adjoint Dirac equation can be obtained from (varying) the action with a specific Lagrangian density that is given by:
<math display="block">\mathcal{L} = i\hbar c\overline{\psi}\gamma^{\mu}\partial_{\mu}\psi - mc^2\overline{\psi}\psi</math>

If one varies this with respect to <math>\psi</math> one gets the adjoint Dirac equation. Meanwhile, if one varies this with respect to <math>\bar\psi</math> one gets the Dirac equation.

In natural units and with the slash notation, the action is then
{{Equation box 1
|title='''Dirac Action'''
|indent=:
|equation = <math>S = \int d^4x\,\bar\psi\,(i\partial\!\!\!\big / - m)\,\psi</math>
|border
|border colour =#50C878
|background colour = #ECFCF4
}}

For this action, the conserved current <math>J^\mu</math> above arises as the conserved current corresponding to the global <math>\text{U}(1)</math> symmetry through [[Noether's theorem]] for field theory. Gauging this field theory by changing the symmetry to a local, spacetime point dependent one gives gauge symmetry (really, gauge redundancy). The resultant theory is [[quantum electrodynamics]] or QED. See below for a more detailed discussion.

=== Lorentz invariance ===

The Dirac equation is invariant under Lorentz transformations, that is, under the action of the Lorentz group <math>\text{SO}(1,3)</math> or strictly <math>\text{SO}(1,3)^+</math>, the component connected to the identity.

For a Dirac spinor viewed concretely as taking values in <math>\mathbb{C}^4</math>, the transformation under a Lorentz transformation <math>\Lambda</math> is given by a <math>4\times 4</math> complex matrix <math>S[\Lambda]</math>. There are some subtleties in defining the corresponding <math>S[\Lambda]</math>, as well as a standard abuse of notation.

Most treatments occur at the [[Lie algebra]] level. For a more detailed treatment see [[Lorentz group#Lie algebra|here]]. The Lorentz group of <math>4 \times 4</math> ''real'' matrices acting on <math>\mathbb{R}^{1,3}</math> is generated by a set of six matrices <math>\{M^{\mu\nu}\}</math> with components
<math display="block">(M^{\mu\nu})^\rho{}_\sigma = \eta^{\mu\rho}\delta^\nu{}_\sigma - \eta^{\nu\rho}\delta^\mu{}_\sigma.</math>
When both the <math>\rho,\sigma</math> indices are raised or lowered, these are simply the 'standard basis' of antisymmetric matrices.

These satisfy the Lorentz algebra commutation relations
<math display="block">[M^{\mu\nu}, M^{\rho\sigma}] = M^{\mu\sigma}\eta^{\nu\rho} - M^{\nu\sigma}\eta^{\mu\rho} + M^{\nu\rho}\eta^{\mu\sigma} - M^{\mu\rho}\eta^{\nu\sigma}.</math>
In the article on the [[Dirac algebra]], it is also found that the spin generators 
<math display="block">S^{\mu\nu} = \frac{1}{4} [\gamma^\mu,\gamma^\nu]</math>
satisfy the Lorentz algebra commutation relations.

A Lorentz transformation <math>\Lambda</math> can be written as
<math display="block">\Lambda = \exp\left(\frac{1}{2}\omega_{\mu\nu}M^{\mu\nu}\right)</math>
where the components <math>\omega_{\mu\nu}</math> are antisymmetric in <math>\mu,\nu</math>.

The corresponding transformation on spin space is
<math display="block">S[\Lambda] = \exp\left(\frac{1}{2}\omega_{\mu\nu}S^{\mu\nu}\right).</math>
This is an abuse of notation, but a standard one. The reason is <math>S[\Lambda]</math> is not a well-defined function of <math>\Lambda</math>, since there are two different sets of components <math>\omega_{\mu\nu}</math> (up to equivalence) which give the same <math>\Lambda</math> but different <math>S[\Lambda]</math>. In practice we implicitly pick one of these <math>\omega_{\mu\nu}</math> and then <math>S[\Lambda]</math> is well defined in terms of <math>\omega_{\mu\nu}.</math>

Under a Lorentz transformation, the Dirac equation
<math display="block">i\gamma^\mu\partial_\mu \psi(x) - m \psi(x)</math>
becomes
<math display="block">i\gamma^\mu((\Lambda^{-1})_\mu{}^\nu\partial_\nu)S[\Lambda]\psi(\Lambda^{-1} x) - mS[\Lambda]\psi(\Lambda^{-1} x) = 0.</math>

{{math proof | title = Remainder of proof of Lorentz invariance | proof =
Multiplying both sides from the left by <math>S^{-1}[\Lambda]</math> and returning the dummy variable to <math>x</math> gives
<math display="block">iS[\Lambda]^{-1}\gamma^\mu S[\Lambda]((\Lambda^{-1})_\mu{}^\nu\partial_\nu)\psi(x) - m\psi(x) = 0.</math>
We'll have shown invariance if
<math display="block">S[\Lambda]^{-1}\gamma^\mu S[\Lambda](\Lambda^{-1})^\nu{}_\mu = \gamma^\nu</math>
or equivalently
<math display="block">S[\Lambda]^{-1}\gamma^\mu S[\Lambda] = \Lambda^\mu{}_\nu\gamma^\nu.</math>
This is most easily shown at the algebra level. Supposing the transformations are parametrised by infinitesimal components <math>\omega_{\mu\nu}</math>, then at first order in <math>\omega</math>, on the left-hand side we get
<math display="block">\frac{1}{2}\omega_{\rho\sigma}(M^{\rho\sigma})^\mu{}_\nu \gamma^\nu</math>
while on the right-hand side we get
<math display="block">\left[\frac{1}{2}\omega_{\rho\sigma}S^{\rho\sigma},\gamma^\mu\right] = \frac{1}{2}\omega_{\rho\sigma}\left[S^{\rho\sigma},\gamma^\mu\right]</math>
It's a standard exercise to evaluate the commutator on the left-hand side. Writing <math>M^{\rho\sigma}</math> in terms of components completes the proof.
}}

Associated to Lorentz invariance is a conserved Noether current, or rather a tensor of conserved Noether currents <math>(\mathcal{J}^{\rho\sigma})^\mu</math>. Similarly, since the equation is invariant under translations, there is a tensor of conserved Noether currents <math>T^{\mu\nu}</math>, which can be identified as the stress-energy tensor of the theory. The Lorentz current <math>(\mathcal{J}^{\rho\sigma})^\mu</math> can be written in terms of the stress-energy tensor in addition to a tensor representing internal angular momentum.

== Historical developments and further mathematical details ==

The Dirac equation was also used (historically) to define a quantum-mechanical theory where <math>\psi(x)</math> is instead interpreted as a [[wave-function]].

The Dirac equation in the form originally proposed by [[Paul Dirac|Dirac]] is:<ref>{{cite book |last=Dirac |first=Paul A.M. |title=Principles of Quantum Mechanics |edition=4th |page=255 |publisher=Oxford University Press |series=International Series of Monographs on Physics |orig-year=1958 |year=1982 |isbn=978-0-19-852011-5}}</ref>
<math display="block">\left(\beta mc^2 + c \sum_{n = 1}^{3}\alpha_n p_n\right) \psi (x,t) = i \hbar \frac{\partial\psi(x,t) }{\partial t} </math>
where {{math|''ψ''(''x'', ''t'')}} is the [[wave function]] for the electron of [[rest mass]] {{math|''m''}} with [[spacetime]] coordinates {{math|''x'', ''t''}}. The {{math|''p''<sub>1</sub>, ''p''<sub>2</sub>, ''p''<sub>3</sub>}} are the components of the [[momentum]], understood to be the [[momentum operator]] in the [[Schrödinger equation]]. Also, {{math|''c''}} is the [[speed of light]], and {{math|''ħ''}} is the [[reduced Planck constant]]. These fundamental [[physical constant]]s reflect special relativity and quantum mechanics, respectively.

Dirac's purpose in casting this equation was to explain the behavior of the relativistically moving electron, and so to allow the atom to be treated in a manner consistent with relativity. His rather modest hope was that the corrections introduced this way might have a bearing on the problem of [[atomic spectra]].

Up until that time, attempts to make the old quantum theory of the atom compatible with the theory of relativity, which were based on discretizing the [[angular momentum]] stored in the electron's possibly non-circular orbit of the [[atomic nucleus]], had failed – and the new quantum mechanics of [[Werner Heisenberg|Heisenberg]], [[Wolfgang Pauli|Pauli]], [[Pascual Jordan|Jordan]], [[Erwin Schrödinger|Schrödinger]], and Dirac himself had not developed sufficiently to treat this problem. Although Dirac's original intentions were satisfied, his equation had far deeper implications for the structure of matter and introduced new mathematical classes of objects that are now essential elements of fundamental physics.

The new elements in this equation are the four {{nowrap|4 × 4}} [[matrix (mathematics)|matrices]] {{math|''α''<sub>1</sub>}}, {{math|''α''<sub>2</sub>}}, {{math|''α''<sub>3</sub>}} and {{math|''β''}}, and the four-component [[wave function]] {{math|''ψ''}}. There are four components in {{math|''ψ''}} because the evaluation of it at any given point in configuration space is a [[bispinor]]. It is interpreted as a superposition of a [[Spin-1/2|spin-up]] electron, a spin-down electron, a spin-up positron, and a spin-down positron.

The {{nowrap|4 × 4}} matrices {{math|''α''<sub>''k''</sub>}} and {{math|''β''}} are all [[Hermitian matrix|Hermitian]] and are [[involutory matrix|involutory]]:
<math display="block">\alpha_i^2 = \beta^2 = I_4</math>
and they all mutually [[anticommute]]:
<math display="block">\begin{align}
  \alpha_i\alpha_j + \alpha_j\alpha_i &= 0\quad(i \neq j) \\
        \alpha_i\beta + \beta\alpha_i &= 0
\end{align}</math>

These matrices and the form of the wave function have a deep mathematical significance. The algebraic structure represented by the [[gamma matrices]] had been created some 50&nbsp;years earlier by the English mathematician [[William Kingdon Clifford|W. K. Clifford]]. In turn, Clifford's ideas had emerged from the mid-19th-century work of the German mathematician [[Hermann Grassmann]] in his ''Lineare Ausdehnungslehre'' (''Theory of Linear Expansion''). The latter had been regarded as almost incomprehensible by most of his contemporaries. The appearance of something so seemingly abstract, at such a late date, and in such a direct physical manner, is one of the most remarkable chapters in the history of physics.{{citation needed |reason=Historical perspective and author editorial |date=October 2018}} (Even more so, a validation of the exquisite insight displayed by the mathematicians Grassmann and Clifford.)

{{clear}}
The single symbolic equation thus unravels into four coupled linear first-order [[partial differential equation]]s for the four quantities that make up the wave function. The equation can be written more explicitly in [[Planck units]] as:<ref>{{cite book |title=The Dirac Equation in Curved Spacetime: A Guide for Calculations |first1=Peter |last1=Collas |first2=David |last2=Klein |publisher=Springer |year=2019 |isbn=978-3-030-14825-6 |page=7 |url=https://books.google.com/books?id=YymODwAAQBAJ}} [https://books.google.com/books?id=YymODwAAQBAJ&pg=PA7 Extract of page 7]</ref>
<math display="block">
i \partial_x \begin{bmatrix} +\psi_4 \\  +\psi_3 \\  -\psi_2 \\  -\psi_1 \end{bmatrix}
+ \partial_y \begin{bmatrix} +\psi_4 \\ -\psi_3 \\ -\psi_2 \\ +\psi_1 \end{bmatrix}
+ i \partial_z \begin{bmatrix} +\psi_3 \\ -\psi_4 \\  -\psi_1 \\ +\psi_2 \end{bmatrix}
- m            \begin{bmatrix} +\psi_1 \\  +\psi_2 \\ +\psi_3 \\ +\psi_4 \end{bmatrix} = 
i \partial_t \begin{bmatrix} -\psi_1 \\  -\psi_2 \\  +\psi_3 \\  +\psi_4 \end{bmatrix}
</math>
which makes it clearer that it is a set of four partial differential equations with four unknown functions.

=== Making the Schrödinger equation relativistic ===
The Dirac equation is superficially similar to the Schrödinger equation for a massive [[free particle]]:
<math display="block">-\frac{\hbar^2}{2m}\nabla^2\phi = i\hbar\frac{\partial}{\partial t}\phi ~.</math>

The left side represents the square of the momentum operator divided by twice the mass, which is the non-relativistic kinetic energy. Because relativity treats space and time as a whole, a relativistic generalization of this equation requires that space and time derivatives must enter symmetrically as they do in the [[Maxwell equation]]s that govern the behavior of light — the equations must be differentially of the ''same order'' in space and time. In relativity, the momentum and the energies are the space and time parts of a spacetime vector, the [[four-momentum]], and they are related by the relativistically invariant relation
<math display="block">E^2 = m^2c^4 + p^2c^2 </math>

which says that the [[Four-momentum#Minkowski norm|length of this four-vector]] is proportional to the rest mass {{math|''m''}}. Substituting the operator equivalents of the energy and momentum from the Schrödinger theory produces the [[Klein–Gordon equation]] describing the propagation of waves, constructed from relativistically invariant objects,
<math display="block">\left(-\frac{1}{c^2}\frac{\partial^2}{\partial t^2} + \nabla^2\right)\phi = \frac{m^2c^2}{\hbar^2}\phi </math>
with the wave function {{math|''ϕ''}} being a relativistic scalar: a complex number which has the same numerical value in all frames of reference. Space and time derivatives both enter to second order. This has a telling consequence for the interpretation of the equation. Because the equation is second order in the time derivative, one must specify initial values both of the wave function itself and of its first time-derivative in order to solve definite problems. Since both may be specified more or less arbitrarily, the wave function cannot maintain its former role of determining the [[probability density function|probability density]] of finding the electron in a given state of motion. In the Schrödinger theory, the probability density is given by the positive definite expression
<math display="block">\rho = \phi^*\phi </math>
and this density is convected according to the probability current vector
<math display="block">J = -\frac{i\hbar}{2m}(\phi^*\nabla\phi - \phi\nabla\phi^*) </math>
with the conservation of probability current and density following from the continuity equation:
<math display="block">\nabla\cdot J + \frac{\partial\rho}{\partial t} = 0~.</math>

The fact that the density is [[Positive-definite function|positive definite]] and convected according to this continuity equation implies that one may integrate the density over a certain domain and set the total to 1, and this condition will be maintained by the [[conservation law]]. A proper relativistic theory with a probability density current must also share this feature. To maintain the notion of a convected density, one must generalize the Schrödinger expression of the density and current so that space and time derivatives again enter symmetrically in relation to the scalar wave function. The Schrödinger expression can be kept for the current, but the probability density must be replaced by the symmetrically formed expression{{explain|reason=Why?|date=November 2021}}
<math display="block">\rho = \frac{i\hbar}{2mc^2} \left(\psi^*\partial_t\psi - \psi\partial_t\psi^* \right) .</math>
which now becomes the 4th component of a spacetime vector, and the entire [[Probability current|probability 4-current density]] has the relativistically covariant expression
<math display="block">J^\mu = \frac{i\hbar}{2m} \left(\psi^*\partial^\mu\psi - \psi\partial^\mu\psi^* \right) .</math>

The continuity equation is as before. Everything is compatible with relativity now, but the expression for the density is no longer positive definite; the initial values of both {{math|''ψ''}} and {{math|∂<sub>''t''</sub>''ψ''}} may be freely chosen, and the density may thus become negative, something that is impossible for a legitimate probability density. Thus, one cannot get a simple generalization of the Schrödinger equation under the naive assumption that the wave function is a relativistic scalar, and the equation it satisfies, second order in time.

Although it is not a successful relativistic generalization of the Schrödinger equation, this equation is resurrected in the context of [[quantum field theory]], where it is known as the [[Klein–Gordon equation]], and describes a spinless particle field (e.g. [[pi meson]] or [[Higgs boson]]). Historically, Schrödinger himself arrived at this equation before the one that bears his name but soon discarded it. In the context of quantum field theory, the indefinite density is understood to correspond to the ''charge'' density, which can be positive or negative, and not the probability density.

=== Dirac's coup ===
Dirac thus thought to try an equation that was ''first order'' in both space and time. He postulated an equation of the form
<math display="block">E\psi = (\vec{\alpha} \cdot \vec{p} + \beta m) \psi</math>
where the operators <math>(\vec{\alpha}, \beta)</math> must be independent of <math>(\vec{p}, t)</math> for linearity and independent of <math>(\vec{x}, t)</math> for space-time homogeneity. These constraints implied additional dynamical variables that the <math>(\vec{\alpha}, \beta)</math> operators will depend upon; from this requirement Dirac concluded that the operators would depend upon 4x4 matrices, related to the Pauli matrices.<ref>{{Cite book |last=Duck |first=Ian |url=https://www.worldscientific.com/worldscibooks/10.1142/3457 |title=Pauli and the Spin-Statistics Theorem |last2=Sudarshan |first2=E C G |date=1998 |publisher=WORLD SCIENTIFIC |isbn=978-981-02-3114-9 |language=en |doi=10.1142/3457}}</ref>{{rp|205}}

One could, for example, formally (i.e. by [[abuse of notation]]) take the [[Energy–momentum relation|relativistic expression for the energy]]
<math display="block">E = c \sqrt{p^2 + m^2c^2} ~,</math>
replace {{math|''p''}} by its operator equivalent, expand the square root in an [[infinite series]] of derivative operators, set up an eigenvalue problem, then solve the equation formally by iterations. Most physicists had little faith in such a process, even if it were technically possible.

As the story goes, Dirac was staring into the fireplace at Cambridge, pondering this problem, when he hit upon the idea of taking the square root of the wave operator thus:
<math display="block">\nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2} = \left(A \partial_x + B \partial_y + C \partial_z + \frac{i}{c}D \partial_t\right)\left(A \partial_x + B \partial_y + C \partial_z + \frac{i}{c}D \partial_t\right)~.</math>

On multiplying out the right side it is apparent that, in order to get all the cross-terms such as {{math|∂<sub>''x''</sub>∂<sub>''y''</sub>}} to vanish, one must assume
<math display="block">AB + BA = 0, ~ \ldots ~</math>
with
<math display="block">A^2 = B^2 = \dots = 1~.</math>

Dirac, who had just then been intensely involved with working out the foundations of Heisenberg's [[matrix mechanics]], immediately understood that these conditions could be met if {{math|''A''}}, {{math|''B''}}, {{math|''C''}} and {{math|''D''}} are ''matrices'', with the implication that the wave function has ''multiple components''. This immediately explained the appearance of two-component wave functions in Pauli's phenomenological theory of [[Spin (physics)|spin]], something that up until then had been regarded as mysterious, even to Pauli himself. However, one needs at least {{nowrap|4 × 4}} matrices to set up a system with the properties required — so the wave function had ''four'' components, not two, as in the Pauli theory, or one, as in the bare Schrödinger theory. The four-component wave function represents a new class of mathematical object in physical theories that makes its first appearance here.

Given the factorization in terms of these matrices, one can now write down immediately an equation
<math display="block">\left(A\partial_x + B\partial_y + C\partial_z + \frac{i}{c}D\partial_t\right)\psi = \kappa\psi </math>
with <math>\kappa</math> to be determined. Applying again the matrix operator on both sides yields
<math display="block">\left(\nabla^2 - \frac{1}{c^2}\partial_t^2\right)\psi = \kappa^2\psi ~.</math>

Taking <math>\kappa = \tfrac{mc}{\hbar}</math> shows that all the components of the wave function ''individually'' satisfy the relativistic energy–momentum relation. Thus the sought-for equation that is first-order in both space and time is
<math display="block">\left(A\partial_x + B\partial_y + C\partial_z + \frac{i}{c}D\partial_t - \frac{mc}{\hbar}\right)\psi = 0 ~.</math>

Setting
<math display="block">A = i \beta \alpha_1 \, , \, B = i \beta \alpha_2 \, , \, C = i \beta \alpha_3 \, , \, D = \beta ~, </math>
and because <math>D^2 = \beta^2 = I_4 </math>, the Dirac equation is produced as written above.

=== Covariant form and relativistic invariance ===
To demonstrate the [[Lorentz covariance|relativistic invariance]] of the equation, it is advantageous to cast it into a form in which the space and time derivatives appear on an equal footing. New matrices are introduced as follows:
<math display="block">\begin{align}
  D &=   \gamma^0, \\
  A &= i \gamma^1,\quad B = i \gamma^2,\quad C = i \gamma^3,
\end{align}</math>
and the equation takes the form (remembering the definition of the covariant components of the [[4-gradient]] and especially that {{math|1=∂<sub>''0''</sub> = {{sfrac|''1''|''c''}}∂<sub>''t''</sub>}})

{{Equation box 1
|title='''Dirac equation'''
|indent=:
|equation = <math>(i \hbar \gamma^\mu \partial_\mu - m c) \psi = 0</math>
|border
|border colour =#50C878
|background colour = #ECFCF4
}}

where there is an [[Einstein notation|implied summation]] over the values of the twice-repeated index {{math|''μ'' {{=}} 0, 1, 2, 3}}, and {{math|∂<sub>''μ''</sub>}} is the 4-gradient. In practice one often writes the [[gamma matrices]] in terms of 2 × 2 sub-matrices taken from the [[Pauli matrices]] and the 2 × 2 [[identity matrix]]. Explicitly the [[gamma matrices#Dirac basis|standard representation]] is
<math display="block">
\gamma^0 = \begin{pmatrix} I_2 &        0 \\         0 & -I_2 \end{pmatrix},\quad
\gamma^1 = \begin{pmatrix}   0 & \sigma_x \\ -\sigma_x &    0 \end{pmatrix},\quad
\gamma^2 = \begin{pmatrix}   0 & \sigma_y \\ -\sigma_y &    0 \end{pmatrix},\quad
\gamma^3 = \begin{pmatrix}   0 & \sigma_z \\ -\sigma_z &    0 \end{pmatrix}.
</math>

The complete system is summarized using the [[Minkowski metric]] on spacetime in the form
<math display="block">\left\{\gamma^\mu, \gamma^\nu\right\} = 2 \eta^{\mu\nu} I_4</math>
where the bracket expression
<math display="block">\{a, b\} = ab + ba</math>
denotes the [[anticommutator]]. These are the defining relations of a [[Clifford algebra]] over a pseudo-orthogonal 4-dimensional space with [[metric signature]] {{math|(+ − − −)}}. The specific Clifford algebra employed in the Dirac equation is known today as the [[Dirac algebra]]. Although not recognized as such by Dirac at the time the equation was formulated, in hindsight the introduction of this ''[[geometric algebra]]'' represents an enormous stride forward in the development of quantum theory.

The Dirac equation may now be interpreted as an [[eigenvalue]] equation, where the rest mass is proportional to an eigenvalue of the [[4-momentum operator]], the [[proportionality constant]] being the speed of light:
<math display="block">P_\text{op}\psi = mc\psi \,.</math>

Using <math>{\partial\!\!\!/} \mathrel{\stackrel{\mathrm{def}}{=}} \gamma^\mu \partial_\mu</math> (<math>{\partial\!\!\!\big /}</math> is pronounced "d-slash"),<ref>{{cite book |last=Pendleton |first=Brian |url=http://www2.ph.ed.ac.uk/~bjp/qt/rqt.pdf |archive-url=https://ghostarchive.org/archive/20221009/http://www2.ph.ed.ac.uk/~bjp/qt/rqt.pdf |archive-date=2022-10-09 |url-status=live |title=Quantum Theory |year=2012–2013 |at=section&nbsp;4.3 "The Dirac Equation"}}</ref> according to Feynman slash notation, the Dirac equation becomes:
<math display="block">i \hbar {\partial\!\!\!\big /} \psi - m c \psi = 0 \,.</math>

In practice, physicists often use units of measure such that {{math|''ħ'' {{=}} ''c'' {{=}} 1}}, known as [[natural units]]. The equation then takes the simple form

{{Equation box 1
|title='''Dirac equation''' ''(natural units)''
|indent=:
|equation = <math>(i{\partial\!\!\!\big /} - m) \psi = 0</math>
|border
|border colour = #50C878
|background colour = #ECFCF4
}}

A fundamental theorem states that if two distinct sets of matrices are given that both satisfy the [[Clifford algebra|Clifford relations]], then they are connected to each other by a [[Matrix similarity|similarity transformation]]:
<math display="block">\gamma^{\mu\prime} = S^{-1} \gamma^\mu S \,.</math>

If in addition the matrices are all [[unitary transformation|unitary]], as are the Dirac set, then {{math|''S''}} itself is [[unitary matrix|unitary]];
<math display="block">\gamma^{\mu\prime} = U^\dagger \gamma^\mu U \,.</math>

The transformation {{math|''U''}} is unique up to a multiplicative factor of absolute value 1. Let us now imagine a [[Lorentz transformation]] to have been performed on the space and time coordinates, and on the derivative operators, which form a covariant vector. For the operator {{math|''γ''<sup>''μ''</sup>∂<sub>''μ''</sub>}} to remain invariant, the gammas must transform among themselves as a contravariant vector with respect to their spacetime index. These new gammas will themselves satisfy the Clifford relations, because of the orthogonality of the Lorentz transformation. By the fundamental theorem, one may replace the new set by the old set subject to a unitary transformation. In the new frame, remembering that the rest mass is a relativistic scalar, the Dirac equation will then take the form
<math display="block">\begin{align}
  \left(iU^\dagger \gamma^\mu U\partial_\mu^\prime - m\right)\psi\left(x^\prime, t^\prime\right) &= 0 \\
              U^\dagger(i\gamma^\mu\partial_\mu^\prime - m)U \psi\left(x^\prime, t^\prime\right) &= 0 \,.
\end{align}</math>

If the transformed spinor is defined as
<math display="block">\psi^\prime = U\psi</math>
then the transformed Dirac equation is produced in a way that demonstrates [[Manifest covariance|manifest relativistic invariance]]:
<math display="block">\left(i\gamma^\mu\partial_\mu^\prime - m\right)\psi^\prime\left(x^\prime, t^\prime\right) = 0 \,.</math>

Thus, settling on any unitary representation of the gammas is final, provided the spinor is transformed according to the unitary transformation that corresponds to the given Lorentz transformation.

The various representations of the Dirac matrices employed will bring into focus particular aspects of the physical content in the Dirac wave function. The representation shown here is known as the ''standard'' representation – in it, the wave function's upper two components go over into Pauli's 2&nbsp;spinor wave function in the limit of low energies and small velocities in comparison to light.

The considerations above reveal the origin of the gammas in ''geometry'', hearkening back to Grassmann's original motivation; they represent a fixed basis of unit vectors in spacetime. Similarly, products of the gammas such as {{math|''γ''<sub>''μ''</sub>''γ''<sub>''ν''</sub>}} represent ''[[oriented surface]] elements'', and so on. With this in mind, one can find the form of the unit volume element on spacetime in terms of the gammas as follows. By definition, it is
<math display="block">V = \frac{1}{4!}\epsilon_{\mu\nu\alpha\beta}\gamma^\mu\gamma^\nu\gamma^\alpha\gamma^\beta .</math>

For this to be an invariant, the [[Levi-Civita symbol|epsilon symbol]] must be a [[tensor]], and so must contain a factor of {{math|{{sqrt|''g''}}}}, where {{math|''g''}} is the [[determinant]] of the [[metric tensor]]. Since this is negative, that factor is ''imaginary''. Thus
<math display="block">V = i \gamma^0\gamma^1\gamma^2\gamma^3 .</math>

This matrix is given the special symbol {{math|''γ''<sup>5</sup>}}, owing to its importance when one is considering improper transformations of space-time, that is, those that change the orientation of the basis vectors. In the standard representation, it is
<math display="block">\gamma_5 = \begin{pmatrix} 0 & I_{2} \\ I_{2} & 0 \end{pmatrix}.</math>

This matrix will also be found to anticommute with the other four Dirac matrices:
<math display="block">\gamma^5 \gamma^\mu + \gamma^\mu \gamma^5 = 0</math>

It takes a leading role when questions of ''[[parity (physics)|parity]]'' arise because the volume element as a directed magnitude changes sign under a space-time reflection. Taking the positive square root above thus amounts to choosing a handedness convention on spacetime.

== Comparison with related theories ==

=== Pauli theory ===
{{See also|Pauli equation|Lévy-Leblond equation}}
The necessity of introducing half-integer [[Spin (physics)|spin]] goes back experimentally to the results of the [[Stern–Gerlach experiment]]. A beam of atoms is run through a strong [[Homogeneity and heterogeneity|inhomogeneous]] [[magnetic field]], which then splits into {{math|''N''}} parts depending on the [[Spin (physics)|intrinsic angular momentum]] of the atoms. It was found that for [[silver]] atoms, the beam was split in two; the [[ground state]] therefore could not be [[integer]], because even if the intrinsic angular momentum of the atoms were as small as possible, 1, the beam would be split into three parts, corresponding to atoms with {{math|''L<sub>z</sub>'' {{=}} −1, 0, +1}}. The conclusion is that silver atoms have net intrinsic angular momentum of {{frac|1|2}}. [[Wolfgang Pauli|Pauli]] set up a theory which explained this splitting by introducing a two-component wave function and a corresponding correction term in the [[Hamilton's Principle|Hamiltonian]], representing a semi-classical coupling of this wave function to an applied magnetic field, as so in [[SI units]]: (Note that bold faced characters imply [[Euclidean vectors]] in 3&nbsp;[[dimensions]], whereas the [[Minkowski space|Minkowski]] [[four-vector]] {{math|''A''<sub>''μ''</sub>}} can be defined as <math>A_\mu = (\phi/c,-\mathbf A)</math>.)
<math display="block">H = \frac{1}{2m}\left( \boldsymbol{\sigma}\cdot\left(\mathbf{p} - e \mathbf{A}\right)\right)^2 + e\phi ~.</math>

Here {{math|'''A'''}} and <math>\phi</math> represent the components of the [[electromagnetic four-potential]] in their standard SI units, and the three sigmas are the [[Pauli matrices]]. On squaring out the first term, a residual interaction with the magnetic field is found, along with the usual [[momentum#Particle in field|classical Hamiltonian of a charged particle]] interacting with an applied field in [[SI units]]:
<math display="block">H = \frac{1}{2m}\left(\mathbf{p} - e \mathbf{A}\right)^2 + e\phi - \frac{e\hbar}{2m} \boldsymbol{\sigma} \cdot \mathbf{B} ~.</math>

This Hamiltonian is now a {{nowrap|2 × 2}} matrix, so the Schrödinger equation based on it must use a two-component wave function. On introducing the external electromagnetic 4-vector potential into the Dirac equation in a similar way, known as [[minimal coupling]], it takes the form:
<math display="block">\left(\gamma^\mu(i\hbar\partial_\mu - eA_\mu) - mc\right) \psi = 0 ~.</math>

A second application of the Dirac operator will now reproduce the Pauli term exactly as before, because the spatial Dirac matrices multiplied by {{math|''i''}}, have the same squaring and commutation properties as the Pauli matrices. What is more, the value of the [[gyromagnetic ratio]] of the electron, standing in front of Pauli's new term, is explained from first principles. This was a major achievement of the Dirac equation and gave physicists great faith in its overall correctness. There is more however. The Pauli theory may be seen as the low energy limit of the Dirac theory in the following manner. First the equation is written in the form of coupled equations for 2-spinors with the SI units restored:
<math display="block">
  \begin{pmatrix}
     mc^2 - E + e \phi &
     c\boldsymbol{\sigma}\cdot \left(\mathbf{p} - e \mathbf{A}\right) \\
    -c\boldsymbol{\sigma}\cdot \left(\mathbf{p} - e \mathbf{A}\right) &
     mc^2 + E - e \phi
  \end{pmatrix} \begin{pmatrix} \psi_{+} \\ \psi_{-} \end{pmatrix} =
  \begin{pmatrix} 0 \\ 0 \end{pmatrix} ~.
</math>
so
<math display="block">\begin{align}
   (E - e\phi) \psi_{+} - c\boldsymbol{\sigma}\cdot \left(\mathbf{p} - e \mathbf{A}\right) \psi_{-} &= mc^2 \psi_{+} \\
  -(E - e\phi) \psi_{-} + c\boldsymbol{\sigma}\cdot \left(\mathbf{p} - e \mathbf{A}\right) \psi_{+} &= mc^2 \psi_{-} \end{align}</math>

Assuming the field is weak and the motion of the electron non-relativistic, the total energy of the electron is approximately equal to its [[rest energy]], and the momentum going over to the classical value,
<math display="block">\begin{align}
   E - e\phi &\approx mc^2 \\
  \mathbf{p} &\approx m \mathbf{v}
\end{align}</math>
and so the second equation may be written
<math display="block">\psi_- \approx \frac{1}{2mc} \boldsymbol{\sigma}\cdot \left(\mathbf{p} - e \mathbf{A}\right) \psi_{+} </math>

which is of order {{math|{{sfrac|''v''|''c''}}}} – thus at typical energies and velocities, the bottom components of the Dirac spinor in the standard representation are much suppressed in comparison to the top components. Substituting this expression into the first equation gives after some rearrangement
<math display="block"> \left(E - mc^2\right) \psi_{+} = \frac{1}{2m} \left[\boldsymbol{\sigma}\cdot \left(\mathbf{p} - e \mathbf{A}\right)\right]^2 \psi_{+} + e\phi \psi_{+} </math>

The operator on the left represents the particle energy reduced by its rest energy, which is just the classical energy, so one can recover Pauli's theory upon identifying his 2-spinor with the top components of the Dirac spinor in the non-relativistic approximation. A further approximation gives the Schrödinger equation as the limit of the Pauli theory. Thus, the Schrödinger equation may be seen as the far non-relativistic approximation of the Dirac equation when one may neglect spin and work only at low energies and velocities. This also was a great triumph for the new equation, as it traced the mysterious {{math|''i''}} that appears in it, and the necessity of a complex wave function, back to the geometry of spacetime through the Dirac algebra. It also highlights why the Schrödinger equation, although superficially in the form of a [[diffusion equation]], actually represents the propagation of waves.

It should be strongly emphasized that this separation of the Dirac spinor into large and small components depends explicitly on a low-energy approximation. The entire Dirac spinor represents an ''irreducible'' whole, and the components just neglected here to arrive at the Pauli theory will bring in new phenomena in the relativistic regime – [[antimatter]] and the idea of [[Matter creation|creation]] and [[annihilation]] of particles.

=== Weyl theory ===
In the massless case <math>m = 0</math>, the Dirac equation reduces to the [[Weyl equation]], which describes relativistic massless spin-{{frac|2}} particles.<ref name="Ohlsson2011">{{cite book |first=Tommy |last=Ohlsson |author-link=Tommy Ohlsson |date=22 September 2011 |title=Relativistic Quantum Physics: From advanced quantum mechanics to introductory quantum field theory |page=86 |publisher=Cambridge University Press |isbn=978-1-139-50432-4 |url=https://books.google.com/books?id=hRavtAW5EFcC&pg=PA86}}</ref>

The theory acquires a second <math>\text{U}(1)</math> symmetry: see below.

== Physical interpretation ==
=== Identification of observables ===
The critical physical question in a quantum theory is this: what are the physically [[observable]] quantities defined by the theory? According to the postulates of quantum mechanics, such quantities are defined by [[Hermitian operator]]s that act on the [[Hilbert space]] of possible states of a system. The eigenvalues of these operators are then the possible results of [[Measurement problem|measuring]] the corresponding physical quantity. In the Schrödinger theory, the simplest such object is the overall Hamiltonian, which represents the total energy of the system. To maintain this interpretation on passing to the Dirac theory, the Hamiltonian must be taken to be
<math display="block">H = \gamma^0 \left[mc^2 + c \gamma^k \left(p_k - q A_k\right) \right] + c q A^0.</math>
where, as always, there is an [[Einstein notation|implied summation]] over the twice-repeated index {{math|''k'' {{=}} 1, 2, 3}}. This looks promising, because one can see by inspection the rest energy of the particle and, in the case of {{math|'''A''' {{=}} 0}}, the energy of a charge placed in an electric potential {{math|''cqA''<sup>0</sup>}}. What about the term involving the vector potential? In classical electrodynamics, the energy of a charge moving in an applied potential is
<math display="block">H = c\sqrt{\left(\mathbf{p} - q\mathbf{A}\right)^2 + m^2c^2} + qA^0.</math>

Thus, the Dirac Hamiltonian is fundamentally distinguished from its classical counterpart, and one must take great care to correctly identify what is observable in this theory. Much of the apparently paradoxical behavior implied by the Dirac equation amounts to a misidentification of these observables.{{Citation needed|date=January 2020}}

=== Hole theory ===
The negative {{math|''E''}} solutions to the equation are problematic, for it was assumed that the particle has a positive energy. Mathematically speaking, however, there seems to be no reason for us to reject the negative-energy solutions. Since they exist, they cannot simply be ignored, for once the interaction between the electron and the electromagnetic field is included, any electron placed in a positive-energy eigenstate would decay into negative-energy eigenstates of successively lower energy. Real electrons obviously do not behave in this way, or they would disappear by emitting energy in the form of [[photon]]s.

To cope with this problem, Dirac introduced the hypothesis, known as '''hole theory''', that the [[vacuum]] is the many-body quantum state in which all the negative-energy electron eigenstates are occupied. This description of the vacuum as a "sea" of electrons is called the [[Dirac sea]]. Since the [[Pauli exclusion principle]] forbids electrons from occupying the same state, any additional electron would be forced to occupy a positive-energy eigenstate, and positive-energy electrons would be forbidden from decaying into negative-energy eigenstates.

Dirac further reasoned that if the negative-energy eigenstates are incompletely filled, each unoccupied eigenstate – called a '''hole''' – would behave like a positively charged particle. The hole possesses a ''positive'' energy because energy is required to create a particle–hole pair from the vacuum. As noted above, Dirac initially thought that the hole might be the proton, but [[Hermann Weyl]] pointed out that the hole should behave as if it had the same mass as an electron, whereas the proton is over 1800 times heavier. The hole was eventually identified as the [[positron]], experimentally discovered by [[Carl David Anderson|Carl Anderson]] in 1932.<ref>{{cite book |last1=Penrose |first1=Roger |title=The Road to Reality |date=2004 |publisher=Jonathan Cape |isbn=0-224-04447-8 |page=625}}</ref>

It is not entirely satisfactory to describe the "vacuum" using an infinite sea of negative-energy electrons. The infinitely negative contributions from the sea of negative-energy electrons have to be canceled by an infinite positive "bare" energy and the contribution to the charge density and current coming from the sea of negative-energy electrons is exactly canceled by an infinite positive "[[jellium]]" background so that the net electric charge density of the vacuum is zero. In [[quantum field theory]], a [[Bogoliubov transformation]] on the [[creation and annihilation operators]] (turning an occupied negative-energy electron state into an unoccupied positive energy positron state and an unoccupied negative-energy electron state into an occupied positive energy positron state) allows us to bypass the Dirac sea formalism even though, formally, it is equivalent to it.

In certain applications of [[condensed matter physics]], however, the underlying concepts of "hole theory" are valid. The sea of [[conduction electron]]s in an [[electrical conductor]], called a [[Composite fermion#Fermi sea|Fermi sea]], contains electrons with energies up to the [[chemical potential]] of the system. An unfilled state in the Fermi sea behaves like a positively charged electron, and although it too is referred to as an "electron hole", it is distinct from a positron. The negative charge of the Fermi sea is balanced by the positively charged ionic lattice of the material.

=== In quantum field theory ===
{{See also|Fermionic field}}
In [[Quantum field theory|quantum field theories]] such as [[quantum electrodynamics]], the Dirac field is subject to a process of [[second quantization]], which resolves some of the paradoxical features of the equation.

== Further discussion of Lorentz covariance of the Dirac equation==
The Dirac equation is [[Lorentz covariant]]. Articulating this helps illuminate not only the Dirac equation, but also the [[Majorana spinor]] and [[Elko spinor]], which although closely related, have subtle and important differences.

Understanding Lorentz covariance is simplified by keeping in mind the geometric character of the process.<ref>Jurgen Jost, (2002) "Riemannian Geometry and Geometric Analysis (3rd Edition)" Springer Universitext. ''(See chapter 1 for spin structures and chapter 3 for connections on spin structures)''</ref> Let <math>a</math> be a single, fixed point in the [[spacetime]] [[manifold]]. Its location can be expressed in multiple [[Atlas (topology)|coordinate systems]]. In the physics literature, these are written as <math>x</math> and <math>x'</math>, with the understanding that both <math>x</math> and <math>x'</math> describe ''the same'' point <math>a</math>, but in different [[local reference frame|local frames of reference]] (a [[frame of reference]] over a small extended patch of spacetime). 
One can imagine <math>a</math> as having a [[fiber (mathematics)|fiber]] of different coordinate frames above it. In geometric terms, one says that spacetime can be characterized as a [[fiber bundle]], and specifically, the [[frame bundle]]. The difference between two points <math>x</math> and <math>x'</math> in the same fiber is a combination of [[rotation]]s and [[Lorentz boost]]s. A choice of coordinate frame is a (local) [[section (fiber bundle)|section]] through that bundle.

Coupled to the frame bundle is a second bundle, the [[spinor bundle]]. A section through the spinor bundle is just the particle field (the Dirac spinor, in the present case).  Different points in the spinor fiber correspond to the same physical object (the fermion) but expressed in different Lorentz frames. Clearly, the frame bundle and the spinor bundle must be tied together in a consistent fashion to get consistent results; formally, one says that the spinor bundle is the [[associated bundle]]; it is associated to a [[principal bundle]], which in the present case is the frame bundle. Differences between points on the fiber correspond to the symmetries of the system. The spinor bundle has two distinct [[generator (mathematics)|generators]] of its symmetries: the [[total angular momentum]] and the [[intrinsic angular momentum]]. Both correspond to Lorentz transformations, but in different ways.

The presentation here follows that of Itzykson and Zuber.<ref name="iz">Claude Itzykson and Jean-Bernard Zuber, (1980) "Quantum Field Theory", McGraw-Hill ''(See Chapter 2)''</ref> It is very nearly identical to that of Bjorken and Drell.<ref>James D. Bjorken, Sidney D. Drell (1964) "Relativistic Quantum Mechanics", McGraw-Hill. ''(See Chapter 2)''</ref> A similar derivation in a [[general relativistic]] setting can be found in Weinberg.<ref name="weinberg">Steven Weinberg, (1972) "Gravitation and Cosmology: Principles and Applications of the General Theory of Relativity", Wiley & Sons ''(See chapter 12.5, "Tetrad formalism" pages 367ff.)''.</ref> Here we fix our spacetime to be flat, that is, our spacetime is Minkowski space.

Under a [[Lorentz transformation]] <math>x \mapsto x',</math> the Dirac spinor to transform as
<math display="block">\psi'(x') = S \psi(x)</math>
It can be shown that an explicit expression for <math>S</math> is given by
<math display="block">S = \exp\left(\frac{-i}{4} \omega^{\mu\nu} \sigma_{\mu\nu}\right)</math>
where <math>\omega^{\mu\nu}</math> parameterizes the Lorentz transformation, and <math>\sigma_{\mu\nu}</math> are the six 4×4 matrices satisfying:
<math display="block">\sigma^{\mu\nu} = \frac{i}{2} [\gamma^\mu,\gamma^\nu]~.</math>

This matrix can be interpreted as the [[intrinsic angular momentum]] of the Dirac field. That it deserves this interpretation arises by contrasting it to the generator <math>J_{\mu\nu}</math> of [[Lorentz transformation]]s, having the form
<math display="block">J_{\mu\nu} = \frac{1}{2} \sigma_{\mu\nu} + i (x_\mu\partial_\nu - x_\nu\partial_\mu)</math>
This can be interpreted as the [[total angular momentum]]. It acts on the spinor field as
<math display="block">\psi^\prime(x) = \exp\left(\frac{-i}{2} \omega^{\mu\nu} J_{\mu\nu}\right) \psi(x)</math>
Note the <math>x</math> above does ''not'' have a prime on it: the above is obtained by transforming <math>x \mapsto x'</math> obtaining the change to <math>\psi(x)\mapsto \psi'(x')</math> and then returning to the original coordinate system <math>x' \mapsto x</math>.

The geometrical interpretation of the above is that the [[frame field]] is [[affine space|affine]], having no preferred origin. The generator <math>J_{\mu\nu}</math> generates the symmetries of this space: it provides a relabelling of a fixed point <math>x~.</math> The generator <math>\sigma_{\mu\nu}</math> generates a movement from one point in the fiber to another: a movement from <math>x \mapsto x'</math> with both <math>x</math> and <math>x'</math> still corresponding to the same spacetime point <math>a.</math>  These perhaps obtuse remarks can be elucidated with explicit algebra.

Let <math>x' = \Lambda x</math> be a Lorentz transformation.  The Dirac equation is
<math display="block">i\gamma^\mu \frac{\partial}{\partial x^\mu} \psi(x) -m\psi(x)=0</math>
If the Dirac equation is to be covariant, then it should have exactly the same form in all Lorentz frames:
<math display="block">i\gamma^\mu \frac{\partial}{\partial x^{\prime\mu}} \psi^\prime(x^\prime) -m\psi^\prime(x^\prime)=0</math>
The two spinors <math>\psi</math> and <math>\psi^\prime</math> should both describe the same physical field, and so should be related by a transformation that does not change any physical observables (charge, current, mass, ''etc.'') The transformation should encode only the change of coordinate frame. It can be shown that such a transformation is a 4×4 [[unitary matrix]]. Thus, one may presume that the relation between the two frames can be written as
<math display="block">\psi^\prime(x^\prime) = S(\Lambda) \psi(x)</math>
Inserting this into the transformed equation, the result is
<math display="block">i\gamma^\mu \frac{\partial x^\nu}{\partial x^{\prime\mu}} \frac{\partial}{\partial x^{\nu}} S(\Lambda)\psi(x) -mS(\Lambda)\psi(x) = 0</math>
The coordinates related by Lorentz transformation satisfy: 
<math display="block">\frac{\partial x^\nu}{\partial x^{\prime\mu}} = {\left(\Lambda^{-1}\right)^\nu}_\mu</math>
The original Dirac equation is then regained if
<math display="block">S(\Lambda) \gamma^\mu S^{-1}(\Lambda) = {\left(\Lambda^{-1}\right)^\mu}_\nu \gamma^\nu</math>
An explicit expression for <math>S(\Lambda)</math> (equal to the expression given above) can be obtained by considering a Lorentz transformation of infinitesimal rotation near the identity transformation:
<math display="block">{\Lambda^\mu}_\nu = {g^\mu}_\nu + {\omega^\mu}_\nu\ ,\ {(\Lambda^{-1})^\mu}_\nu = {g^\mu}_\nu - {\omega^\mu}_\nu</math> 
where <math>{g^\mu}_{\nu}</math> is the [[metric tensor]] : <math>{g^\mu}_{\nu}=g^{\mu\nu'}g_{\nu'\nu}={\delta^\mu}_{\nu}</math> and is symmetric while <math>\omega_{\mu\nu}={\omega^{\alpha}}_{\nu} g_{\alpha\mu}</math> is antisymmetric.  After plugging and chugging, one obtains
<math display="block">S(\Lambda) = I + \frac{-i}{4} \omega^{\mu\nu} \sigma_{\mu\nu} + \mathcal{O}\left(\Lambda^2\right)</math>
which is the (infinitesimal) form for <math>S</math> above and yields the relation <math>\sigma^{\mu\nu} = \frac{i}{2} [\gamma^\mu,\gamma^\nu]</math> . To obtain the affine relabelling, write
<math display="block"> \begin{align}
\psi'(x') &= \left(I + \frac{-i}{4} \omega^{\mu\nu} \sigma_{\mu\nu} \right) \psi(x) \\
          &= \left(I + \frac{-i}{4} \omega^{\mu\nu} \sigma_{\mu\nu} \right) \psi(x' + {\omega^\mu}_\nu \,x^{\prime\,\nu}) \\
          &= \left(I + \frac{-i}{4} \omega^{\mu\nu} \sigma_{\mu\nu} - x^\prime_\mu \omega^{\mu\nu} \partial_\nu\right) \psi(x') \\
          &= \left(I + \frac{-i}{2} \omega^{\mu\nu} J_{\mu\nu} \right) \psi(x') \\
\end{align}</math>

After properly antisymmetrizing, one obtains the generator of symmetries <math>J_{\mu\nu}</math> given earlier.  Thus, both <math>J_{\mu\nu}</math> and <math>\sigma_{\mu\nu}</math> can be said to be the "generators of Lorentz transformations", but with a subtle distinction: the first corresponds to a relabelling of points on the affine [[frame bundle]], which forces a translation along the fiber of the spinor on the [[spin bundle]], while the second corresponds to translations along the fiber of the spin bundle (taken as a movement <math>x \mapsto x'</math> along the frame bundle, as well as a movement <math>\psi \mapsto \psi'</math> along the fiber of the spin bundle.) Weinberg provides additional arguments for the physical interpretation of these as total and intrinsic angular momentum.<ref>Weinberg, "Gravitation", ''op cit.'' ''(See chapter 2.9 "Spin", pages 46-47.)''</ref>

== Other formulations ==
The Dirac equation can be formulated in a number of other ways.

=== Curved spacetime ===

This article has developed the Dirac equation in flat spacetime according to special relativity. It is possible to formulate the [[Dirac equation in curved spacetime]].

=== The algebra of physical space ===

This article developed the Dirac equation using four-vectors and Schrödinger operators. The [[Dirac equation in the algebra of physical space]] uses a Clifford algebra over the real numbers, a type of geometric algebra.

=== Coupled Weyl Spinors ===

As mentioned [[Dirac equation#Axial symmetry|above]], the ''massless'' Dirac equation immediately reduces to the homogeneous [[Weyl equation]]. By using the [[Gamma matrices#Weyl (chiral) basis|chiral representation of the gamma matrices]], the nonzero-mass equation can also be decomposed into a pair of ''coupled'' inhomogeneous Weyl equations acting on the first and last pairs of indices of the original four-component spinor, i.e. <math>\psi = \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}</math>, where <math>\psi_L</math> and <math>\psi_R</math> are each two-component [[Weyl spinor]]s. This is because the skew block form of the chiral gamma matrices means that they swap the <math>\psi_L</math> and <math>\psi_R</math> and apply the two-by-two Pauli matrices to each:

<math>\gamma^\mu \begin{pmatrix}\psi_L \\ \psi_R \end{pmatrix} = \begin{pmatrix}\sigma^\mu \psi_R \\ \overline{\sigma}^\mu \psi_L \end{pmatrix}</math>.

So the Dirac equation

<math>
(i\gamma^\mu \partial_\mu - m)\begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} = 0
</math>

becomes

<math>
i\begin{pmatrix} \sigma^\mu \partial_\mu \psi_R \\ \overline{\sigma}^\mu \partial_\mu \psi_L \end{pmatrix} = m\begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}
</math>

which in turn is equivalent to a pair of inhomogeneous Weyl equations for massless left- and right-[[Helicity (particle physics)|helicity]] spinors, where the coupling strength is proportional to the mass:

<math>
i\sigma^\mu \partial_\mu \psi_R = m \psi_L
</math>

<math>
i\overline{\sigma}^\mu \partial_\mu \psi_L = m \psi_R
</math>.{{clarify|reason=In the Penrose source the RHS is divided by \sqrt{2} and there is no imaginary unit on the LHS, but he does not go into the derivation. Other sources -- and the Axial symmetry section above -- seem to agree with the form given here.|date=June 2023}}

This has been proposed as an intuitive explanation of [[Zitterbewegung]], as these massless components would propagate at the speed of light and move in opposite directions, since the helicity is the projection of the spin onto the direction of motion.<ref name="PenroseZigzag">{{cite book |last1=Penrose |first1=Roger |title=The Road to Reality |date=2004 |publisher=Alfred A. Knopf |isbn=0-224-04447-8 |pages=628–632 |edition=Sixth Printing}}</ref> Here the role of the "mass" <math>m</math> is not to make the velocity less than the speed of light, but instead controls the average rate at which these reversals occur; specifically, the reversals can be modeled as a [[Poisson process]].<ref name="PRL_1984_07_30">{{cite journal |last1=Gaveau |first1=B. |last2=Jacobson |first2=T. |last3=Kac |first3=M. |last4=Schulman |first4=L. S. |title=Relativistic Extension of the Analogy between Quantum Mechanics and Brownian Motion |journal=Physical Review Letters |date=30 July 1984 |volume=53 |issue=5 |pages=419–422|doi=10.1103/PhysRevLett.53.419 }}</ref>

== U(1) symmetry ==
Natural units are used in this section. The coupling constant is labelled by convention with <math>e</math>: this parameter can also be viewed as modelling the electron charge.

=== Vector symmetry ===
The Dirac equation and action admits a <math>\text{U}(1)</math> symmetry where the fields <math>\psi, \bar\psi</math> transform as
<math display="block">\begin{align}
\psi(x) &\mapsto e^{i\alpha}\psi(x), \\
\bar\psi(x) &\mapsto e^{-i\alpha}\bar\psi(x).
\end{align}</math>
This is a global symmetry, known as the <math>\text{U}(1)</math> '''vector''' symmetry (as opposed to the <math>\text{U}(1)</math> '''axial''' symmetry: see below). By [[Noether's theorem]] there is a corresponding conserved current: this has been mentioned previously as
<math display="block">J^\mu(x) = \bar\psi(x)\gamma^\mu\psi(x).</math>

=== Gauging the symmetry ===
{{See also|Quantum electrodynamics}}
If we 'promote' the global symmetry, parametrised by the constant <math>\alpha</math>, to a local symmetry, parametrised by a function <math>\alpha:\mathbb{R}^{1,3} \to \mathbb{R}</math>, or equivalently <math>e^{i\alpha}: \mathbb{R}^{1,3} \to \text{U}(1),</math> the Dirac equation is no longer invariant: there is a residual derivative of <math>\alpha(x)</math>.

The fix proceeds as in [[scalar electrodynamics]]: the partial derivative is promoted to a covariant derivative <math>D_\mu</math>
<math display="block">D_\mu \psi = \partial_\mu \psi + i e A_\mu\psi,</math>
<math display="block">D_\mu \bar\psi = \partial_\mu \bar\psi - i e A_\mu\bar\psi.</math>
The covariant derivative depends on the field being acted on. The newly introduced <math>A_\mu</math> is the 4-vector potential from electrodynamics, but also can be viewed as a <math>\text{U}(1)</math> [[gauge field]], or a <math>\text{U}(1)</math> [[connection (mathematics)|connection]].

The transformation law under gauge transformations for <math>A_\mu</math> is then the usual
<math display="block">A_\mu(x) \mapsto A_\mu(x) + \frac{1}{e}\partial_\mu\alpha(x)</math>
but can also be derived by asking that covariant derivatives transform under a gauge transformation as
<math display="block">D_\mu\psi(x) \mapsto e^{i\alpha(x)}D_\mu\psi(x),</math>
<math display="block">D_\mu\bar\psi(x) \mapsto e^{-i\alpha(x)}D_\mu\bar\psi(x).</math>
We then obtain a gauge-invariant Dirac action by promoting the partial derivative to a covariant one:
<math display="block">S = \int d^4x\,\bar\psi\,(iD\!\!\!\!\big / - m)\,\psi = \int d^4x\,\bar\psi\,(i\gamma^\mu D_\mu - m)\,\psi.</math>
The final step needed to write down a gauge-invariant Lagrangian is to add a Maxwell Lagrangian term,
<math display="block">S_{\text{Maxwell}} = \int d^4x\,\left[-\frac{1}{4}F^{\mu\nu}F_{\mu\nu}\right].</math>
Putting these together gives
{{Equation box 1
|title='''QED Action'''
|indent=:
|equation = <math>S_{\text{QED}} = \int d^4x\,\left[-\frac{1}{4}F^{\mu\nu}F_{\mu\nu} + \bar\psi\,(iD\!\!\!\!\big / - m)\,\psi\right]</math>
|border
|border colour =#50C878
|background colour = #ECFCF4
}}
Expanding out the covariant derivative allows the action to be written in a second useful form:
<math display="block">S_{\text{QED}} = \int d^4x\,\left[-\frac{1}{4}F^{\mu\nu}F_{\mu\nu} + \bar\psi\,(i\partial\!\!\!\big / - m)\,\psi - eJ^\mu A_\mu\right]</math>

=== Axial symmetry ===
'''Massless''' Dirac fermions, that is, fields <math>\psi(x)</math> satisfying the Dirac equation with <math>m = 0</math>, admit a second, inequivalent <math>\text{U}(1)</math> symmetry.

This is seen most easily by writing the four-component Dirac fermion <math>\psi(x)</math> as a pair of two-component vector fields,
<math display="block">\psi(x) = \begin{pmatrix}
\psi_1(x)\\
\psi_2(x)
\end{pmatrix},
</math>
and adopting the [[gamma matrices|chiral representation]] for the gamma matrices, so that <math>i\gamma^\mu\partial_\mu</math> may be written
<math display="block">i\gamma^\mu\partial_\mu = \begin{pmatrix}
0 & i\sigma^\mu \partial_\mu\\
i\bar\sigma^\mu \partial_\mu\ & 0
\end{pmatrix}
</math>
where <math>\sigma^\mu</math> has components <math>(I_2, \sigma^i)</math> and <math>\bar\sigma^\mu</math> has components <math>(I_2, -\sigma^i)</math>.

The Dirac action then takes the form
<math display="block">S = \int d^4x\, \psi_1^\dagger(i\sigma^\mu\partial_\mu)\psi_1 + \psi_2^\dagger(i\bar\sigma^\mu\partial_\mu) \psi_2.</math>
That is, it decouples into a theory of two [[Weyl equation|Weyl spinors]] or Weyl fermions.

The earlier vector symmetry is still present, where <math>\psi_1</math> and <math>\psi_2</math> rotate identically. This form of the action makes the second inequivalent <math>\text{U}(1)</math> symmetry manifest:
<math display="block">\begin{align}
\psi_1(x) &\mapsto e^{i\beta} \psi_1(x), \\
\psi_2(x) &\mapsto e^{-i\beta}\psi_2(x).
\end{align}</math>
This can also be expressed at the level of the Dirac fermion as 
<math display="block">\psi(x) \mapsto \exp(i\beta\gamma^5) \psi(x)</math>
where <math>\exp</math> is the exponential map for matrices.

This isn't the only <math>\text{U}(1)</math> symmetry possible, but it is conventional. Any 'linear combination' of the vector and axial symmetries is also a <math>\text{U}(1)</math> symmetry.

Classically, the axial symmetry admits a well-formulated gauge theory. But at the quantum level, there is an [[anomaly (physics)|anomaly]], that is, an obstruction to gauging.

=== Extension to color symmetry ===
{{See also | quantum chromodynamics}}
We can extend this discussion from an abelian <math>\text{U}(1)</math> symmetry to a general non-abelian symmetry under a [[gauge group]] <math>G</math>, the group of [[color charge|color symmetries]] for a theory.

For concreteness, we fix <math>G = \text{SU}(N)</math>, the [[special unitary group]] of matrices acting on <math>\mathbb{C}^N</math>.

Before this section, <math>\psi(x)</math> could be viewed as a spinor field on Minkowski space, in other words a function <math>\psi: \mathbb{R}^{1,3}\mapsto \mathbb{C}^4</math>, and its components in <math>\mathbb{C}^4</math> are labelled by spin indices, conventionally Greek indices taken from the start of the alphabet <math>\alpha,\beta,\gamma,\cdots</math>.

Promoting the theory to a gauge theory, informally <math>\psi</math> acquires a part transforming like <math>\mathbb{C}^N</math>, and these are labelled by color indices, conventionally Latin indices <math>i,j,k,\cdots</math>. In total, <math>\psi(x)</math> has <math>4N</math> components, given in indices by <math>\psi^{i,\alpha}(x)</math>. The 'spinor' labels only how the field transforms under spacetime transformations.

Formally, <math>\psi(x)</math> is valued in a tensor product, that is, it is a function <math>\psi:\mathbb{R}^{1,3} \to \mathbb{C}^4 \otimes \mathbb{C}^N.</math>

Gauging proceeds similarly to the abelian <math>\text{U}(1)</math> case, with a few differences. Under a gauge transformation <math>U:\mathbb{R}^{1,3} \rightarrow \text{SU}(N),</math> the spinor fields transform as
<math display="block">\psi(x) \mapsto U(x)\psi(x)</math>
<math display="block">\bar\psi(x)\mapsto \bar\psi(x)U^\dagger(x).</math>
The matrix-valued gauge field <math>A_\mu</math> or <math>\text{SU}(N)</math> connection transforms as
<math display="block">A_\mu(x) \mapsto U(x)A_\mu(x)U(x)^{-1} + \frac{1}{g}(\partial_\mu U(x))U(x)^{-1},</math>
and the covariant derivatives defined 
<math display="block">D_\mu\psi = \partial_\mu \psi + igA_\mu\psi,</math>
<math display="block">D_\mu\bar\psi = \partial_\mu \bar\psi - ig\bar\psi A_\mu^\dagger</math>
transform as 
<math display="block">D_\mu\psi(x) \mapsto U(x)D_\mu\psi(x),</math>
<math display="block">D_\mu\bar\psi(x) \mapsto (D_\mu\bar\psi(x))U(x)^\dagger.</math>

Writing down a gauge-invariant action proceeds exactly as with the <math>\text{U}(1)</math> case, replacing the Maxwell Lagrangian with the [[Yang–Mills]] Lagrangian
<math display="block">S_{\text{Y-M}} = \int d^4x \,-\frac{1}{4}\text{Tr}(F^{\mu\nu}F_{\mu\nu})</math>
where the Yang–Mills field strength or curvature is defined here as
<math display="block">F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu - ig\left[A_\mu,A_\nu\right]</math>
and <math>[\cdot,\cdot]</math> is the matrix commutator.

The action is then
{{Equation box 1
|title='''QCD Action'''
|indent=:
|equation = <math>S_{\text{QCD}} = \int d^4x\,-\frac{1}{4}\text{Tr}(F^{\mu\nu}F_{\mu\nu}) + \bar\psi\,(iD\!\!\!\!\big / - m)\,\psi</math>
|border
|border colour =#50C878
|background colour = #ECFCF4
}}

==== Physical applications ====
For physical applications, the case <math>N=3</math> describes the [[quark]] sector of the [[Standard model]] which models [[strong interactions]]. Quarks are modelled as Dirac spinors; the gauge field is the [[gluon]] field. The case <math>N=2</math> describes part of the [[electroweak]] sector of the Standard model. Leptons such as electrons and neutrinos are the Dirac spinors; the gauge field is the <math>W</math> gauge boson.

==== Generalisations ====
This expression can be generalised to arbitrary Lie group <math>G</math> with connection <math>A_\mu</math> and a [[group representation|representation]] <math>(\rho, G, V)</math>, where the colour part of <math>\psi</math> is valued in <math>V</math>. Formally, the Dirac field is a function <math>\psi:\mathbb{R}^{1,3} \to \mathbb{C}^4\otimes V.</math>

Then <math>\psi</math> transforms under a gauge transformation <math>g:\mathbb{R}^{1,3} \to G</math> as
<math display="block">\psi(x) \mapsto \rho(g(x))\psi(x)</math>
and the covariant derivative is defined
<math display="block">D_\mu\psi = \partial_\mu\psi + \rho(A_\mu)\psi</math>
where here we view <math>\rho</math> as a [[Lie algebra]] representation of the Lie algebra <math>\mathfrak{g} = \text{L}(G)</math> associated to <math>G</math>.

This theory can be generalised to curved spacetime, but there are subtleties which arise in gauge theory on a general spacetime (or more generally still, a manifold) which, on flat spacetime, can be ignored. This is ultimately due to the [[contractible|contractibility]] of flat spacetime which allows us to view a gauge field and gauge transformations as defined globally on <math>\mathbb{R}^{1,3}</math>.

== See also ==

{{Col-begin}}
{{Col-break}}

=== Articles on the Dirac equation ===
* [[Dirac field]]
* [[Dirac spinor]]
* [[Gordon decomposition]]
* [[Klein paradox]]
* [[Nonlinear Dirac equation]]
{{Col-break}}

=== Other equations ===
* [[Breit equation]]
* [[Dirac–Kähler equation]]
* [[Klein–Gordon equation]]
* [[Rarita–Schwinger equation]]
* [[Two-body Dirac equations]]
* [[Weyl equation]]
* [[Majorana equation]]
{{Col-break}}

=== Other topics ===
* [[Fermionic field]]
* [[Feynman checkerboard]]
* [[Foldy–Wouthuysen transformation]]
* [[Quantum electrodynamics]]
* [[Quantum chromodynamics]]
{{col-end}}

== References ==
=== Citations ===
{{Reflist}}

=== Selected papers ===
* {{cite journal |last1=Anderson |first1=Carl|year=1933|doi=10.1103/PhysRev.43.491|title=The Positive Electron|journal=Physical Review|volume=43|issue=6|page=491|bibcode = 1933PhRv...43..491A |doi-access=free}}
* {{Cite journal |last1=Arminjon |first1 = M. |author2= F. Reifler
 | year = 2013
 | title = Equivalent forms of Dirac equations in curved spacetimes and generalized de Broglie relations
 | journal = Brazilian Journal of Physics
 | volume = 43
 | pages = 64–77
 | issue = 1–2
 | arxiv = 1103.3201 |doi=10.1007/s13538-012-0111-0
 |bibcode = 2013BrJPh..43...64A |s2cid= 38235437
 }}
* {{cite journal |last1=Dirac |first1=P. A. M. |doi=10.1098/rspa.1928.0023|title=The Quantum Theory of the Electron|year=1928|journal=Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences|volume=117|issue=778|pages=610–624|bibcode = 1928RSPSA.117..610D|url=http://www.math.ucsd.edu/~nwallach/Dirac1928.pdf |archive-url=https://web.archive.org/web/20150102071809/http://www.math.ucsd.edu/~nwallach/Dirac1928.pdf |archive-date=2015-01-02 |url-status=live| jstor=94981 |doi-access=free}}
* {{cite journal |last1=Dirac |first1=P. A. M.|url=http://gallica.bnf.fr/ark:/12148/bpt6k56219d/f388.table|jstor=95359|doi=10.1098/rspa.1930.0013|title=A Theory of Electrons and Protons|year=1930 |journal=Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences|volume=126|issue=801|pages=360–365|bibcode = 1930RSPSA.126..360D |doi-access=free}}
* {{cite journal |last1=Frisch |first1=R.|last2=Stern|first2=O. |doi=10.1007/BF01330773|title=Über die magnetische Ablenkung von Wasserstoffmolekülen und das magnetische Moment des Protons. I|year=1933 |journal=Zeitschrift für Physik|volume=85|issue=1–2|page=4|bibcode = 1933ZPhy...85....4F |s2cid=120793548}}

=== Textbooks ===
* {{cite book |author1=Bjorken, J D |author2=Drell, S| title=Relativistic Quantum mechanics|year=1964 |publisher=New York, McGraw-Hill |url=https://archive.org/details/relativisticquan0000bjor |url-access=registration }}
* {{cite book |author1=Halzen, Francis |author-link1 = Francis Halzen |author2=Martin, Alan | author-link2 = Alan Martin (physicist) |title=Quarks & Leptons: An Introductory Course in Modern Particle Physics |url=https://archive.org/details/quarksleptonsint0000halz |url-access=registration | publisher=John Wiley & Sons| year=1984|isbn = 9780471887416 }}
* {{cite book | author=Griffiths, D.J.| title=Introduction to Elementary Particles|edition= 2nd| publisher=Wiley-VCH|year= 2008|isbn= 978-3-527-40601-2}}
* {{cite book |author1=Rae, Alastair I. M. |author2=Jim Napolitano | title= Quantum Mechanics|edition= 6th| publisher=Routledge|year= 2015|isbn= 978-1482299182}}
* {{cite book | author=Schiff, L.I.| title=Quantum Mechanics| url=https://archive.org/details/quantummechanics0000schi| url-access=registration|edition= 3rd | publisher=McGraw-Hill| year= 1968}}
* {{cite book | author=Shankar, R.| title=Principles of Quantum Mechanics | edition = 2nd| publisher=Plenum| year= 1994}}
* {{cite book | author=Thaller, B.| title=The Dirac Equation|series= Texts and Monographs in Physics | publisher=Springer| year= 1992}}

== External links ==
{{Wikiquote}}
* [https://lamediateca.infn.it/mediateca/view.php?v=227 The history of the positron] Lecture given by Dirac in 1975
* [http://www.mathpages.com/home/kmath654/kmath654.htm The Dirac Equation] at MathPages
*[http://electron6.phys.utk.edu/qm2/modules/m9/dirac.htm  The Dirac equation for a spin {{1/2}} particle]

{{Quantum mechanics topics}}
{{Authority control}}

[[Category:Dirac equation| ]]
[[Category:1928 introductions]]
[[Category:Fermions]]
[[Category:Partial differential equations]]
[[Category:Paul Dirac|Equation]]
[[Category:Quantum field theory]]
[[Category:Spinors]]
