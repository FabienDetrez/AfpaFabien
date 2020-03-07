<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProduitRepository")
 * @Vich\Uploadable()
 */
class Produit
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomProduit;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $surface;

    /**
     * @ORM\Column(type="integer")
     */
    private $nombrePiece;

    /**
     * @ORM\Column(type="integer")
     */
    private $prix;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=7)
     */
    private $longitude;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=7)
     */
    private $latitude;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeProduit", inversedBy="produits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $typeProduit;

    /**
     * @ORM\Column(type="boolean")
     */
    private $statut;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Photo", mappedBy="produit", orphanRemoval=true)
     */
    private $Photo;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeVente", inversedBy="produits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $TypeVente;

    public function __construct()
    {
        $this->Photo = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomProduit(): ?string
    {
        return $this->nomProduit;
    }

    public function setNomProduit(string $nomProduit): self
    {
        $this->nomProduit = $nomProduit;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getSurface(): ?int
    {
        return $this->surface;
    }

    public function setSurface(int $surface): self
    {
        $this->surface = $surface;

        return $this;
    }

    public function getNombrePiece(): ?int
    {
        return $this->nombrePiece;
    }

    public function setNombrePiece(int $nombrePiece): self
    {
        $this->nombrePiece = $nombrePiece;

        return $this;
    }

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(int $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getTypeProduit(): ?TypeProduit
    {
        return $this->typeProduit;
    }

    public function setTypeProduit(?TypeProduit $typeProduit): self
    {
        $this->typeProduit = $typeProduit;

        return $this;
    }

    public function getStatut(): ?bool
    {
        return $this->statut;
    }

    public function setStatut(bool $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    /**
     * @return Collection|Photo[]
     */
    public function getPhoto(): Collection
    {
        return $this->Photo;
    }

    public function addPhoto(Photo $photo): self
    {
        if (!$this->Photo->contains($photo)) {
            $this->Photo[] = $photo;
            $photo->setProduit($this);
        }

        return $this;
    }

    public function removePhoto(Photo $photo): self
    {
        if ($this->Photo->contains($photo)) {
            $this->Photo->removeElement($photo);
            // set the owning side to null (unless already changed)
            if ($photo->getProduit() === $this) {
                $photo->setProduit(null);
            }
        }

        return $this;
    }

    public function getTypeVente(): ?TypeVente
    {
        return $this->TypeVente;
    }

    public function setTypeVente(?TypeVente $TypeVente): self
    {
        $this->TypeVente = $TypeVente;

        return $this;
    }

}
