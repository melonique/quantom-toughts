{{Short description|Macroscopic processes showing quantum behavior}}
'''Macroscopic quantum phenomena''' are processes showing [[Quantum mechanics|quantum behavior]] at the [[macroscopic scale]], rather than at the [[Atom|atomic scale]] where quantum effects are prevalent. The best-known examples of macroscopic quantum phenomena are [[superfluidity]] and [[superconductivity]]; other examples include the [[quantum Hall effect]] and [[topological order]]. Since 2000 there has been extensive experimental work on quantum gases, particularly [[Bose–Einstein condensate]]s.

Between 1996 and 2016 six [[Nobel Prize]]s were given for work related to macroscopic quantum phenomena.<ref>These [[List of Nobel laureates in Physics|Nobel prizes]] were for the discovery of super-fluidity in [[helium-3]] (1996), for the discovery of the [[fractional quantum Hall effect]] (1998), for the demonstration of [[Bose–Einstein condensation]] (2001), for contributions to the theory of superconductivity and [[superfluidity]] (2003), for the discovery of [[giant magnetoresistance]] (2007), and for theoretical discoveries of [[topological phase transitions]] and [[topological phases of matter]] (2016).</ref> Macroscopic quantum phenomena can be observed in [[superfluid helium]] and in [[superconductors]],<ref>D.R. Tilley and J. Tilley, ''Superfluidity and Superconductivity'', Adam Hilger, Bristol and New York, 1990</ref> but also in dilute quantum gases, [[dressed particle|dressed photons]] such as [[Bose–Einstein condensation of polaritons|polaritons]] and in [[laser]] light. Although these media are very different, they are all similar in that they show macroscopic quantum behavior, and in this respect they all can be referred to as [[quantum fluid]]s.

Quantum phenomena are generally classified as macroscopic when the quantum states are occupied by a large number of particles (of the order of the [[Avogadro number]]) or the quantum states involved are macroscopic in size (up to kilometer-sized in [[superconducting]] wires).<ref>{{cite journal|last1=Jaeger|first1=Gregg|title=What in the (quantum) world is macroscopic?|journal=American Journal of Physics|date=September 2014|volume=82|issue=9|pages=896–905|doi=10.1119/1.4878358|bibcode = 2014AmJPh..82..896J }}</ref>

==Consequences of the macroscopic occupation==
[[File:Particles in a box02.jpg|250px|thumb| Fig.&nbsp;1 Left: only one particle; usually the small box is empty. However, there is a nonzero probability that the particle is in the box. This chance is given by Eq.&nbsp;({{EquationNote|3}}). Middle: a few particles. There are usually some particles in the box. We can define an average, but the actual number of particles in the box has large fluctuations around this average. Right: a very large number of particles.  There is generally a large number of particles in the box. The fluctuations around the average are small compared to the number in the box.]]

The concept of macroscopically occupied quantum states is introduced by [[Fritz London]].<ref>Fritz London ''Superfluids'' (London, Wiley, 1954–1964)</ref><ref>{{Cite journal | last1 = Gavroglu | first1 = K. | last2 = Goudaroulis | first2 = Y. | doi = 10.1080/00033798800200291 | title = Understanding macroscopic quantum phenomena: The history of superfluidity 1941–1955 | journal = Annals of Science | volume = 45 | issue = 4 | pages = 367 | year = 1988 }}</ref> In this section it will be explained what it means if a single state is occupied by a very large number of particles. We start with the wave function of the state written as
{{NumBlk||<math display="block">\Psi = \Psi _0 \exp(i\varphi)</math>|{{EquationRef|1}} }}
with Ψ<sub>0</sub> the amplitude and <math>\varphi</math> the phase. The wave function is normalized so that
{{NumBlk||<math display="block">\int \Psi \Psi ^* \mathrm{d}V = N_s.</math>|{{EquationRef|2}} }}
The physical interpretation of the quantity
{{NumBlk||<math display="block">\Psi \Psi ^* \Delta V</math>|{{EquationRef|3}}}}
depends on the number of particles. Fig.&nbsp;1 represents a container with a certain number of particles with a small control volume Δ''V'' inside. We check from time to time how many particles are in the control box. We distinguish three cases:

