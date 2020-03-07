<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index(Request $request, \Swift_Mailer $mailer):Response
    {

        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $entityManager = $this->getDoctrine()->getManager();

            $entityManager->persist($contact);

            $entityManager->flush();

            $nom = $contact->getNom();
            $prenom = $contact->getPrenom();
            $email = $contact->getEmail();
            $Message = $contact->getMessage();
            $sujet = $contact->getSujet();
            $date = date_format($contact->getDateEnvoi(), "d-m-Y");


            $message = (new \Swift_Message($sujet))
                ->setFrom([$email => $nom." ".$prenom])
                ->setTo(['detrez.fabien@gmail.com', 'detrez.fabien@gmail.com'])
                ->setCharset('UTF-8')
                ->setBody("<html lang=><head><meta charset='UTF-8'><title></title></head><body>".$Message."</body></html>")
                ->addPart("Le message a été envoyé le $date ");
//                ->attach(Swift_Attachment::fromPath('my-document.pdf'))
// Send the message
            $message->setContentType("text/html");
            $mailer->send($message);

            return $this->redirectToRoute('home');
        }


        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
            'form' => $form->createView()

        ]);
    }
}
