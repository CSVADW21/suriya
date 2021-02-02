
ArrayList<simplexParticle> particles = new ArrayList<simplexParticle>();

void pattern(int iMouseX, int iMouseY)
{
    particles.add(new simplexParticle(iMouseX, iMouseY));
}

void run() 
{
    for(int i=0; i<particles.size(); i++)
    {
      if(particles.get(i).ipMouseY>=2*height)
        particles.remove(i);
    }
}