# There is only one particle. In this case the control volume is empty most of the time. However, there is a certain chance to find the particle in it given by Eq.&nbsp;({{EquationNote|3}}). The probability is proportional to Δ''V''. The factor ΨΨ<sup>∗</sup> is called the chance density.
# If the number of particles is a bit larger there are usually some particles inside the box. We can define an average, but the actual number of particles in the box has relatively large fluctuations around this average.
# In the case of a very large number of particles there will always be a lot of particles in the small box. The number will fluctuate but the fluctuations around the average are relatively small. The average number is proportional to Δ''V'' and ΨΨ<sup>∗</sup> is now interpreted as the particle density.

In quantum mechanics the particle probability flow density ''J''<sub>p</sub> (unit: particles per second per m<sup>2</sup>), also called [[probability current]], can be derived from the [[Schrödinger equation]] to be
{{NumBlk||<math display="block">\vec{J}_p = \frac{1}{2m}\left(\Psi \left(i \frac{h}{2\pi}\vec{\nabla} -q \vec{A}\right)\Psi^* + \mathrm{cc} \right)</math>|{{EquationRef|4}} }}
with ''q'' the charge of the particle and <math>\vec{A}</math> the vector potential; cc stands for the complex conjugate of the other term inside the brackets.<ref>{{Cite web|url=https://feynmanlectures.caltech.edu/III_21.html|title=The Feynman Lectures on Physics Vol. III Ch. 21: The Schrödinger Equation in a Classical Context: A Seminar on Superconductivity, Section 21-5: Superconductivity|website=feynmanlectures.caltech.edu|access-date=2020-01-12}}</ref> For neutral particles {{math|1=''q'' = 0}}, for superconductors {{math|1=''q'' = −2''e''}} (with ''e'' the elementary charge) the charge of Cooper pairs. With Eq.&nbsp;({{EquationNote|1}})
{{NumBlk||<math display="block">\vec{J}_p = \frac {\Psi_0^2}{m}\left(\frac{h}{2 \pi} \vec{\nabla} \varphi - q \vec{A}\right).</math>|{{EquationRef|5}} }}
If the wave function is macroscopically occupied the particle probability flow density becomes a particle flow density. We introduce the fluid velocity ''v''<sub>s</sub> via the mass flow density
{{NumBlk||<math display="block">m\vec{J}_p=\rho _s \vec{v}_s.</math>|{{EquationRef|6}} }}
The density (mass per volume) is
{{NumBlk||<math display="block">m \Psi_0^2 = \rho_s</math>|{{EquationRef|7}} }}
so Eq.&nbsp;({{EquationNote|5}}) results in
{{NumBlk||<math display="block">\vec{v}_s=\frac{1}{m}\left(\frac{h}{2\pi}\vec{\nabla}\varphi-q\vec{A}\right).</math>|{{EquationRef|8}} }}
This important relation connects the velocity, a classical concept, of the condensate with the phase of the wave function, a quantum-mechanical concept.

==Superfluidity==
{{main|Superfluid}}
[[File:Vortex lines in rotating helium01.jpg|350px|thumb| Fig.&nbsp;2 Lower part: vertical cross section of a column of superfluid helium rotating around a vertical axis. Upper part: Top view of the surface showing the pattern of vortex cores. From left to right the rotation speed is increased, resulting in an increasing vortex-line density.]]
At temperatures below the [[lambda point]], helium shows the unique property of superfluidity. The fraction of the liquid that forms the superfluid component is a macroscopic [[quantum fluid]]. The helium atom is a [[neutral particle]], so {{math|1=''q'' = 0}}. Furthermore, when considering [[Superfluid helium-4|helium-4]], the relevant particle mass is {{math|1=''m'' = ''m''{{sub|4}}}}, so Eq.&nbsp;({{EquationNote|8}}) reduces to
{{NumBlk||<math display="block">\vec{v}_s = \frac{1}{m_4}\frac{h}{2\pi}\vec{\nabla}\varphi.</math>|{{EquationRef|9}} }}
For an arbitrary loop in the liquid, this gives
{{NumBlk||<math display="block">\oint \vec{v}_s\cdot \mathrm{d}\vec{s}=\frac{h}{2\pi m_4} \oint \vec{\nabla}\varphi \cdot \mathrm{d}\vec{s}.</math>|{{EquationRef|10}} }}

Due to the single-valued nature of the wave function
{{NumBlk||<math display="block">\oint \vec{\nabla}\varphi \cdot \mathrm{d}\vec{s} = 2\pi n</math>|{{EquationRef|11a}}}}
with {{mvar|n}} integer, we have
{{NumBlk||<math display="block">\oint \vec{v}_s \cdot \mathrm{d}\vec{s} = \frac{h}{m_4}n.</math>|{{EquationRef|11b}}}}
The quantity{{NumBlk||<math display="block">\kappa =\frac{h}{m_4} \approx 1.0 \times 10^{-7} \,\mathrm{m^2/s} </math>|{{EquationRef|12}} }}
is the quantum of circulation. For a circular motion with radius ''r''
{{NumBlk||<math display="block">\oint \vec{v}_s\cdot \mathrm{d}\vec{s} = 2\pi v_sr.</math>|{{EquationRef|13}} }}
In case of a single quantum ({{math|1=''n'' = 1}})
{{NumBlk||<math display="block">v_s = \frac{1}{2\pi r}\kappa.</math>|{{EquationRef|14}} }}
When superfluid helium is put in rotation, Eq.&nbsp;({{EquationNote|13}}) will not be satisfied for all loops inside the liquid unless the rotation is organized around vortex lines (as depicted in Fig.&nbsp;2). These lines have a vacuum core with a diameter of about 1&nbsp;Å (which is smaller than the average particle distance). The superfluid helium rotates around the core with very high speeds. Just outside the core (''r'' = 1&nbsp;Å), the velocity is as large as 160&nbsp;m/s. The cores of the vortex lines and the container rotate as a solid body around the rotation axes with the same angular velocity. The number of vortex lines increases with the angular velocity (as shown in the upper half of the figure). Note that the two right figures both contain six vortex lines, but the lines are organized in different stable patterns.<ref>{{cite journal|author1=E.J. Yarmchuk  |author2=R.E. Packard |name-list-style=amp |journal=J. Low Temp. Phys.| volume=46 | year=1982|page=479|title=Photographic studies of quantized vortex lines|doi=10.1007/BF00683912|bibcode = 1982JLTP...46..479Y |issue=5–6 |s2cid=120018419 }}</ref>

==Superconductivity==
{{main|Superconductivity}}
In the original paper<ref>{{Cite journal|last1=Landau|first1=Lev Davidovich|last2=Ginzburg|first2=Vitaly L| date=1950 | title=On the theory of superconductivity | url=https://cds.cern.ch/record/486430|journal=Zh. Eksp. Teor. Fiz. | language=en | volume=20}}</ref> Ginzburg and Landau observed the existence of two types of superconductors depending 
on the energy of the interface between the normal and superconducting states. The [[Meissner state]] breaks down when the applied magnetic field is too large. Superconductors can be divided into two classes according to how this breakdown occurs. In [[Type I superconductor]]s, superconductivity is abruptly destroyed when the strength of the applied field rises above a critical value ''H<sub>c</sub>''. Depending on the geometry of the sample, one may obtain an intermediate state<ref>
{{cite book
 |author=Lev D. Landau
 |author2=Evgeny M. Lifschitz
 |title=Electrodynamics of Continuous Media
 |series=[[Course of Theoretical Physics]]
 |volume=8
 |publisher=[[Butterworth-Heinemann]]
 |location=Oxford
 |date=1984
 |isbn=978-0-7506-2634-7
}}</ref> consisting of a baroque pattern<ref>
{{cite journal
 |author=David J. E. Callaway
 |date=1990
 |title=On the remarkable structure of the superconducting intermediate state
 |journal = [[Nuclear Physics B]]
 |volume=344 |pages=627–645
 |doi=10.1016/0550-3213(90)90672-Z
 |issue=3
| bibcode = 1990NuPhB.344..627C }}</ref> of regions of normal material carrying a magnetic field mixed with regions of superconducting material containing no field. In [[Type II superconductor]]s, raising the applied field past a critical value ''H''<sub>''c''1</sub> leads to a mixed state (also known as the vortex state) in which an increasing amount of [[magnetic flux]] penetrates the material, but there remains no resistance to the flow of electric current as long as the current is not too large. At a second critical field strength ''H''<sub>''c''2</sub>, superconductivity is destroyed. The mixed state is actually caused by vortices in the electronic superfluid, sometimes called [[fluxon]]s because the flux carried by these vortices is [[quantum|quantized]]. Most pure [[chemical element|elemental]] superconductors, except [[niobium]] and [[carbon nanotube]]s, are Type&nbsp;I, while almost all impure and compound superconductors are Type&nbsp;II.

The most important finding from [[Ginzburg–Landau theory]] was made by [[Alexei Alexeyevich Abrikosov|Alexei Abrikosov]] in 1957. 
He used Ginzburg–Landau theory to explain experiments on superconducting alloys and thin films. He found that in a type-II superconductor in a high magnetic field, the field penetrates in a triangular lattice of quantized tubes of flux [[Abrikosov vortices|vortices]]. For this and related work, he was awarded the Nobel Prize in 2003 with [[Vitaly Ginzburg|Ginzburg]] and [[Anthony James Leggett|Leggett]].<ref>{{Cite journal |last=Abrikosov |first=Alexei A. |date=2004-07-19 |title=Type H Superconductors and the Vortex Lattice |journal=ChemPhysChem |language=en |volume=5 |issue=7 |pages=924–929 |doi=10.1002/cphc.200400138 |issn=1439-4235|doi-access=free |pmid=15298378 }}</ref>

===Fluxoid quantization===
For [[Superconductivity|superconductors]] the bosons involved are the so-called [[Cooper pairs]] which are [[quasiparticle]]s formed by two electrons.<ref>{{cite book|author=M. Tinkham|title=Introduction to Superconductivity | publisher= McGraw-Hill |year=1975}}</ref> Hence ''m'' = 2''m''<sub>e</sub> and ''q'' = −2''e'' where ''m''<sub>e</sub> and ''e'' are the mass of an electron and the elementary charge. It follows from Eq.&nbsp;({{EquationNote|8}}) that
{{NumBlk||<math display="block">2m_e \vec{v}_s=\frac{h}{2\pi}\vec{\nabla}\varphi+2e\vec{A}.</math>
|{{EquationRef|15}} }}

Integrating Eq.&nbsp;({{EquationNote|15}}) over a closed loop gives
{{NumBlk||<math display="block">2m_e\oint \vec{v}_s\cdot \mathrm{d}\vec{s} = \oint\left(\frac{h}{2\pi}\vec{\nabla}\varphi+2e\vec{A}\right) \cdot \mathrm{d}\vec{s}</math>
|{{EquationRef|16}} }}

As in the case of helium we define the vortex strength
{{NumBlk||<math display="block">\oint \vec{v}_s\cdot\mathrm{d}\vec{s} =\kappa</math>|{{EquationRef|17}} }}
and use the general relation
{{NumBlk||<math display="block">\oint \vec{A}\cdot\mathrm{d}\vec{s} = \Phi</math>|{{EquationRef|18}} }}
where Φ is the magnetic flux enclosed by the loop. The so-called [[fluxoid]] is defined by
{{NumBlk||<math display="block">\Phi_v=\Phi-\frac{2m_e}{2e}\kappa.</math>|{{EquationRef|19}} }}
In general the values of ''κ'' and Φ depend on the choice of the loop. Due to the single-valued nature of the wave function and Eq.&nbsp;({{EquationNote|16}}) the fluxoid is quantized
{{NumBlk||<math display="block">\Phi_v = n\frac{h}{2e}.</math>|{{EquationRef|20}} }}

The unit of quantization is called the [[flux quantum]]
{{NumBlk||<math display="block">\Phi_0=\frac{h}{2e} = 2.067833758(46)\times 10^{-15} \, \mathrm{Wb}.</math>|{{EquationRef|21}} }}

The flux quantum plays a very important role in superconductivity. The earth magnetic field is very small (about 50&nbsp;μT), but it generates one flux quantum in an area of 6&nbsp;μm by 6&nbsp;μm. So, the flux quantum is very small. Yet it was measured to an accuracy of 9 digits as shown in Eq.&nbsp;({{EquationNote|21}}). Nowadays the value given by Eq.&nbsp;({{EquationNote|21}}) is exact by definition.

[[File:Superconducting rings01.jpg|350px|thumb| Fig.&nbsp;3. Two superconducting rings in an applied magnetic field
{{ordered list | list-style-type = lower-alpha
| 1 = thick superconducting ring. The integration loop is completely in the region with {{math|1=''v''<sub>s</sub> = 0}};<br>
| 2 = thick superconducting ring with a weak link. The integration loop is completely in the region with {{math|1=''v''<sub>s</sub> = 0}} except for a small region near the weak link.}}]]
In Fig.&nbsp;3 two situations are depicted of superconducting rings in an external magnetic field. One case is a thick-walled ring and in the other case the ring is also thick-walled, but is interrupted by a weak link. In the latter case we will meet the famous [[Josephson relations]]. In both cases we consider a loop inside the material. In general a superconducting circulation current will flow in the material. The total magnetic flux in the loop is the sum of the applied flux Φ<sub>a</sub> and the self-induced flux Φ<sub>s</sub> induced by the circulation current
{{NumBlk||<math display="block">\Phi = \Phi_a + \Phi_s.</math>|{{EquationRef|22}} }}

===Thick ring===
The first case is a thick ring in an external magnetic field (Fig.&nbsp;3a). The currents in a superconductor only flow in a thin layer at the surface. The thickness of this layer is determined by the so-called [[London penetration depth]]. It is of μm size or less. We consider a loop far away from the surface so that ''v''<sub>s</sub>&nbsp;=&nbsp;0 everywhere so ''κ''&nbsp;=&nbsp;0. In that case the fluxoid is equal to the magnetic flux (Φ<sub>v</sub>&nbsp;=&nbsp;Φ). If ''v''<sub>s</sub>&nbsp;=&nbsp;0 Eq.&nbsp;({{EquationNote|15}}) reduces to
{{NumBlk||<math display="block">0=\frac{h}{2\pi}\vec{\nabla}{\varphi}+2e\vec{A}.</math>|{{EquationRef|23}} }}
Taking the rotation gives
{{NumBlk||<math display="block">0 = \frac{h}{2\pi}\vec{\nabla} \times \vec{\nabla}\varphi + 2e \vec{\nabla}\times\vec{A}.</math>|{{EquationRef|24}} }}

Using the well-known relations <math>\vec{\nabla} \times \vec{\nabla}\varphi = 0</math> and <math>\vec{\nabla}\times\vec{A} = \vec{B}</math> shows that the magnetic field in the bulk of the superconductor is zero as well. So, for thick rings, the total magnetic flux in the loop is quantized according to
{{NumBlk||<math display="block">\Phi = n \Phi_0.</math>|{{EquationRef|25}} }}

===Interrupted ring, weak links===
[[File:Point Contact01.jpg|350px|thumb| Fig.&nbsp;4. Schematic of a weak link carrying a superconducting current ''i''<sub>s</sub>. The voltage difference over the link is ''V''. The phases of the superconducting wave functions at the left and right side are assumed to be constant (in space, not in time) with values of ''φ''<sub>1</sub> and ''φ''<sub>2</sub> respectively.]]
Weak links play a very important role in modern superconductivity. In most cases weak links are oxide barriers between two superconducting thin films, but it can also be a crystal boundary (in the case of [[High temperature superconductivity|high-Tc superconductor]]s). A schematic representation is given in Fig.&nbsp;4. Now consider the ring which is thick everywhere except for a small section where the ring is closed via a weak link (Fig.&nbsp;3b). The velocity is zero except near the weak link. In these regions the velocity contribution to the total phase change in the loop is given by (with Eq.&nbsp;({{EquationNote|15}}))
{{NumBlk||<math display="block">\Delta\varphi^*=-\frac{2\pi}{h}2m_e\int_\delta \vec{v}_s\cdot\mathrm{d}\vec{s}.</math>|{{EquationRef|26}} }}

The line integral is over the contact from one side to the other in such a way that the end points of the line are well inside the bulk of the superconductor where {{math|1=''v''<sub>s</sub> = 0}}. So the value of the line integral is well-defined (e.g. independent of the choice of the end points). With Eqs.&nbsp;({{EquationNote|19}}), ({{EquationNote|22}}), and ({{EquationNote|26}})
{{NumBlk||<math display="block">\Phi_a+\Phi_s+\Phi_0\frac{\Delta\varphi^*}{2\pi}=n\Phi_0.</math>|{{EquationRef|27}} }}

Without proof we state that the supercurrent through the weak link is given by the so-called DC [[Josephson relation]]<ref>{{cite journal|author=B.D. Josephson|title=Possible new effects in superconductive tunneling|journal=Phys. Lett.| volume=1 |pages=251–253|year=1962|doi=10.1016/0031-9163(62)91369-0|issue=7|bibcode = 1962PhL.....1..251J }}</ref>
{{NumBlk||<math display="block">i_s = i_1\sin(\Delta\varphi^*).</math>|{{EquationRef|28}} }}

The voltage over the contact is given by the AC Josephson relation
{{NumBlk||<math display="block">V=\frac{1}{2\pi}\frac{h}{2e}\frac{\mathrm{d}\Delta\varphi^*}{\mathrm{d}t}.</math>|{{EquationRef|29}} }}

The names of these relations (DC and AC relations) are misleading since they both hold in DC and AC situations. In the steady state (constant <math>\Delta\varphi^*</math>) Eq.&nbsp;({{EquationNote|29}}) shows that ''V''=0 while a nonzero current flows through the junction. In the case of a constant applied voltage (voltage bias) Eq.&nbsp;({{EquationNote|29}}) can be integrated easily and gives
{{NumBlk||<math display="block">\Delta\varphi^* = 2\pi\frac{2eV}{h}t.</math>|{{EquationRef|30}} }}

Substitution in Eq.&nbsp;({{EquationNote|28}}) gives
{{NumBlk||<math display="block">i_s = i_1\sin\left(2\pi\frac{2eV}{h}t\right).</math>|{{EquationRef|31}} }}

This is an AC current. The frequency
{{NumBlk||<math display="block">\nu = \frac{2eV}{h} = \frac{V}{\Phi_0}</math>|{{EquationRef|32}} }}
is called the Josephson frequency. One μV gives a frequency of about 500&nbsp;MHz. By using Eq.&nbsp;({{EquationNote|32}}) the flux quantum is determined with the high precision as given in Eq.&nbsp;({{EquationNote|21}}).

The energy difference of a Cooper pair, moving from one side of the contact to the other, is {{math|1=Δ''E'' = 2eV}}. With this expression Eq.&nbsp;({{EquationNote|32}}) can be written as {{math|1=Δ''E'' = ''hν''}} which is the relation for the energy of a photon with frequency ''ν''.

:The AC Josephson relation (Eq.&nbsp;({{EquationNote|29}})) can be easily understood in terms of Newton's law, (or from one of the [[London equation]]'s<ref>{{Cite journal | last1 = London | first1 = F.| author-link1 = Fritz London| last2 = London | first2 = H.| author-link2 = Heinz London| doi = 10.1098/rspa.1935.0048 | title = The Electromagnetic Equations of the Supraconductor | journal = Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences | volume = 149 | issue = 866 | pages = 71 | year = 1935 |bibcode = 1935RSPSA.149...71L | doi-access = free }}</ref>). We start with Newton's law <math display="block">\vec F = m \frac{\mathrm{d}\vec v_s}{\mathrm{d}t}.</math>
:Substituting the expression for the [[Lorentz force]] <math display="block">\vec F = q\left(\vec E+\vec v_s\times \vec B\right)</math> and using the general expression for the co-moving time derivative <math display="block">\frac{\mathrm{d}\vec v_s}{\mathrm{d}t} = \frac{\partial \vec v_s}{\partial t} + \frac{1}{2} \vec \nabla v_s^2 - \vec v_s\times \left(\vec \nabla\times \vec v_s\right)</math> gives <math display="block">\frac{q}{m} \left(\vec E + \vec v_s\times \vec B\right) = \frac{\partial \vec v_s}{\partial t} + \frac{1}{2} \vec \nabla v_s^2 - \vec v_s\times \left(\vec \nabla\times \vec v_s\right).</math>
:Eq.&nbsp;({{EquationNote|8}}) gives <math display="block">0 = \vec\nabla\times\vec v_s + \frac{q}{m}\vec\nabla\times\vec A = \vec\nabla\times\vec v_s + \frac{q}{m}\vec B</math> so <math display="block">\frac{q}{m}\vec E = \frac{\partial \vec v_s}{\partial t}+ \frac{1}{2} \vec \nabla v_s^2.</math>
:Take the line integral of this expression. In the end points the velocities are zero so the ∇''v''<sup>2</sup> term gives no contribution. Using <math display="block">\int \vec E\cdot\mathrm{d}\vec \ell = -V</math> and Eq.&nbsp;({{EquationNote|26}}), with {{math|1=''q'' = −2''e''}} and {{math|1=''m'' = 2''m''<sub>e</sub>}}, gives Eq.&nbsp;({{EquationNote|29}}).

===DC SQUID===
{{main|SQUID}}
[[File:DC Squid01.jpg|350px|thumb| Fig.&nbsp;5. Two superconductors connected by two weak links. A current and a magnetic field are applied.]]
[[File:Ic B dependence01.jpg|300px|thumb| Fig.&nbsp;6. Dependence of the critical current of a DC-SQUID on the applied magnetic field]]
Fig.&nbsp;5 shows a so-called DC [[SQUID]]. It consists of two superconductors connected by two weak links. The fluxoid quantization of a loop through the two bulk superconductors and the two weak links demands
{{NumBlk||<math display="block">\Delta\varphi_a^*=\Delta\varphi^*_b+2\pi\frac{\Phi}{\Phi_0}+2\pi n.</math>|{{EquationRef|33}} }}

If the self-inductance of the loop can be neglected the magnetic flux in the loop Φ is equal to the applied flux
{{NumBlk||<math display="block">\Phi = \Phi_a=BA</math>|{{EquationRef|34}} }}
with ''B'' the magnetic field, applied perpendicular to the surface, and ''A'' the surface area of the loop. The total supercurrent is given by
{{NumBlk||<math display="block">i_s = i_1 \sin(\Delta\varphi_a^*) + i_1\sin(\Delta\varphi_b^*).</math>|{{EquationRef|35}} }}

Substitution of Eq({{EquationNote|33}}) in ({{EquationNote|35}}) gives
{{NumBlk||<math display="block">i_s = i_1 \sin\left(\Delta\varphi_b^* + 2\pi\frac{\Phi}{\Phi_0}\right) + i_1\sin(\Delta\varphi_b^*).</math>|{{EquationRef|36}} }}

Using a well known geometrical formula we get
{{NumBlk||<math display="block">i_s = 2 i_1 \sin\left(\Delta\varphi_b^*+\pi\frac{\Phi}{\Phi_0}\right)\cos(\pi\frac{\Phi_a}{\Phi_0}).</math>|{{EquationRef|37}} }}

Since the sin-function can vary only between −1 and +1 a steady solution is only possible if the applied current is below a critical current given by
{{NumBlk||<math display="block">i_c = 2 i_1 \left|\cos\left(\pi\frac{\Phi_a}{\Phi_0}\right)\right|.</math>|{{EquationRef|38}} }}

Note that the critical current is periodic in the applied flux with period {{math|Φ<sub>0</sub>}}. The dependence of the critical current on the applied flux is depicted in Fig.&nbsp;6. It has a strong resemblance with the interference pattern generated by a laser beam behind a double slit. In practice the critical current is not zero at half integer values of the flux quantum of the applied flux. This is due to the fact that the self-inductance of the loop cannot be neglected.<ref>{{cite journal| author1=A.TH.A.M. de Waele  |author2=R. de Bruyn Ouboter |name-list-style=amp |title=Quantum-interference phenomena in point contacts between two superconductors|journal=Physica|volume= 41|year=1969|pages=225–254| doi=10.1016/0031-8914(69)90116-5 | issue=2|bibcode = 1969Phy....41..225D }}</ref>

===Type II superconductivity===
{{main|Type-II superconductor}}
[[File:Flux lines in a superconductor01.jpg|350px|thumb| Fig.&nbsp;7. Magnetic flux lines penetrating a type-II superconductor. The currents in the superconducting material generate a magnetic field which, together with the applied field, result in bundles of quantized flux.]]
[[Type-II superconductor|Type-II superconductivity]] is characterized by two critical fields called ''B''<sub>c1</sub> and ''B''<sub>c2</sub>. At a magnetic field ''B''<sub>c1</sub> the applied magnetic field starts to penetrate the sample, but the sample is still superconducting. Only at a field of ''B''<sub>c2</sub> the sample is completely normal. For fields in between ''B''<sub>c1</sub> and ''B''<sub>c2</sub> magnetic flux penetrates the superconductor in well-organized patterns, the so-called [[Abrikosov vortex]] lattice similar to the pattern shown in Fig.&nbsp;2.<ref>{{Cite journal | last1 = Essmann | first1 = U. | last2 = Träuble | first2 = H. | doi = 10.1016/0375-9601(67)90819-5 | title = The direct observation of individual flux lines in type II superconductors | journal = Physics Letters A | volume = 24 | issue = 10 | pages = 526 | year = 1967 |bibcode = 1967PhLA...24..526E }}</ref> A cross section of the superconducting plate is given in Fig.&nbsp;7. Far away from the plate the field is homogeneous, but in the material superconducting currents flow which squeeze the field in bundles of exactly one flux quantum. The typical field in the core is as big as 1 tesla. The currents around the vortex core flow in a layer of about 50&nbsp;nm with current densities on the order of 15{{e|12}} A/m<sup>2</sup>. That corresponds with 15 million ampère in a wire of one mm<sup>2</sup>.

==Dilute quantum gases==
The classical types of quantum systems, superconductors and superfluid helium, were discovered in the beginning of the 20th century. Near the end of the 20th century, scientists discovered how to create very dilute atomic or molecular gases, cooled first by [[laser cooling]] and then by [[Evaporative cooling (atomic physics)|evaporative cooling]].<ref>{{cite journal| author1 = Anderson, M.H. | author2 = Ensher, J.R. | author3 = Matthews, M.R. | author4 = Wieman, C.E. | author5 = Cornell, E.A. | title=Observation of Bose–Einstein Condensation in a Dilute Atomic Vapor|journal=Science|volume= 269|pages=198–201 |year=1995|doi=10.1126/science.269.5221.198|pmid=17789847|issue=5221|bibcode = 1995Sci...269..198A |doi-access=free}}</ref> They are trapped using magnetic fields or optical dipole potentials in ultrahigh vacuum chambers. Isotopes which have been used include rubidium (Rb-87 and Rb-85), strontium (Sr-87, Sr-86, and Sr-84) potassium (K-39 and K-40), sodium (Na-23), lithium (Li-7 and Li-6), and hydrogen (H-1). The temperatures to which they can be cooled are as low as a few nanokelvin. The developments have been very fast in the past few years. A team of NIST and the University of Colorado has succeeded in creating and observing vortex quantization in these systems.<ref>{{cite journal|author1=Schweikhard, V. | author2 = Coddington, I. | author3 = Engels, P. | author4 = Tung, S. | author5 = Cornell, E.A.|title=Vortex-Lattice Dynamics in Rotating Spinor Bose-Einstein Condensates|journal=Phys. Rev. Lett.|volume=93|page= 210403 |year=2004|bibcode = 2004PhRvL..93c0403N |doi = 10.1103/PhysRevLett.93.030403|pmid=15323808|issue=3 |hdl=2433/39923|hdl-access=free}}</ref> The concentration of vortices increases with the angular velocity of the rotation, similar to the case of superfluid helium and superconductivity.

==See also==
{{Div col}}
*[[Charge density wave]]
*[[Chiral magnetic effect]]
*[[Domain wall (magnetism)]]
*[[Flux pinning]]
*[[Flux quantization]]
*[[Ginzburg–Landau theory]]
*[[Husimi Q representation]]
*[[Josephson effect]]
*[[Magnetic flux quantum]]
*[[Meissner effect]]
*[[N-slit interferometric equation]]
*[[Quantum boomerang effect]]
*[[Quantum turbulence]]
*[[Quantum vortex]]
*[[Schrödinger's cat|Schrödinger's cat paradox]]
*[[Second sound]]
*[[SQUID]]
*[[Superconductivity]]
*[[Topological defect]]
*[[Type-I superconductor]]
*[[Type-II superconductor]]
{{Div col end}}

==References and footnotes==
{{Reflist|35em}}

[[Category:Atomic, molecular, and optical physics]]
[[Category:Condensed matter physics]]
[[Category:Exotic matter]]
[[Category:Phases of matter]]
[[Category:Quantum phases]]
