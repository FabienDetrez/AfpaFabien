<?php

namespace App\Controller;

use App\Entity\TypeVente;
use App\Form\TypeVenteType;
use App\Repository\TypeVenteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/type/vente")
 */
class TypeVenteController extends AbstractController
{
    /**
     * @Route("/", name="type_vente_index", methods={"GET"})
     */
    public function index(TypeVenteRepository $typeVenteRepository): Response
    {
        return $this->render('type_vente/index.html.twig', [
            'type_ventes' => $typeVenteRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="type_vente_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $typeVente = new TypeVente();
        $form = $this->createForm(TypeVenteType::class, $typeVente);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($typeVente);
            $entityManager->flush();

            return $this->redirectToRoute('type_vente_index');
        }

        return $this->render('admin/typeVente/new.html.twig', [
            'type_vente' => $typeVente,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="type_vente_show", methods={"GET"})
     */
    public function show(TypeVente $typeVente): Response
    {
        return $this->render('admin/typeVente/show.html.twig', [
            'type_vente' => $typeVente,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="type_vente_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, TypeVente $typeVente): Response
    {
        $form = $this->createForm(TypeVenteType::class, $typeVente);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('type_vente_index');
        }

        return $this->render('admin/typeVente/edit.html.twig', [
            'type_vente' => $typeVente,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="type_vente_delete", methods={"DELETE"})
     */
    public function delete(Request $request, TypeVente $typeVente): Response
    {
        if ($this->isCsrfTokenValid('delete'.$typeVente->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($typeVente);
            $entityManager->flush();
        }

        return $this->redirectToRoute('type_vente_index');
    }
}
