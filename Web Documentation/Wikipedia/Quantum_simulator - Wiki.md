{{Use American English|date=January 2019}}{{Short description|Simulators of quantum mechanical systems}}
[[File:Quantum Simulator Crystal.jpg|thumb|In this photograph of a quantum simulator crystal the ions [[fluorescence|are fluorescing]], indicating the qubits are all in the same state (either "1" or "0"). Under the right experimental conditions, the ion crystal spontaneously forms this nearly perfect triangular [[crystal structure|lattice]] structure. ''Credit: Britton/NIST'']]
[[Image:Quantum Simulator Illustration (150 dpi).jpg|thumb|Trapped ion quantum simulator illustration: The heart of the simulator is a two-dimensional crystal of beryllium ions (blue spheres in the graphic); the outermost electron of each ion is a quantum bit (qubit, red arrows). The ions are confined by a large magnetic field in a device called a Penning trap (not shown). Inside the trap the crystal rotates clockwise. ''Credit: Britton/NIST'']]

'''Quantum simulators''' permit the study of a [[quantum system]] in a programmable fashion. In this instance, simulators are special purpose devices designed to provide insight about specific [[physics]] problems.<ref name=Johnson2014>{{cite journal
|doi=10.1140/epjqt10
|title=What is a quantum simulator?
|year=2014
|last1=Johnson
|first1=Tomi H.
|last2=Clark
|first2=Stephen R.
|last3=Jaksch
|first3=Dieter
|journal=EPJ Quantum Technology
|volume=1
|number=10|arxiv=1405.2831
|s2cid=120250321
}}</ref><ref name=nist-pg>
{{NIST-PD
|article=NIST Physicists Benchmark Quantum Simulator with Hundreds of Qubits
|Date= May 2, 2012
|url=https://www.nist.gov/public_affairs/tech-beat/tb20120502.cfm/
|author=Michael E. Newman
|accessdate=2013-02-22}}</ref><ref name=Britton>
{{cite journal
|doi=10.1038/nature10981
|url=http://tf.boulder.nist.gov/general/pdf/2614.pdf
|arxiv=1204.5789 
|bibcode = 2012Natur.484..489B
|title=Engineered two-dimensional Ising interactions in a trapped-ion quantum simulator with hundreds of spins
|year=2012
|last1=Britton
|first1=Joseph W.
|last2=Sawyer
|first2=Brian C.
|last3=Keith
|first3=Adam C.
|last4=Wang
|first4=C.-C. Joseph
|last5=Freericks
|first5=James K.
|last6=Uys
|first6=Hermann
|last7=Biercuk
|first7=Michael J.
|last8=Bollinger
|first8=John J.
|journal=Nature
|volume=484
|issue=7395
|pages=489–92
|pmid=22538611 |s2cid=4370334
}} 
Note: This manuscript is a contribution of the US National Institute of Standards and Technology and is not subject to US copyright.</ref> Quantum simulators may be contrasted with generally programmable "digital" [[quantum computing|quantum computers]], which would be capable of solving a wider class of quantum problems.

A '''universal quantum simulator''' is a [[quantum computer]] proposed by [[Yuri Manin]] in 1980<ref name="manin1980vychislimoe">{{cite book
  | author=Manin, Yu. I.
  | title=Vychislimoe i nevychislimoe
  | trans-title=Computable and Noncomputable
  | year=1980
  | publisher=Sov.Radio
  | url=http://publ.lib.ru/ARCHIVES/M/MANIN_Yuriy_Ivanovich/Manin_Yu.I._Vychislimoe_i_nevychislimoe.(1980).%5Bdjv%5D.zip
  | pages=13–15
  | language=ru
  | access-date=2013-03-04
  | url-status=dead
  | archive-url=https://web.archive.org/web/20130510173823/http://publ.lib.ru/ARCHIVES/M/MANIN_Yuriy_Ivanovich/Manin_Yu.I._Vychislimoe_i_nevychislimoe.(1980).%5Bdjv%5D.zip
  | archive-date=2013-05-10
  }}
