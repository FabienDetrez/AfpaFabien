<?php

namespace App\Form;

use App\Entity\Produit;
use App\Entity\TypeProduit;
use App\Entity\TypeVente;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProduitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nomProduit')
            ->add('description')
            ->add('surface')
            ->add('nombrePiece')
            ->add('prix')
            ->add('longitude')
            ->add('latitude')
            ->add('typeProduit', EntityType::class, array(
                'class' => TypeProduit::class,
                'required' => true,
                'label' => 'Produit',
                'choice_label' => 'nomTypeProduit',
                'multiple' => false))
            ->add('typeVente', EntityType::class, array(
                'class' => TypeVente::class,
                'required' => true,
                'label' => 'Produit',
                'choice_label' => 'nomTypeVente',
                'multiple' => false))
            ->add('statut', CheckboxType::class, array(
                'label' => 'Publier'
            ))

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Produit::class,
        ]);
    }
}