</ref> and [[Richard Feynman]] in 1982.<ref name="f82">{{cite journal
  | last = Feynman
  | first = Richard
  | author-link = Richard Feynman
  | title = Simulating Physics with Computers
  | journal = International Journal of Theoretical Physics
  | volume = 21
  | pages = 467–488
  | year = 1982
  | doi = 10.1007/BF02650179
  |bibcode = 1982IJTP...21..467F
  | issue = 6–7 | citeseerx = 10.1.1.45.9310
  | s2cid = 124545445
 }}
</ref>

A quantum system may be simulator by either a [[Turing machine]] or a [[quantum Turing machine]], as a classical [[Turing machine]] is able to simulate a [[universal quantum computer]] (and therefore any simpler quantum simulator), meaning they are equivalent from the point of view of [[computability theory]]. In other words, quantum computers provide no additional power over classical computers in terms of computability. However, it is suspected that they can solve certain problems faster than classical computers, meaning they may be in different [[complexity class]]es, which is why quantum Turing machines may be useful for simulating quantum systems.

A [[quantum system]] of many particles could be simulated by a quantum computer using a number of [[qubit|quantum bits]] similar to the number of particles in the original system.<ref name="f82" /> This has been extended to much larger classes of quantum systems.<ref>{{cite arXiv|eprint=quant-ph/0301023 |author1=Dorit Aharonov|author2=Amnon Ta-Shma|title=Adiabatic Quantum State Generation and Statistical Zero Knowledge |year=2003}}</ref><ref>{{cite journal|last1=Berry | first1=Dominic W.|author2=Graeme Ahokas|author3=Richard Cleve|last4=Sanders | first4=Barry C.|title=Efficient quantum algorithms for simulating sparse Hamiltonians|year=2007|doi=10.1007/s00220-006-0150-x|journal=Communications in Mathematical Physics|volume=270|issue=2|pages=359–371 |arxiv=quant-ph/0508139 |bibcode= 2007CMaPh.270..359B | s2cid=37923044}}</ref><ref>{{cite journal|last1=Childs |first1=Andrew M. |title=On the relationship between continuous- and discrete-time quantum walk |year=2010 |doi=10.1007/s00220-009-0930-1 |journal=Communications in Mathematical Physics |volume=294 |issue=2 |pages=581–603 |arxiv=0810.0312 |bibcode=2010CMaPh.294..581C |s2cid=14801066 }}</ref><ref>{{cite journal |last1=Kliesch |first1=M. |last2=Barthel |first2=T. |last3=Gogolin |first3=C. |last4=Kastoryano |first4=M. |last5=Eisert |first5=J. |title=Dissipative Quantum Church-Turing Theorem |journal=Physical Review Letters |date=12 September 2011 |volume=107 |issue=12 |pages=120501 |doi=10.1103/PhysRevLett.107.120501 |pmid=22026760 |arxiv=1105.3986 |bibcode= 2011PhRvL.107l0501K |s2cid=11322270 }}</ref>

Quantum simulators have been realized on a number of experimental platforms, including systems of [[ultracold atom|ultracold quantum gases]], polar molecules, trapped ions, photonic systems, quantum dots, and superconducting circuits.<ref name=nat_phys_insight>[http://www.nature.com/nphys/insight/quantum-simulation/index.html#editorial Nature Physics Insight – Quantum Simulation]. Nature.com. April 2012.</ref>

==Solving physics problems==

Many important problems in physics, especially [[thermodynamics|low-temperature physics]] and [[Many-body theory|many-body physics]], remain poorly understood because the underlying [[quantum mechanics]] is vastly complex. Conventional computers, including supercomputers, are inadequate for simulating quantum systems with as few as 30 particles because the dimension of the Hilbert space grows exponentially with particle number.<ref name=Lloyd1996>{{Cite journal
 | title = Universal quantum simulators
 | year = 1996
 | author = Lloyd, S.
 | journal = Science
 | pages = 1073–8
 | volume = 273
 | issue = 5278
 | doi = 10.1126/science.273.5278.1073
 | pmid = 8688088
|bibcode = 1996Sci...273.1073L | s2cid = 43496899
 }}</ref> Better computational tools are needed to understand and rationally design materials whose properties are believed to depend on the collective [[quantum mechanics|quantum behavior]] of hundreds of particles.<ref name=nist-pg/><ref name=Britton/> Quantum simulators provide an alternative route to understanding the properties of these systems. These simulators create clean realizations of specific systems of interest, which allows precise realizations of their properties. Precise control over and broad tunability of parameters of the system allows the influence of various parameters to be cleanly disentangled.

Quantum simulators can solve problems which are difficult to simulate on classical computers because they directly exploit quantum properties of real particles. In particular, they exploit a property of quantum mechanics called [[Quantum superposition|superposition]], wherein a [[quantum particle]] is made to be in two distinct states at the same time, for example, aligned and anti-aligned with an external magnetic field. Crucially, simulators also take advantage of a second quantum property called [[quantum entanglement|entanglement]], allowing the behavior of even physically well separated particles to be correlated.<ref name=nist-pg/><ref name=Britton/><ref name=zoler>{{cite journal
|doi=10.1038/nphys2275
|url=http://211.144.68.84:9998/91keshi/Public/File/34/8-4/pdf/nphys2275.pdf
|bibcode=2012NatPh...8..264C
|title=Goals and opportunities in quantum simulation
|year=2012
|last1=Cirac
|first1=J. Ignacio
|last2=Zoller
|first2=Peter
|journal=Nature Physics
|volume=8
|issue=4
|pages=264–266
|s2cid=109930964
}}{{Dead link|date=February 2020 |bot=InternetArchiveBot |fix-attempted=yes }}</ref>

Recently quantum simulators have been used to obtain [[Time crystal#Experiments|time crystals]]<ref>{{Cite journal |last1=Kyprianidis |first1=A. |last2=Machado |first2=F. |last3=Morong |first3=W. |last4=Becker |first4=P. |last5=Collins |first5=K. S. |last6=Else |first6=D. V. |last7=Feng |first7=L. |last8=Hess |first8=P. W. |last9=Nayak |first9=C. |last10=Pagano |first10=G. |last11=Yao |first11=N. Y. |date=2021-06-11 |title=Observation of a prethermal discrete time crystal |url=https://www.science.org/doi/10.1126/science.abg8102 |journal=Science |language=en |volume=372 |issue=6547 |pages=1192–1196 |arxiv=2102.01695 |bibcode=2021Sci...372.1192K |doi=10.1126/science.abg8102 |issn=0036-8075 |pmid=34112691 |s2cid=231786633}}</ref><ref>{{Cite web |last1=S |first1=Robert |last2=ers |last3=Berkeley |first3=U. C. |date=2021-11-10 |title=Creating Time Crystals Using New Quantum Computing Architectures |url=https://scitechdaily.com/creating-time-crystals-using-new-quantum-computing-architectures/ |access-date=2021-12-27 |website=SciTechDaily |language=en-US}}</ref> and [[Quantum spin liquid#Toric code type|quantum spin liquids]].<ref>{{Cite journal |last1=Semeghini |first1=G. |last2=Levine |first2=H. |last3=Keesling |first3=A. |last4=Ebadi |first4=S. |last5=Wang |first5=T. T. |last6=Bluvstein |first6=D. |last7=Verresen |first7=R. |last8=Pichler |first8=H. |last9=Kalinowski |first9=M. |last10=Samajdar |first10=R. |last11=Omran |first11=A. |date=2021-12-03 |title=Probing topological spin liquids on a programmable quantum simulator |url=https://www.science.org/doi/10.1126/science.abi8794 |journal=Science |volume=374 |issue=6572 |pages=1242–1247 |arxiv=2104.04119 |bibcode=2021Sci...374.1242S |doi=10.1126/science.abi8794 |pmid=34855494 |s2cid=233204440}}</ref><ref>{{Cite web |last=Wood |first=Charlie |date=2021-12-02 |title=Quantum Simulators Create a Totally New Phase of Matter |url=https://www.quantamagazine.org/quantum-simulators-create-a-totally-new-phase-of-matter-20211202/ |access-date=2022-03-11 |website=Quanta Magazine |language=en}}</ref>

==Trapped-ion simulators==
[[Ion trap]] based system forms an ideal setting for simulating interactions in quantum spin models.<ref name="monroe21a">{{cite journal |doi=10.1103/RevModPhys.93.025001|issn=0034-6861  |title=Programmable quantum simulations of spin systems with trapped ions |year=2021 |last1=Monroe |first1=C | last2=et |first2=al  |journal=Rev. Mod. Phys. |volume=93 |issue=4 |pages= 025001 |arxiv=1912.07845 |bibcode=2021RvMP...93b5001M |s2cid=209386771 }}</ref> A [[ion trap|trapped-ion]] simulator, built by a team that included the [[NIST]] can engineer and control interactions among hundreds of [[quantum bit]]s (qubits).<ref name="britton12a">{{cite journal |last1=Britton |first1=Joseph W. |last2=Sawyer |first2=Brian C. |last3=Keith |first3=Adam C. |last4=Wang |first4=C.-C. Joseph |last5=Freericks |first5=James K. |last6=Uys |first6=Hermann |last7=Biercuk |first7=Michael J. |last8=Bollinger |first8=John J. |title=Engineered two-dimensional Ising interactions in a trapped-ion quantum simulator with hundreds of spins |journal=Nature |date=25 April 2012 |volume=484 |issue=7395 |pages=489–492 |doi=10.1038/nature10981 |pmid=22538611 |arxiv=1204.5789 |bibcode = 2012Natur.484..489B |s2cid=4370334 }}</ref> Previous endeavors were unable to go beyond 30 quantum bits. The capability of this simulator is 10 times more than previous devices. It has passed a series of important benchmarking tests that indicate a capability to solve problems in material science that are impossible to model on conventional computers.

The trapped-ion simulator consists of a tiny, single-plane crystal of hundreds of [[beryllium|beryllium ions]], less than 1 millimeter in diameter, hovering inside a device called a [[Penning trap]]. The outermost [[electron]] of each ion acts as a tiny [[quantum magnet]] and is used as a qubit, the quantum equivalent of a “1” or a “0” in a conventional computer. In the benchmarking experiment, physicists used laser beams to cool the ions to near absolute zero. Carefully timed microwave and [[laser pulse]]s then caused the qubits to interact, mimicking the quantum behavior of materials otherwise very difficult to study in the laboratory. Although the two systems may outwardly appear dissimilar, their behavior is engineered to be mathematically identical. In this way, simulators allow researchers to vary parameters that couldn’t be changed in natural solids, such as atomic [[lattice spacing]] and geometry.

Friedenauer et al., adiabatically manipulated 2 spins, showing their separation into ferromagnetic and antiferromagnetic states.<ref>{{cite journal |last1=Friedenauer |first1=A. |last2=Schmitz |first2=H. |last3=Glueckert |first3=J. T. |last4=Porras |first4=D. |last5=Schaetz |first5=T. |title=Simulating a quantum magnet with trapped ions |journal=Nature Physics |date=27 July 2008 |volume=4 |issue=10 |pages=757–761 |doi=10.1038/nphys1032 |bibcode=2008NatPh...4..757F|doi-access=free }}</ref>
Kim et al., extended the trapped ion quantum simulator to 3 spins, with global antiferromagnetic Ising interactions featuring frustration and showing the link between frustration and entanglement<ref>{{cite journal |last1=Kim |first1=K. |last2=Chang |first2=M.-S. |last3=Korenblit |first3=S. |last4=Islam |first4=R. |last5=Edwards |first5=E. E.|author5-link= Emily E. Edwards |last6=Freericks |first6=J. K. |last7=Lin |first7=G.-D. |last8=Duan |first8=L.-M. |last9=Monroe |first9=C. |title=Quantum simulation of frustrated Ising spins with trapped ions |journal=Nature |date=June 2010 |volume=465 |issue=7298 |pages=590–593 |doi=10.1038/nature09071 |bibcode=2010Natur.465..590K |pmid=20520708 |s2cid=2479652 }}</ref>
and Islam et al., used adiabatic quantum simulation to demonstrate the sharpening of a phase transition between paramagnetic and ferromagnetic ordering as the number of spins increased from 2 to 9.<ref>{{cite journal |last1=Islam |first1=R. |last2=Edwards |first2=E.E. |author2-link= Emily E. Edwards |last3=Kim |first3=K. |last4=Korenblit |first4=S. |last5=Noh |first5=C. |last6=Carmichael |first6=H. |last7=Lin |first7=G.-D. |last8=Duan |first8=L.-M. |last9=Joseph Wang |first9=C.-C. |last10=Freericks |first10=J.K. |last11=Monroe |first11=C. |title=Onset of a quantum phase transition with a trapped ion quantum simulator |journal=Nature Communications |date=5 July 2011 |volume=2 |issue=1 |pages=377 |doi=10.1038/ncomms1374 |pmid=21730958 |arxiv=1103.2400 |bibcode=2011NatCo...2..377I |s2cid=33407 }}</ref>
Barreiro et al. created a digital quantum simulator of interacting spins with up to 5 trapped ions by coupling to an open reservoir<ref>{{cite journal |last1=Barreiro |first1=Julio T. |last2=Müller |first2=Markus |last3=Schindler |first3=Philipp |last4=Nigg |first4=Daniel |last5=Monz |first5=Thomas |last6=Chwalla |first6=Michael |last7=Hennrich |first7=Markus |last8=Roos |first8=Christian F. |last9=Zoller |first9=Peter |last10=Blatt |first10=Rainer |title=An open-system quantum simulator with trapped ions |journal=Nature |date=23 February 2011 |volume=470 |issue=7335 |pages=486–491 |doi=10.1038/nature09801 |pmid=21350481 |arxiv=1104.1146 |bibcode=2011Natur.470..486B |s2cid=4359894 }}</ref> and
Lanyon ''et al.'' demonstrated digital quantum simulation with up to 6 ions.<ref>{{cite journal |last1=Lanyon |first1=B. P. |last2=Hempel |first2=C. |last3=Nigg |first3=D. |last4=Muller |first4=M. |last5=Gerritsma |first5=R. |last6=Zahringer |first6=F. |last7=Schindler |first7=P. |last8=Barreiro |first8=J. T. |last9=Rambach |first9=M. |last10=Kirchmair |first10=G. |last11=Hennrich |first11=M. |last12=Zoller |first12=P. |last13=Blatt |first13=R. |last14=Roos |first14=C. F. |title=Universal Digital Quantum Simulation with Trapped Ions |journal=Science |date=1 September 2011 |volume=334 |issue=6052 |pages=57–61 |doi=10.1126/science.1208001 |arxiv=1109.1512 |bibcode=2011Sci...334...57L |pmid=21885735 |s2cid=206535076 }}</ref>
Islam, et al., demonstrated adiabatic quantum simulation of the transverse Ising model with variable (long) range interactions with up to 18 trapped ion spins, showing control of the level of spin frustration by adjusting the antiferromagnetic interaction range.<ref>{{cite journal |last1=Islam |first1=R. |last2=Senko |first2=C. |last3=Campbell |first3=W. C. |last4=Korenblit |first4=S. |last5=Smith |first5=J. |last6=Lee |first6=A. |last7=Edwards |first7=E. E. |author7-link= Emily E. Edwards |last8=Wang |first8=C.- C. J. |last9=Freericks |first9=J. K. |last10=Monroe |first10=C. |title=Emergence and Frustration of Magnetism with Variable-Range Interactions in a Quantum Simulator |journal=Science |date=2 May 2013 |volume=340 |issue=6132 |pages=583–587 |doi=10.1126/science.1232296 |pmid=23641112 |arxiv=1210.0142 |bibcode = 2013Sci...340..583I |s2cid=14692151 }}</ref>
Britton, et al. from NIST has experimentally benchmarked Ising interactions in a system of hundreds of qubits for studies of quantum magnetism.<ref name="britton12a"/>
Pagano, et al., reported a new cryogenic ion trapping system designed for long time storage of large ion chains demonstrating coherent one and two-qubit operations for chains of up to 44 ions.<ref>{{cite journal |last1=Pagano |first1=G |last2=Hess |first2=P W |last3=Kaplan |first3=H B |last4=Tan |first4=W L |last5=Richerme |first5=P |last6=Becker |first6=P |last7=Kyprianidis |first7=A |last8=Zhang |first8=J |last9=Birckelbaw |first9=E |last10=Hernandez |first10=M R |last11=Wu |first11=Y |last12=Monroe |first12=C |title=Cryogenic trapped-ion system for large scale quantum simulation |journal=Quantum Science and Technology |date=9 October 2018 |volume=4 |issue=1 |pages=014004 |doi=10.1088/2058-9565/aae0fe |arxiv=1802.03118 |s2cid=54518534 }}</ref> Joshi, et al., probed the quantum dynamics of 51 individually controlled ions, realizing a long-range interacting spin chain.<ref>{{cite journal |last1=Joshi |first1=M.K. |last2=Kranzl |first2=F. |last3=Schuckert |first3=A. |last4=Lovas |first4=I. |last5=Maier |first5=C. |last6=Blatt |first6=R. |last7=Knap |first7=M. |last8=Roos |first8=C.F. |title=Observing emergent hydrodynamics in a long-range quantum magnet |journal=Science |date=13 May 2022 |volume=6594 |issue=376 |pages=720–724 |doi=10.1126/science.abk2400 |pmid=35549407  |arxiv=2107.00033 |bibcode=2022Sci...376..720J |s2cid=235694285 |url=https://www.science.org/doi/10.1126/science.abk2400 |access-date=13 May 2022}}</ref>

==Ultracold atom simulators==
Many [[ultracold atom]] experiments are examples of quantum simulators. These include experiments studying [[Bose-Hubbard model|bosons]] or [[Fermi-Hubbard model|fermions]] in [[optical lattice]]s, the unitary Fermi gas, [[Rydberg atom]] arrays in [[optical tweezers]]. A common thread for these experiments is the capability of realizing generic Hamiltonians, such as the [[Hubbard model|Hubbard]] or [[Ising model|transverse-field Ising]] Hamiltonian. Major aims of these experiments include identifying low-temperature phases or tracking out-of-equilibrium dynamics for various models, problems which are theoretically and numerically intractable.<ref>{{cite journal |last1=Bloch |first1=Immanuel |last2=Dalibard |first2=Jean |last3=Nascimbene |first3=Sylvain |title=Quantum simulations with ultracold quantum gases |journal=Nature Physics |date=2012 |volume=8 |issue=4 |pages=267–276 |doi=10.1038/nphys2259 |bibcode=2012NatPh...8..267B |s2cid=17023076 }}</ref><ref>{{cite journal |last1=Gross |first1=Christian |last2=Bloch |first2=Immanuel |title=Quantum simulations with ultracold atoms in optical lattices |journal=Nature |date=September 8, 2017 |volume=357 |issue=6355 |pages=995–1001 |doi=10.1126/science.aal3837 |pmid=28883070 |bibcode=2017Sci...357..995G |doi-access=free }}</ref> Other experiments have realized condensed matter models in regimes which are difficult or impossible to realize with conventional materials, such as the [[Quantum spin Hall effect|Haldane model]] and the [[Quantum Hall effect|Harper-Hofstadter model]].<ref>{{cite journal |last1=Jotzu |first1=Gregor |last2=Messer |first2=Michael |last3=Desbuquois |first3=Rémi |last4=Lebrat |first4=Martin |last5=Uehlinger |first5=Thomas |last6=Greif |first6=Daniel |last7=Esslinger |first7=Tilman |title=Experimental realization of the topological Haldane model with ultracold fermions |journal=Nature |date=13 November 2014 |volume=515 |issue=7526 |pages=237–240 |doi=10.1038/nature13915 |pmid=25391960 |arxiv=1406.7874 |bibcode=2014Natur.515..237J |s2cid=204898338 }}</ref><ref>{{cite journal |last1=Simon |first1=Jonathan |title=Magnetic fields without magnetic fields |journal=Nature |date=13 November 2014 |volume=515 |issue=7526 |pages=202–203 |doi=10.1038/515202a|pmid=25391956 |doi-access=free }}</ref><ref>{{cite journal |last1=Zhang |first1=Dan-Wei |last2=Zhu |first2=Yan-Qing |last3=Zhao |first3=Y. X. |last4=Yan |first4=Hui |last5=Zhu |first5=Shi-Liang |title=Topological quantum matter with cold atoms |journal=Advances in Physics |date=29 March 2019 |volume=67 |issue=4 |pages=253–402 |doi=10.1080/00018732.2019.1594094|arxiv=1810.09228 |s2cid=91184189 }}</ref><ref>{{Cite journal|last1=Alberti|first1=Andrea|last2=Robens|first2=Carsten|last3=Alt|first3=Wolfgang|last4=Brakhane|first4=Stefan|last5=Karski|first5=Michał|last6=Reimann|first6=René|last7=Widera|first7=Artur|last8=Meschede|first8=Dieter|date=2016-05-06|title=Super-resolution microscopy of single atoms in optical lattices|journal=New Journal of Physics|language=en|volume=18|issue=5|pages=053010|doi=10.1088/1367-2630/18/5/053010|arxiv=1512.07329 |bibcode=2016NJPh...18e3010A |issn=1367-2630|doi-access=free}}</ref><ref>{{Citation|last1=Robens|first1=Carsten|title=Quantum Walks with Neutral Atoms: Quantum Interference Effects of One and Two Particles|date=2016-09-18|url=https://www.worldscientific.com/doi/abs/10.1142/9789813200616_0001|work=Laser Spectroscopy|pages=1–15|publisher=WORLD SCIENTIFIC|doi=10.1142/9789813200616_0001|isbn=978-981-320-060-9|access-date=2020-05-25|last2=Brakhane|first2=Stefan|last3=Meschede|first3=Dieter|last4=Alberti|first4=A.|arxiv=1511.03569|s2cid=118452312}}</ref>

==Superconducting qubits==
Quantum simulators using superconducting qubits fall into two main categories. First, so called [[Quantum annealing|quantum annealers]] determine ground states of certain Hamiltonians after an adiabatic ramp. This approach is sometimes called [[adiabatic quantum computing]]. Second, many systems emulate specific Hamiltonians and study their ground state properties, quantum phase transitions, or time dynamics.<ref>{{cite journal |last1=Paraoanu |first1=G. S. |title=Recent Progress in Quantum Simulation Using Superconducting Circuits |journal=Journal of Low Temperature Physics |date=4 April 2014 |volume=175 |issue=5–6 |pages=633–654 |doi=10.1007/s10909-014-1175-8 |arxiv=1402.1388 |bibcode=2014JLTP..175..633P |s2cid=119276238 }}</ref> Several important recent results include the realization of a [[Mott insulator]] in a driven-dissipative [[Bose-Hubbard model|Bose-Hubbard system]] and studies of phase transitions in lattices of superconducting resonators coupled to qubits.<ref>{{cite journal |last1=Ma |first1=Ruichao |last2=Saxberg |first2=Brendan |last3=Owens |first3=Clai |last4=Leung |first4=Nelson |last5=Lu |first5=Yao |last6=Simon |first6=Jonathan |last7=Schuster |first7=David I. |title=A dissipatively stabilized Mott insulator of photons |journal=Nature |date=6 February 2019 |volume=566 |issue=7742 |pages=51–57 |doi=10.1038/s41586-019-0897-9|pmid=30728523 |arxiv=1807.11342 |bibcode=2019Natur.566...51M |s2cid=59606678 }}</ref><ref>{{cite journal |last1=Fitzpatrick |first1=Mattias |last2=Sundaresan |first2=Neereja M. |last3=Li |first3=Andy C. Y. |last4=Koch |first4=Jens |last5=Houck |first5=Andrew A. |title=Observation of a Dissipative Phase Transition in a One-Dimensional Circuit QED Lattice |journal=Physical Review X |date=10 February 2017 |volume=7 |issue=1 |pages=011016 |doi=10.1103/PhysRevX.7.011016| arxiv=1607.06895|bibcode=2017PhRvX...7a1016F |s2cid=3550701 }}</ref>

==See also==
* [[Hamiltonian simulation]]
* [[Quantum Turing machine]]
* [[Quantum computing]]

==References==
{{reflist|30em}}

==External links==
*[https://web.archive.org/web/20081123183419/http://www.ceid.upatras.gr/tech_news/papers/quantum_theory.pdf Deutsch's 1985 paper]

{{Quantum information}}
{{emerging technologies|quantum=yes|other=yes}}

[[Category:Quantum computing]]
